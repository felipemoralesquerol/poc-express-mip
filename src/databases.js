const mongoose = require('mongoose');

// Conexión a Mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rafam',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('Db is connected'))
  .catch(error => console.log(error));

