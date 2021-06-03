const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const localidadesSchema = new Schema ({
 codigo: {
     type : String,
     trim : true,
 },
 nombre: {
     type : String,
     trim : true,
 },
 poblacion: {
     type: Integer,
     trim: true,
     unique: true,
     lowercase: true,
 },
 superficie: {
     type: Integer,
     trim: true,
 }
});

module.exports = mongoose.model('localidades', localicadesSchema);