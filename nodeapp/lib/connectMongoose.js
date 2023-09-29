
const mongoose = require("mongoose");


// .on hereda de ... entonces emite eventos  
mongoose.connection.on('error', err => {
    console.log("Error de conexion", err);
});

mongoose.connection.on('open', () => {
    console.log("Conectado a MongoDB", mongoose.connection.name);
});

// queremos que se arranque cuando se arranque nuestra aplicacion
mongoose.connect('mongodb://127.0.0.1/cursonode')

module.exports = mongoose.connection;




