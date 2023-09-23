'use strict';  // Utilizar modo estricto para prevenir errores comunes en JavaScript



console.log('inicializo la calculadora...');

function suma(a, b) {
  return a + b;
}

/**
 * la PROPIEDAD de la palabra reselvada MODULE, tiene un objeto vacío inicial, lo lleno con suma
 */
module.exports.suma = suma;  // así exporto la función a otro archivo