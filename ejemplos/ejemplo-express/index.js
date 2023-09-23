
/**
 * Creo desde terminal archivo package.json con las dependencias en ejemplo-express/
 * cd ejemplo-express/
 * npm init -y 
 * npm install express
 * npx nodemon index.js 
 */


'use strict';

// cargar la librería de express
const express = require('express');

// crear la aplicación
const app = express();



/**
 * si haces una peticion en navegador http://127.0.0.1:8000
 * te dará Hola
 */
// añadir una ruta
app.get('/', (request, response, next) => {
  response.send('Hola');
});

/**
 * si haces una peticion en navegador http://127.0.0.1:8000/facturas
 * te dará {"result":[1,2,3]}
 */
app.get('/facturas', (request, response, next) => {
  response.send({ result: [ 1, 2, 3]});
});

// arrancamos el servidor en el puerto 8000
app.listen(8000, () =>  {
  console.log('Servidor HTTP arrancado en http://127.0.0.1:8000');
})