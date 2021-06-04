const express = require('express');

const router = express.Router();

const contribuyentesController = require('../controllers/contribuyentesController');
const userController = require('../controllers/contribuyentesController');
const localidadesController= require('../controllers/localidadesController');

module.exports = function (){
    // post: /contribuyentes
    router.post('/contribuyentes', contribuyentesController.add);
    // get: /contribuyentes
    router.get('/contribuyentes', contribuyentesController.list);
    // get: /contribuyentes/:id
    router.get('/contribuyentes/:id', contribuyentesController.show);
    
    // post: /localidades
    router.post('/localidades', localidadesController.add);
    // get: /localidades
    router.get('/localidades', localidadesController.list);
    // get: /localidades/:id
    router.get('/localidades/:id', localidadesController.show);  

   

    return router;
};