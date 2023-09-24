var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// yo puedo crear middelwares:

// app.use((req, res, next) => {
//   console.log('Ha llegado una petición a', req.url);
//   next('zzz');
// });

// carga ./routes/index cuando llegues a /
app.use('/', require('./routes/index'));
// carga ./routes/index cuando llegues a /users
app.use('/users', require('./routes/users'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;