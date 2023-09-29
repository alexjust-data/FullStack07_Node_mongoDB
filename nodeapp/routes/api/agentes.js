const express = require('express');
const router = express.Router();
/**
 * Quiero que esto { name: "Smith", age: 30} me lo devuelve la base de datos
 */
const Agente = require('../../models/Agente');

// GET Api agentes
// CONTROLADOR DE AGENTES
// Devuelve una lista de Agentes
router.get('/', async (req, res, next) => {

    try {
        // filtros
        // http://127.0.0.1:3000/api/agentes?name=Jones
        const filterByName = req.query.name;
        const filtreByAge = req.query.age;

        // paginación
        // http://127.0.0.1:3000/api/agentes?skip=2&limit=2
        const skip = req.query.skip;
        const limit = req.query.limit;

        // ordenación
        // http://127.0.0.1:3000/api/agentes?sort=-age%20name
        const sort = req.query.sort;

        // field selection
        // http://localhost:3000/api/agentes?fields=name%20-_id%20address
        const fields = req.query.fields;
    
        const filtro = {};
    
        if (filterByName) { // regla general : cuando estés creanfo un filtro --> pon un indice en el modelo [Agentes.js]
          filtro.name = filterByName;
        }
    
        if (filtreByAge) { // regla general : cuando estés creanfo un filtro --> pon un indice en el modelo [Agentes.js]
          filtro.age = filtreByAge;
        }
    
        const agentes = await Agente.lista(filtro, skip, limit, sort, fields);

        // probamos un método de instancia
        // agentes.forEach(agente => {
        //     agente.saluda();
        // })
    

        res.json({ results: agentes })

    } catch (err) {
        next(err);
    }

});


// GET /api/agentes/(_id)
// CONTROLADOR DE id´s
// busca un agente que tenga ese :id
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;

        const agente = await Agente.findById(id);

        res.json({ result: agente })

    } catch (error) {
        next(err);
    }
})

// PUT /api/agentes/(_id)
// Actualiza un agente
router.put('/:id', async (req, res, next) => {
    try {
      // recoges los parametros de entrada para meterlo en variables
      // luego haces lo que quieras con esas variables, así tienes el codigo 
      // más recogido
      const id = req.params.id;
      const data = req.body;
  
      const agenteActualizado = await Agente.findByIdAndUpdate(id, data, { new: true });
  
      res.json({ result: agenteActualizado });
  
    } catch (err) {
      next(err);
    }
  });


  // POST /aoi/agentes 
  // --> en Postmant : POST BODY x-www-form http://127.0.0.1:3000/api/agentes/
  // crea un agente
  router.post('/', async (req, res, next) => {
    try {
        const agenteData = req.body;

        // creamos una instancia de agente en memoria
        const agente = new Agente(agenteData);

        // la persistimos en la BD
        const agenteGuardado = await agente.save();

        // respondemos
        res.json({result: agenteGuardado});

    } catch (err) {
        next(err)
    }
  });


  // DELETE /api/agentes/(_id)
  // Elimina un agente

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;

        await Agente.deleteOne({_id: id});

        res.json(); // no le paso nada mas orque si devuelve 200 is ok
    } catch (error) {
        next(err)
    }
})



module.exports = router;


/**
 * utilizamos este fichero en app.js
 */