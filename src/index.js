import app from './app';
import morgan from 'morgan';


const express = require('express');

const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const cors = require('cors');

const mailer = require("nodemailer");

const routes = require('./routes');



// Conexión a Mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rafam',{
    useNewUrlParser: true
});

// habilitar body parser
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// habilitar cors 
//app.use(cors);

// Settings
app.set('port', 5000)

// Middleware
app.use(morgan('dev'));


// definicion de rutas
app.use('/', routes());


// start the server
app.listen(app.get('port'),() =>{
    console.log ('Server starting', app.get('port')); 
 }) 