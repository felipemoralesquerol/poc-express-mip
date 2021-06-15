const User = require('../models/User');
import jwt from 'jsonwebtoken';
import config from '../config';

export const signUp = async (req, res) =>  {
   const {username, email, password, roles} = req.body;
   console.log(req.body);
   
   //const userFound = await User.find({email});

   const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    });
    //console.log(newUser);
    const savedUser = await newUser.save();
    const token = jwt.sign({id: savedUser.id}, config.SECRET, {
        expiresIn: 60000
    }
    );

    res.json({token});
};

export const signIn = async (req, res) =>  {
  res.json('signIn');
};




// listar 
exports.list = async (req, res) => {
  try {
    // solamente devuelve el email ocultando la contraseña  
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
    const user = new User(req.body);

    try {
      await user.save();
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
      //console.log(req);  
      const user = await User.findById(req.params.id);
      if (!user) {
         res.status(404).json({message: 'Usuario no encontrado' });
      } else {
        res.json(user);  
      };
      
    } catch (err) {
      //console.log(err);
      res.status(400).json({message: 'Error al procesar la petición' });
      // next();
    }
  };

  
  // borrar
  exports.deleteById = async (req, res, next) => {
    try {
      console.log(req.params.id);  
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
         res.status(404).json({message: 'Usuario no encontrado' });
        }else {
         res.json(user);  
        }
      
    } catch (err) {
      //console.log(err);
      res.status(400).json({message: 'Error al procesar la petición' });
      // next();
    }
  };
    