const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db");
const axios = require("axios");
router.post("/", async (req,res,next)=>{
    try {
        const {name, difficulty, duration, season, countryid} = req.body;
    
    const Activitys  = await Activity.create({
            name: name, difficulty: difficulty, duration: duration, season:season
    })
    console.log(Activitys)
    if(!Activitys){
        throw new Error('Activity not create')
    }
    const allresult = countryid.forEach(id => {
        Activitys.addCountries(id);
   });  
    res.json('new Activity')
    } catch (error) {
        console.log(error)
    }
    
})
module.exports = router;