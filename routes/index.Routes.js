let indexControlador = require('../controller/controllerIndex');
let express = require('express');
let router = express.Router();



router.get('/',indexControlador.index);


module.exports = router; 