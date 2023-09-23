
"use   strict";


/** MÉTODOS DE UN OBJETO --
 * Si defines un objeto y dentro en sus propiedades defines otra función,
 * es lo que llamamos METODO
 */

var calculadora = {
    suma : function(a,b){ return a+b; },
    resta : function(a,b){ return a*b; }
}


/** LAS FUNCIONES TBN SIRVEN PARA CREAR OBJETOS
 * crear una function para usarla como constructor de objetos
 * npx nodemon functions.js
 */

function Fruta(nombre) {
    this.nombre = nombre;
    this.getNombre = function() { return nombre; };
    this.setNombre = function(value) {nombre = value;};
    this.saluda = function(){
        console.log("Hola soy", this.nombre);
    }
}

const limon = new Fruta("Citrus limon"); // cuando se usa new lo usa como un constructor de objetos

console.log(limon)
limon.saluda();