const Contribuyentes = require('../models/Contribuyentes');

// listar 
exports.list = async (req, res) => {
  try {
    const contribuyentes = await Contribuyentes.find({});
    res.json(contribuyentes);
  } catch (err) {
    // console.log(err);
    res.send(err);
    //next();
  }
};

// agregar 
exports.add = async (req, res, next) => {
    try {
      const {nombre, apellido, telefono, email} = req.body;
      const contribuyentes = new Contribuyentes({nombre, apellido, telefono, email});
    
      const contribuyenteSaved = await contribuyentes.save();
      res.status(201).json(contribuyenteSaved);
    } catch (err) {
      console.log(err);
      res.send(err);
      next();
    }
  };
  
// mostrar 
exports.show = async (req, res, next) => {
    try {
      console.log(req.params.id);  
      const contribuyente = await Contribuyentes.findById(req.params.id);
      if (!contribuyente) {
         res.status(404).json({message: 'El contribuyente no encontrado' });
      }
      else {
         res.json(contribuyente);
      };

    } catch (err) {
      //console.log(err);
      res.status(400).json({message: 'Error al procesar la petición' });
      // next();
    }
  };

// delete 
exports.deleteById = async (req, res, next) => {
    try {
      // console.log(req);  
      const deletedContribuyente = await Contribuyentes.findByIdAndDelete(req.params.id);
      if (!deletedContribuyente) {
         res.status(404).json({message: 'El contribuyente no encontrado' });
        };
      res.json(deletedContribuyente);
    } catch (err) {
      //console.log(err);
      res.status(400).json({message: 'Error al procesar la petición' });
      // next();
    }
  };
    