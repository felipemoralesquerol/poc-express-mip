const express = require('express');

const router = express.Router();

const contribuyentesController = require('../controllers/contribuyentesController');
const userController = require('../controllers/usersController');
const localidadesController= require('../controllers/localidadesController');

module.exports = function (){
    // contribuyentes
    router.post('/contribuyentes', contribuyentesController.add);
    router.get('/contribuyentes', contribuyentesController.list);
    router.get('/contribuyentes/:id', contribuyentesController.show);
    
    // localidades
    router.post('/localidades', localidadesController.add);
    router.get('/localidades', localidadesController.list);
    router.get('/localidades/:id', localidadesController.show);  

    // user (usuarios)
    router.post('/user', userController.add);
    router.get('/user', userController.list);
    router.get('/user/:id', userController.show); 

    return router;
};