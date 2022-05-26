const { Router } = require('express');
const countrieRouter = require('./countries')
const activityRouter = require('./activity')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router =  Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countrieRouter);
router.use('/activity', activityRouter);

module.exports = router;
