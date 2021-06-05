const User = require('../models/User');

// listar 
exports.list = async (req, res) => {
  try {
    const user = await User.find({}, { email:1 });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.send(err);
    next();
  }
};

// agregar 
exports.add = async (req, res) => {
    const localidades = new User(req.body);

    try {
      await localidades.save();
      res.json({message: 'Nuevo usuario agregado' });
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
      const user = await User.findById(req.params.id);
      if (!user) {
         res.status(404).json({message: 'Usuario no encontrado' });
        };
      res.json(user);
    } catch (err) {
      //console.log(err);
      res.status(400).json({message: 'Error al procesar la petición' });
      // next();
    }
  };
  