var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const basicAuthMiddleware = require('./lib/basicAuthMiddleware'); // lo pondré a quien quiera protejer
const swaggerMiddleware = require('./lib/swaggerMiddleware');


require('./lib/connectMongoose');


/**
 * me conecto al modulo de mongoDB
 */
const Agente = require('./models/Agente'); //en la app.js cargamos el modelo para verificar que funciona

/**
 * lo utilizo para pedir una lista de Agentes
 */

// Agente.find().then((results) => {
//   console.log(results);
// }).catch(err => console.log(err));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// definimos una variable vista que estará 
// disponible en todos losrender que hagamos
app.locals.title = "NodeApp - mi aplicación"

// middlewares : es lo primero que hará la app por orden de linea
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // parsea el body en formato urlencoded
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// yo puedo crear middelwares:

// app.use((req, res, next) => {
//   console.log('Ha llegado una petición a', req.url);
//   next('zzz');
// });

/**
 * rutas del API
 */
app.use('/api-doc', swaggerMiddleware);
app.use('/api/agentes', basicAuthMiddleware, require('./routes/api/agentes'));// lo pondré a quien quiera protejer

/**
 * Usamos aquí las rutas del website : devuelven páginas
 */
// carga ./routes/index cuando llegues a /
app.use('/',  require('./routes/index'));// lo pondré a quien quiera protejer (se lo he quitado)
// carga ./routes/index cuando llegues a /users
app.use('/users',  require('./routes/users'));// lo pondré a quien quiera protejer (se lo he quitado)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
 //compruebo si esun error de validación
 if (err.array) {
   const errorInfo = err.errors[0]; // err.array( {onlyFirsrError: true} )[0]
   console.log(errorInfo) // si miras la terminal verás los errores y la info para rellenar la siguiente linea
   err.message = `Error en ${errorInfo.location}, parámetro ${errorInfo.path} ${errorInfo.msg}`;
   err.status = 422; // para que nos de el nombre del error en res.status(err.status || 500); como lo hemos configurado
  }
  
  // render the error page : podemos responder con el error que le queramos pasar
  res.status(err.status || 500);

  /**
   * quiero que, cuando falla la llamada de peticion api,
   * devuelva un errro con formato json 
   */
  if (req.originalUrl.startsWith('/api/')) {
    res.json({ error: err.message });
    return;
  }


  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.render('error');
});

module.exports = app;
