const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db");
const axios = require("axios");

router.get("/", async (req, res, next) => {
  try {
    const resul = await Activity.findAll();
    if (resul) {
      res.status(200).json(resul);
    } else {
      res.status(404).json("Activitys Not Found");
    }
  } catch (error) {
    console.log(error);
  }
});
router.get("/a/", async (req, res, next)=>{
  const {actividad} = req.body
  const countr = await Activity.count({
    where: {
      id: actividad
    },
    include: Country
  })
  console.log(countr)

})

router.post("/", async (req, res, next) => {
  try {
    const { name, difficulty, duration, season, country } = req.body;
    if (name && difficulty && duration && season && country) {
      const Activitys = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,
      });
      country.forEach(async (country) => {
        const activityCountry = await Country.findOne({
          where: {
            name: country,
          },
        });
        await Activitys.addCountry(activityCountry);
      });
      res.status(200).send("Activity created successfully");
    } else {
      res.status(404).send("Data");
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res, next)=>{
  try {
    const {id_activity, id_country} = req.body
    const activitys = await Activity.findOne({
      where:{
        id: id_activity
      }
    });
    console.log(activitys.length)
    const counstrys = await Country.findByPk(id_country);
    await activitys.removeCountry(counstrys)
    let paises = await Country.findOne({
      where: {
        id: id_country,
      },
      include: Activity,
    });

    if (paises) {
      res.status(200).send(paises);
    }
  } catch (error) {
    res.status(404).send(error)
    console.log(error)
  }


})


module.exports = router;
