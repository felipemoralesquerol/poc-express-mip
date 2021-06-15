import app from './app';
import morgan from 'morgan';
import pkg from '../package.json';
import './databases';

const express = require('express');


//const bodyParser = require('body-parser');
const cors = require('cors');

const mailer = require("nodemailer");

const routes = require('./routes');
import authRoutes from './routes/auth.routes'



// habilitar body parser
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// habilitar cors 
//app.use(cors);

// Settings
app.set('port', 5000)
app.set('pkg', pkg);

// Middleware
app.use(morgan('dev'));


// definicion de rutas
app.use('/', routes());
app.use('/api/auth', authRoutes);

// start the server
app.listen(app.get('port'),() =>{
    console.log ('Server starting', app.get('port')); 
 }) 