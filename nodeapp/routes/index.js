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



/**
 * creo un middelware en /route/index.js
 * al valor numero 66 de  /parametro_en_ruta/66
 * le podemos llamar por ejemplo numero:
 * '/parametro_en_ruta/:numero'
 */

// Get /parametro_en_ruta/66
router.get('/parametro_en_ruta/:numero', (req, res, next) => {
  // la varibale la sacamos de la petición req
  // .numero viene de :numero
  const numero = req.params.numero;

  // nos res responderá al browser esta frase.
  res.send("he recibido el número: " + numero);
})


/**
 * Creamos otro middelware con un parámetro opcional
 * Opcional quiere decir que puede venir o no un valor 
 */

// Get /parametro_opcional/66
router.get('/parametro_en_ruta/:numero?', (req, res, next) => {
  // la varibale la sacamos de la petición req
  // .numero viene de :numero
  const numero = req.params.numero;

  // nos res responderá al browser esta frase.
  res.send("OPCIONAL : he recibido el número: " + numero);
})


/**
 * Creamos otro middelware con varios parámetros 
 */

// GET /producto/:nombre/talla/:talla/color/:color
router.get("/producto/:nombre/talla/:talla/color/:color", (req, res, next) => {
  console.log(req.params)
  const nombre = req.params.nombre;
  const talla = req.params.talla;
  const color = req.params.color;
  res.send(`Me pediste ${nombre} talla ${talla} color ${color}`)

})

module.exports = router;
