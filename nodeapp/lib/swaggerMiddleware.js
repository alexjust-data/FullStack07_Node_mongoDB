// $ nodeapp
// $ npm install swagger-jsdoc swagger-ui-express
const swaggerJSDoc = require('swagger-jsdoc'); // https://github.com/Surnet/swagger-jsdoc
const swaggerUI = require('swagger-ui-express'); // https://github.com/scottie1984/swagger-ui-express

const options = {
  swaggerDefinition: {
    info: {
      title: 'NodeApp API',
      version: '0.1',
      description: 'API de agentes'
    }
  },

  /**
   * he creado el fichero swapper.yml
   * he copiado en el las lineas que me dió https://editor.swagger.io/
   */

  //apis: ['swagger.yml'] // <-- cargaría el archivo
  apis: ['./routes/**/*.js'] // <-- cargaría esto del archivo *.js (ve a mirarlo):
                                      /** DOC PARA EL API
                                       * @openapi
                                       * /api/agentes:
                                       *  get:
                                       *   description: Devuelve una lista de agentes
                                       *   responses:
                                       *    200:
                                       *     description: Devuelve JSON
                                       */
}

const especificacion = swaggerJSDoc(options);

module.exports = [
  swaggerUI.serve, 
  swaggerUI.setup(especificacion)
];