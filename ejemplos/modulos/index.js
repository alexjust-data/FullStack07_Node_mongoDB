'use strict';


// https://nodejs.org/docs/latest-v20.x/api/modules.html


const calculadora = require('./calculadora'); // solo se inicaliza una vez
const calculadora1 = require('./calculadora'); // aquí sólo apunta al mismo objeto ya cargado
const calculadora2 = require('./calculadora');
const calculadora3 = require('./calculadora');

console.log(calculadora.suma(3, 4));