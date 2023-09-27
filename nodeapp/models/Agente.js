const mongoose = require('mongoose');


// definir el esquema del agente
const agenteSchema = mongoose.Schema({
    name: String,
    age: Number
})

// crear el modelo de agente : por convención los modelos se crean con mayúscula
const Agente =  mongoose.model('Agente', agenteSchema);


// exportar el modelo de agente (opcional)
module.exports = Agente;

// en la app.js cargamos el modelo para verificar que funciona:
// const Agente = require("Agente");