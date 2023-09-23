

var empleado = {
    nombre: "Alex",
    profesion: "pisador de uva"
};

var empleadoString = JSON.stringify(empleado); // Quiero crear una cadena con ese objeto
console.log(empleadoString); // Mostrar la cadena en la consola
// {"nombre":"Alex","profesion":"pisador de uva"}




/**
 * hacemos lo contrario
 */

var textoJSON = '{"nombre":"Alex", "profesion":"pisador de uva"}';

JSON.parse(textoJSON); // PRODUCE UN OBJETO
console.log(textoJSON); // imprime el objeto
