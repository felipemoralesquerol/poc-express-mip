const express = require('express');

const router = express.Router();

const contribuyentesController = require('../controllers/contribuyentesController');
const userController = require('../controllers/usersController');
const localidadesController= require('../controllers/localidadesController');

module.exports = function (){
    // post: /contribuyentes
    router.post('/contribuyentes', contribuyentesController.add);
    // get: /contribuyentes
    router.get('/contribuyentes', contribuyentesController.list);
    // get: /contribuyentes/:id
    router.get('/contribuyentes/:id', contribuyentesController.show);
    
    // localidades
    // post: 
    router.post('/localidades', localidadesController.add);
    // get: 
    router.get('/localidades', localidadesController.list);
    // get: 
    router.get('/localidades/:id', localidadesController.show);  

    // user
    // post: 
    router.post('/user', userController.add);
    // get: 
    router.get('/user', userController.list);
    // get: 
    router.get('/user/:id', userController.show); 
   

    return router;
};