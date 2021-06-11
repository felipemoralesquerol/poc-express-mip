const { default: app } = require("../app");

 // mostrar 
 exports.show = async (req, res, next) => {
    try {
      const salida = {"name": app.get('pkg').name,
                      "author": app.get('pkg').author,
                      "version": app.get('pkg').version
                      };
      console.log(salida);
      res.json(salida);
    } catch (err) {
      //console.log(err);
      res.status(400).json({message: 'Error al procesar la petición: '+err.message});
      // next();
    }
  };