const { Router } = require('express');
const router = Router();
const obtenerMorrControlla = require('./controladorUser');
const crearMorrControll = require('./controladorUser');


router.get('/UserMorr', obtenerMorrControlla.obtenerMorrControlla);
router.post('/crear', crearMorrControll.crearMorrControlla);
module.exports = router;