const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");


const getfromDb = async () => {
  const data = await Country.findAll({
    include: Activity
  });
  return data;
};
router.get("/", async (req, res, next) => {
  try {
    //buscamos si tenmos dato en la base de datos
    const dataget = await getfromDb();
    //si no hay buscamos los datos
    if (dataget.length < 1) {
      const getapi = await axios.get("https://restcountries.com/v3/all");
      const getcountry = getapi.data.map((p) => {
        return {
          id: p.cca3,
          name: p.name.common,
          flagimage: p.flags[0],
          continent: p.region,
          capital: p.capital ? p.capital[0] : "Not found",
          subregion: p.subregion ? p.subregion : "Not Found",
          area: Math.round(p.area),
          subregion: p.subregion,
          population: p.population,
        };
      });
      //llenamos la tabla
      let pais = await Country.bulkCreate(getcountry);

      res.status(200).send(pais);
    }else{
      const { name } = req.query;
      // name.charAt(0).toUpperCase()
      if(name){
       
        const countrybyname = await Country.findAll({
          where: {
            name: {
              [Op.iLike]: `%${name}%`
            }
          }
        })
        
        countrybyname.length ? res.status(200).send(countrybyname): res.status(404).send("Country not found");
      }else{
        res.status(200).send(dataget)
      }
    }
  } catch (error) {
      console.log(error)
  }
});
router.get("/:idCountry", async (req, res, next) => {

  try {
    const { idCountry } = req.params;
    
if(idCountry){
  let paises = await Country.findOne({
    where: {
        id: idCountry.toUpperCase()
    },
    include: Activity
})
if(paises){
  res.send(paises);
}
}
   

    
  } catch (error) {
      console.log(error)
  }
  
});
module.exports = router;
