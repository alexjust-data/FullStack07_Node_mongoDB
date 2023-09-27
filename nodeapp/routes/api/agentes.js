const express = require('express');
const router = express.Router();
/**
 * Quiero que esto { name: "Smith", age: 30} me lo devuelve la base de datos
 */
const Agente = require('../../models/Agente');

// GET Api agentes
// Devuelve una lista de agentes
router.get('/', async (req, res, next) => {

    try {

        const agentes = await Agente.find();

        throw new Error('fallo forzado');
        
        res.json({
            // results: [  name: "Smith", age: 30} ]
            results: agentes
        })
    } catch (err) {
        next(err);
    }

});


// GET /api/agentes/(_id)
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
      const id = req.params.id;
      const data = req.body;
  
      const agenteActualizado = await Agente.findByIdAndUpdate(id, data, { new: true });
  
      res.json({ result: agenteActualizado });
  
    } catch (err) {
      next(err);
    }
  });





module.exports = router;


/**
 * utilizamos este fichero en app.js
 */