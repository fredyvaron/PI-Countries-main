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


module.exports = router;
