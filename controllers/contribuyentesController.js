const Contribuyentes = require('../models/Contribuyentes');

// listar elementos
exports.list = async (req, res) => {
  try {
    const contribuyentes = await Contribuyentes.find({});
    res.json(contribuyentes);
  } catch (err) {
    console.log(err);
    res.send(err);
    next();
  }
};

// listar elementos
exports.add = async (req, res) => {
    const contribuyentes = new Contribuyentes(req.body);

    try {
      await contribuyentes.save();
      res.json({message: 'Nuevo contribuyente agregado' });
    } catch (err) {
      console.log(err);
      res.send(err);
      next();
    }
  };
  
  // mostrar 
exports.show = async (req, res, next) => {
    try {
      console.log(req);  
      const contribuyente = await Contribuyentes.findById(req.params.id);
      if (!contribuyente) {
         res.status(404).json({message: 'El contribuyente no encontrado' });
        };
      res.json(contribuyente);
    } catch (err) {
      //console.log(err);
      res.status(400).json({message: 'Error al procesar la petición' });
      // next();
    }
  };
  