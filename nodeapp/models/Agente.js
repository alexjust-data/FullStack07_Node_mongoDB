const mongoose = require('mongoose');


// definir el esquema del agente
const agenteSchema = mongoose.Schema({
    // no es buena recomendacino poner indice en todos los campos
    // p.e. password: --> nunca filtras por un password
    // p.e. image: --> nunca filtras por una imagen
    // regla general : cuando estés creanfo un filtro --> pon un indice [/routes/api/agentes.js]
    name: {type: String, index: true},
    age: {type: Number, min: 18, max: 120, index: true}
}, {
    // puedo definir un nombre concreto de coleccion
    // collection: 'agentes'
})

/**
 * Tipos de métodos
 * 
 * método ESTATICO 
 * - creo un método nuevo ESTATICO : metodo que está en el modelo (p.e. Agente.lista())
 * - En Python un metodo estático es el que define la Clase
 * 
 *  método de INSTANCIA 
 * - en un metodo que ponemos a 1 agente
 * a cada instancia de 1 agente, no en el modelo, si no en los prpios objetos del tipo agente.
 */

// método ESTATICO 
agenteSchema.statics.lista = function(filtro, skip, limit, sort, fields) { // le pongo un filtro http://127.0.0.1:3000/api/agentes?name=Jones
    // no pongo el await, const query = awai Agente.find  
    // no quiero que se ejecute a vista todavía,  si no lo pongo estoy creando un objeto del tipo Qüé en mongoose
    // porque el find() es lo que se llama un Thenables(como si fuera una promesa, objetos que tiene un metodo then) 
    // https://masteringjs.io/tutorials/fundamentals/thenable
    // es decir podré activarlo cuabndo quiera
    const query = Agente.find(filtro); // devuelve un objeto del tipo query que es un thenable

    query.skip(skip);   // se salta los 4 primeros http://127.0.0.1:3000/api/agentes?skip=4  elementos del json
    query.limit(limit); // me limita cuantos elementos devuelve del json http://127.0.0.1:3000/api/agentes?limit=4
    query.sort(sort);   // me permite ordenar por key http://127.0.0.1:3000/api/agentes?sort=age descendente http://127.0.0.1:3000/api/agentes?sort=-age
    query.select(fields);

    return query.exec(); // este si que devuelve la promesa. 
}

// método de INSTANCIA 
agenteSchema.methods.saluda = function() {
    console.log('Hola, soy el agente ' + this.name); // el this apunta a ese agente
  }
  /** POR CONSOLA
    Hola, soy el agente Smith
    Hola, soy el agente Alex
    Hola, soy el agente Nuria
    Hola, soy el agente undefined
    Hola, soy el agente Agente nuevo
   */


// crear el modelo de agente : por convención los modelos se crean con mayúscula
const Agente =  mongoose.model('Agente', agenteSchema);


// exportar el modelo de agente (opcional)
module.exports = Agente;

// en la app.js cargamos el modelo para verificar que funciona:
// const Agente = require("Agente");