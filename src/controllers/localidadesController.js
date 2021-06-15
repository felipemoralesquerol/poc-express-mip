const Localidades = require('../models/Localidades');

// listar 
exports.list = async (req, res) => {
  try {
    const localidades = await Localidades.find({});
    res.json(localidades);
  } catch (err) {
    console.log(err);
    res.send(err);
    next();
  }
};

// agregar 
exports.add = async (req, res) => {
    const localidades = new Localidades(req.body);

    try {
      await localidades.save();
      res.json({message: 'Nueva localidad agregada' });
    } catch (err) {
      console.log(err);
      res.send(err);
      next();
    }
  };
  
  // mostrar 
exports.show = async (req, res, next) => {
    try {
      //console.log(req);  
      const localidades = await Localidades.findById(req.params.id);
      if (!localidades) {
         res.status(404).json({message: 'Localidad no encontrada' });
       }
       else{
            res.json(localidades);
        };
      } catch (err) {
       //console.log(err);
       console.log('Error al procesar la petición');
       res.status(400).json({message: 'Error al procesar la petición' });
      // next();
    }
  };
  