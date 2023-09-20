
"use strict";



function creaSumador(numero) {
    // El contexto de esta función es accesible SIEMPRE
    // para la función que estamos devolviendo

    // Devuelve una función que toma otro número y lo suma al "numero" original
    return function(otroNumero) {
        return numero + otroNumero + nombre; // Aquí parece que falta una variable "nombre"
    }
}

// este "creaSumador" me devuelve otra funcion que recibo un numero sumaSiete(10) y lo suma al numero inical
const sumaSiete = creaSumador(7);

// Llama a la función "sumaSiete" con 10 como argumento y muestra el resultado
console.log(sumaSiete(10)); // Debería mostrar 17 si "nombre" estuviera definido

/**
 * el concepto clousure está aquí en este creaSumador(7) el 7, que se queda cautivo en la funcion sumaSiete
 */




function creaVehiculo(nombre) {
// contexto del closure
return {
    // Devuelve un objeto con tres métodos:
    getNombre: function() { return nombre; }, // Getter para obtener el nombre.
    setNombre: function(valor) { nombre = valor; }, // Setter para cambiar el nombre.
    saluda: function() { console.log('Hola soy', nombre)} // Función para saludar con el nombre.
    }
}


const coche = creaVehiculo('Seat'); // Crea un objeto "coche" con un nombre inicial.

coche.saluda(); // Llama a la función "saluda" del objeto "coche".

// Configura un temporizador para llamar a la función "saluda" del objeto "coche" después de 2 segundos.
setTimeout(coche.saluda, 2000);

const saludoDelCoche = coche.saluda; // Asigna la función "saluda" a la variable "saludoDelCoche".
saludoDelCoche(); // Llama a la función "saludoDelCoche" (que es la misma que "saluda" del objeto "coche").
  
