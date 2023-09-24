var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // 2jemplo 1
  res.locals.texto = 'Hola';
  // ejemplo 2
  res.locals.nombre = '<script>alert("inyeccion codigo")</script>';
  // ejemplo 3
  const ahora = new Date();
  res.locals.esPar = (ahora.getSeconds() % 2) === 0;
  res.locals.segundoActual = ahora.getSeconds();
  // ejemplo 4
  res.locals.usuarios = [
    { nombre: "Smith", edad: 32 },
    { nombre: "John", edad: 3 }
  ]
  
  res.render('index');
  // le puse esto
  // app.locals.title = "NodeApp - mi aplicación"
});

module.exports = router;
