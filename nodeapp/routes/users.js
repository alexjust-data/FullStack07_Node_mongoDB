var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


/**
 * Creamos otro middelware con un parámetro opcional
 * Opcional quiere decir que puede venir o no un valor 
 */


// validaciones
const {query, validationResult } = require('express-validator');

// Get user listing
router.get('/', [    // defino la validaciones
  query('talla').isNumeric().withMessage('debe tener valor numérico'),
  query('name').custom(valor => {
    return valor === 'rojo';
  }).withMessage("Debe ser rojo")
], function(req, res, next) {
  validationResult(req).throw();  // añadimos la linea de va
  const usuarios = [
    { nombre: 'alex', talla: '34', color: 'rojo' },
    { nombre: 'pantalon', talla: '34', color: 'rojo' }
  ]

  // query es un objeto del cual quier sacar la propiedad name
  const filtroName = req.query.name;

  if (filtroName) {
    res.json(usuarios.filter(usuarios => usuarios.nombre === filtroName))
  } else {
    res.json(usuarios);
  }
  // mejor .json que .send
});



// POST / users (body)
router.post('/', (req,res,next)=>{
  console.log(req.body);
  res.send('recibido');
})

/**
 * POSTMAN.COM nos permite hacer peticiones a servidores http como el nuestro y probar 
 * api´s app webs, etc
 */



module.exports = router;
