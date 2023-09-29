

/**
 * Este scrip no es para que se ejecute cuando arranco nodeapp
 * sino que lo voy a poner en el readme para desplegar esa aplicacion en un 
 * entorno nuevo, le voy a decir " para desplegarla haz esto y ejecuta este script"
 * para que cree los datos iniciales, porque en este script resetea la base de datos
 * a su estado inicial. Inicializa la base de datos o la resetea.
 */

'use strict';

const readLine = require('node:readline');
// inicio la base de datos
const connection = require('./lib/connectMongoose'); // conecto a la base de datos
const Agente = require('./models/Agente'); // cargo el modelo
const initData = require('./init-db-data.json'); // cargo ficheros con datos iniciales

// cazo el error si lo hay con la bbdd o el modelo
main().catch(err => console.log('Hubo un error --> ', err));

// para usar comodamente el async creo 
async function main() {

     // espero a que se conecte a la base de datos
    await new Promise(resolve => connection.once('open', resolve))


    const borrar = await pregunta(
        "\nEstas seguro que deseas boorar los datos y cargar datos iniciales? si/no --> "
    )
    if (!borrar) {
        process.exit();
      }


    // inicializar la coleccion de agentes
    await initAgentes(); // la defino abajo

    // en un script la conezion a ala base de datos la tenemos que terminar
    // he tenido que exportar module.exports = mongoose.connection;
    connection.close();

}




async function initAgentes() {
    // borrar todos los documentos de a colleccion de agentes
    const deleted = await Agente.deleteMany();
    console.log(`Eliminados ${deleted.deletedCount} agentes.`);

    // crear agentes iniciales
const inserted = await Agente.insertMany(initData.agentes);
    console.log(`Creados ${inserted.length} agentes.`);
}

/**
  "scripts": {
    "start": "node ./bin/www",
    "dev": "cross-env DEBUG=nodeapp:* nodemon ./bin/www",
    "init-db": "node init-db.js" <---- añado esta linea
  },

  voy a terminal y arranco $ node init-db.js
 */



  /**
   * ¿seguro que deseas installar? si o no
   * requiere una librería para que el usuario escriba, readline
   */

  function pregunta(texto) {
    return new Promise((resolve, reject) => {

      // conectar readline con la consola
      const ifc = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      ifc.question(texto, respuesta => {
        ifc.close();
        resolve(respuesta.toLowerCase() === 'si');
      })

    });
  }
