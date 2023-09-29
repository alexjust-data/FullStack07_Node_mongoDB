
/**
 * Este archivo se crea para procesar un archivo CSV, consultar una base de datos MongoDB,
 * y generar un nuevo archivo CSV con datos actualizados.
 * 
 * El proceso incluye la lectura del archivo CSV de entrada, la conexión a una base de datos MongoDB,
 * la búsqueda y actualización de registros en función de ciertos criterios, y la escritura de los datos
 * procesados en un nuevo archivo CSV de salida.
 * 
 * Utiliza diversas bibliotecas y módulos de Node.js para realizar estas tareas de manera eficiente,
 * incluyendo 'node:fs/promises' para la lectura y escritura de archivos, 'papaparse' para el análisis de CSV,
 * y 'mongodb' para la interacción con la base de datos.
 */


'use strict';

// Importar módulos y dependencias
const { readFile, writeFile } = require('node:fs/promises'); // de esta librería cargo un par de métodos https://nodejs.org/dist/latest-v18.x/docs/api/fs.html
const { setTimeout: sleep } = require('node:timers/promises'); // cargo con promesas y le llamas sleep
const csvParser = require('papaparse'); // # parsea ficheros csv y convierteJson to Csv
const { MongoClient } = require('mongodb'); // cargo el driver cliente
const ProgressBar = require('progress'); // me indica el progreso del proceso 
const { RateLimiter } = require('limiter'); // sirve para autolimitarte as peticiones que tu haces a otros

// Definir rutas y URL
const inputFile = './test.csv'; // el fichero que voy a leer es este
const outputFile = './test_out.csv'; // el fichero de salida
const mongoUrl = 'mongodb://127.0.0.1'; // cuando utilizamos el driver solamente sin mongoose, hay que decirle a qué bbdd queremos que utilice

// Crear una instancia del cliente MongoDB
const client = new MongoClient(mongoUrl);

// Función principal -- como voy a trabajar co npromesas me creo un async
async function main() {
  try {

    // Conectar a la base de datos MongoDB
    await client.connect();
    console.log('Conectado a MongoDB');
    const db = client.db('cursonode'); // cuando usamos el driver mondb hay que decirle el nombre de la bbdd que queremos usar
    const collection = db.collection('agentes'); // como usará una coleccion de agentes pues le añado esto [usaré collection para hacer las búsquedas]

    // Leer el archivo CSV
    const fileData = await readFile(inputFile, 'utf-8'); // para leer el fichero entero _ https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#filehandlereadfileoptions
    // de esta forma data: rows se llamará rows
    const { data: rows } = csvParser.parse(fileData, { // # parsea ficheros csv y convierteJson to Csv https://www.papaparse.com/docs#config
        delimiter: ',',
        header: true,
        dynamicTyping: true // intenta ver de que tipo son para usar (para que los valores de la edad aparezcan como numeros)
    });
    
    // Crear una barra de progreso
    const bar = new ProgressBar('[:bar] :rate/rps :percent :etas', {
        width: 50,
      total: rows.length
    });
    
    // imagina que además hace una peticion a otra api y sacar informacion de sus agentes
    // imagina que este api tiemne una limitacion de 10 por segundos. Cargo librería limiter
    // Crear un rate limiter para evitar solicitudes excesivas
    const rateLimiter = new RateLimiter({ tokensPerInterval: 10, interval: "second" });

    // Iterar a través de las filas del archivo CSV
    for (const [index, row] of rows.entries()) {  // quiero que lea cada numero de linea "rows.entries()" me devuelve "index, row" un map tbn me lo haría]
      await rateLimiter.removeTokens(1); // aquí me autolimito de los 10" por segundo le quieto 1 con removeTokens(1)

      // Buscar el agente en la base de datos
      const agente = await collection.findOne({ name: row.name });

      // Si se encuentra, actualizar la fila
      if (agente) {
        row.age = agente.age;
        row._id = agente._id;
      }
      bar.tick(1); // escribe la barrita
      await sleep(20); // le damos tiempo para que termine la barrita
    }

    // Convertir los datos a formato CSV - https://www.papaparse.com/docs#config
    const outputData = csvParser.unparse(rows, {       // acuerdate que rows
      header: true // para que escriba una cabecera
    });

    // Escribir los datos de outputFile en un archivo de salida  outputData
    await writeFile(outputFile, outputData, 'utf-8');

    console.log('Proceso completado con éxito 🚀');
  } catch (err) {
    console.error('Ocurrió un error', err);
  } finally {
    // Cerrar la conexión a la base de datos
    client.close();
  }
}

// Llamar a la función principal
main();

