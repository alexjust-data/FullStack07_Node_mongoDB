// terminal --> npx nodemon prototipos.js


'use strict';



function Persona(nombre) {
  this.nombre = nombre;
  //this.saluda = function() { console.log('Hola soy', this.nombre); }
}

const pepe = new Persona('Pepe');  // objeto 1
const luis = new Persona('Luis');  // objetos 2 ...

/**
 * Si yo quiero crear 10000 objetos, se crearán 10000 funciones para cada objeto
 * y esto es ineficiente por memoria y tiempo
 * 
 * Usamos el metodo portotype
 * de esta forma aunque hagamos millones de objetos todos tendrán el mismo prototipo
 */

Persona.prototype.saluda = function() { console.log('Hola soy', this.nombre); }

/**
 * JS se irá al objeto pepe (Persona) y verá que NO tiene una propiedad 'saluda'
 * ñuego irá al prototipo y verá que SI tiene una propiedad 'saluda' pues usará el this. como pepe
 */
pepe.saluda();
luis.saluda();




// Herencia simple --------------------------
console.log("Herencia simple ------------------")

function Agente(nombre) {
    // heredar el constructor de las Personas
    // ejecutar el constructor de las Personas con mi "this"
    Persona.call(this, nombre)
  }
  

// HEREDAR las propiedades de la Clase Personas  a la Clase Agente --> heredeo metodo 'saluda'
Object.setPrototypeOf(Agente.prototype, Persona.prototype);

const smith = new Agente('Smith');
smith.saluda();
  

// Herencia múltiple ------------------
console.log("Herencia múltiple ------------------")

// Quiero que los agentes hereden tanto de las personas, como de los superheroes
// copiar todas las propiedades de los Superheroes al prototipo del Agente

function Superheroe() {                                             // Definir una función constructora para Superheroe
    this.vuela = function() { console.log(this.nombre, 'vuela'); }  // Método "vuela" que imprime el mensaje
  }
  
 
Object.assign(Agente.prototype, new Superheroe());  // Asignar las propiedades de una nueva instancia de Superheroe al prototipo de Agente
smith.vuela();                                      // llama al método "vuela" en el objeto "smith"


console.log(smith);
console.log(Agente.prototype);
console.log(Persona.prototype);                     // { saluda: [Function (anonymous)] } Herede de los Agentes
  