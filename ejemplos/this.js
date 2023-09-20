
'use strict';

/**
 * Los métodos suelen utilizarse para definir operaciones que se pueden realizar en el objeto, 
 * y típicamente tienen acceso a otras propiedades del objeto a través de la palabra clave this.
 * 
 * 
 * La función Fruta actúa como un constructor para objetos de tipo Fruta. 
 * Los objetos creados a partir de este constructor tendrán una propiedad nombre y un método saluda.
 * 
 * 
 * 
 */
// crear una funciónm para usarla como constructor de objetos
function Fruta1(nombre) {
  this.nombre = nombre;                 // PROPIEDAD
  this.saluda = function() {            // PROPIEDAD que es un MÉTODO (tiene una función)
    console.log('Hola soy', this.nombre);
  }
}

/**
 * Aquí tienes una versión ligeramente más moderna,  que utiliza la sintaxis de clases de ECMAScript 6
 * 
 * Define la clase Fruta
 */
class Fruta {                                // Constructor de la clase, se invoca al crear un nuevo objeto
  constructor(nombre) {                      // Inicializa la propiedad "nombre" con el valor pasado como argumento
    this.nombre = nombre;
  }

  saluda() {                                 // Define un método llamado "saluda"
    console.log('Hola soy', this.nombre);    // Imprime un saludo que incluye la propiedad "nombre" del objeto
  }
}




// creamos OBJETO limon con las PROPIEDADES nombre, saluda
const limon = new Fruta1('limon');
limon.saluda();

const manzana = new Fruta2('Manzana');
manzana.saluda();  // "Hola soy Manzana"


// setTimeout(limon.saluda.bind(limon), 2000);

// const saludoDelLimon = limon.saluda.bind(limon);
const saludoDelLimon = limon.saluda;
// saludoDelLimon();
saludoDelLimon.call(limon, 'hola', 'que', 'tal')
saludoDelLimon.apply(limon, ['hola', 'que', 'tal'])

/**
 * REGLA DEL THIS
 */
// JS busca el punto a la izquierda de los paréntesis de ejecución
// y lo que haya a la izquierda de ese punto, lo usa como this


