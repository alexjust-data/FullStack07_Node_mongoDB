
/**
 * En el modo estricto, se aplican una serie de restricciones adicionales y se generan 
 * errores para ciertas acciones que, en el modo no estricto (modo por defecto), 
 * no producirían errores, pero podrían llevar a resultados inesperados.
 * Algunos de los cambios y restricciones más comunes que se aplican en el modo estricto incluyen:
 * 1. Declaraciones de variables: Se requiere el uso de var, let, o const para declarar variables. 
 *    Las variables no declaradas implícitamente como globales causan un error.
 * 2. Asignaciones no permitidas:...
 */

'use strict';


/**
 * librerías que ya trae node : https://nodejs.org/dist/latest-v18.x/docs/api/
 * "npx nodemon index.js" : - este comando nos permitirá no tener que arrancar cada vez que ejecutemos
 *                          - Servidor arrancado en http://127.0.0.1:1337
 * funciones que nos pueden ayudar:
 *       - desde npmjs.com : podemos descargar un montón de librerías que ayudan
 */

// cargar la librería http
const http = require('http');
const Chance = require('chance'); // npm repo chance (vemos la librería en terminal)

const chance = new Chance();

// definir un servidor
const servidor = http.createServer(function(request, response) {
  // response.writeHead(200, { 'Content-type': 'text/plain'}); 7// esto daría texto plano
  response.writeHead(200, { 'Content-type': 'text/html'});

  //response.end(`Wake up, <b>Neo</b>`); // <b>entre negrita</b>
  response.end(`Wake up, <b>${chance.name()}</b>`); // npm install chance (nos permite añador paquetes, en este caso)
})

// arrancamos el servidor
servidor.listen(1337, '127.0.0.1');

console.log('Servidor arrancado en http://127.0.0.1:1337');


/**
 * npm init -> nos creará un file con las deèndencias del proyecto [crea archivo package.json]
 * npm init -y --> no ará falta escribir datos
 * .gitignore --> carpeta ignorada en github
 */