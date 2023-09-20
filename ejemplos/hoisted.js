/**
 * En las entrevistas de trabajao suelen caer cosas de estas:
 * HOISTING
 * En JS el alcance de las variables definidas con "var" es a nivel de función.
 */

var pinta = "myvalue";

function pinta() {
    console.log('pinto', pinto); // funciona a nivel de la función
    var pinto = "local value"; // esto hará hoisting de pinto y será indefined
};

pinta();


/**
 * HOISTING
 * Qué valores se escribirán en la consola?
 */

var x = 100;
var y = function() {
    // var x; // HOISTING -->  ahora x es undefined
    if (x===20){
        var x = 30; // <-- JS antes de que entre el "if" colocará el "var x" en la primera linea de la fución.
    }
    return x; // undifined
};

console.log( x, y());


/**
 * normalmente se declara con let y cons
 */