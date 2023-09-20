

"use   strict";

/**
 * Un ejemplo es cuando usamos setTimeout, que recibe como parámetros:
 * - Una función con el código que queremos que ejecute tras la espera 
 * - El número de milisegundos que tiene que estar en pausa hasta llamarla.
 */

console.log('empiezo');

setTimeout(function() { 
    console.log('he terminado');
}, 2000);  // <-- cuando termines 2 segundos ejecuta esa function


function suma(a, b, callback) {
    var resultado = a + b;
    callback(resultado);
}

suma(2, 3, function(r) {
    console.log(r); // Esto mostrará el resultado (5) cuando esté listo
});

