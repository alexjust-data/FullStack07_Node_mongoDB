// terminal --> npx nodemon prototipos.js


'use strict';


class Mascota {
    constructor(nombre) { this.nombre = nombre;
    }
    saluda() {
    console.log(`Hola soy ${this.nombre}`);
    } 
}



const mascota = new Mascota('Toby'); 
mascota.saluda();


/**
 * En la sintaxis de clases no se puede hacer herencia multiple, deberías hacerlo como en prototipos
 */







