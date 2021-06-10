# poc-express-mip
Prueba de concepto utilizando Node JS framework web Express, MongoDB en el marco del sistema MIP.
Actualmente utilizando Node Express 4.17 y MongoDB 3.6.6

# Init de proyecto
npm init -y

# Instalación de dependencias (módulos)
npm i express morgan nodemon cors body-parser mongoose -g 

# Dependencias adicionales
npm i bcrypt --save

# TODO:
1) agregar soporte de Babel
npm i @babel/core @babel/cli @babel/node @babel/preset-env -D
Listo!

1.1) crear carpetas auxiliares
cd src
mkdir controllers libs middlewares models routes

2) brindar seguridad via JWT
3) rework del proyecto en términos del estandard de módulos ES6


