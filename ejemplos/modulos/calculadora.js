'use strict';  // Utilizar modo estricto para prevenir errores comunes en JavaScript

// https://nodejs.org/docs/latest-v20.x/api/modules.html

console.log('inicializo la calculadora...');

function suma(a, b) {
  return a + b;
}

/**
 * la PROPIEDAD de la palabra reservada "module", tiene un objeto vacío inicial, lo lleno con suma
 * 
 * 
 * así exporto la función a otro archivo :
 */

module.exports.suma = suma;  // así exporto la función a otro archivo