const express = require('express');

const router = express.Router();

const contribuyentesController = require('../controllers/contribuyentesController');
const userSchema = require('../controllers/contribuyentesController');

module.exports = function (){
    // post: /contribuyentes
    router.post('/contribuyentes', contribuyentesController.add);
    // get: /contribuyentes
    router.get('/contribuyentes', contribuyentesController.list);
    // get: /contribuyentes/:id
    router.get('/contribuyentes/:id', contribuyentesController.show);

   

    return router;
};