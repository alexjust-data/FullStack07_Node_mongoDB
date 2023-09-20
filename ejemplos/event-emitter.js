'use strict';  // Utilizar modo estricto para prevenir errores comunes en JavaScript





const EventEmitter = require('events');      // Importar el módulo 'events' para trabajar con EventEmitter

const emisor = new EventEmitter();           // Crear una nueva instancia de EventEmitter

// Añadir un manejador de eventos para 'llamada de teléfono' que se ejecutará CADA VEZ que se emita el evento
emisor.on('llamada de teléfono', function() {
    console.log('ring ring');                  // Si no, imprimir 'ring ring' en la consola
});

// Añadir un manejador de eventos que se ejecutará sólo LA PRIMERA VEZ que se emita 'llamada de teléfono'
emisor.once('llamada de teléfono', function() {
    console.log('brr brr');
});

emisor.emit('llamada de teléfono');  // Emitir el evento 'llamada de teléfono' con 'padre' como argumento



/**
 * podemos pasar argumentos
 */

emisor.on('llamada de teléfono', function(quienLlama) {
    if (quienLlama === 'padre') {              // Si quien llama es 'padre', no hacer nada y salir de la función
      return;
    }
    console.log('ring ring');                  // Si no, imprimir 'ring ring' en la consola
  });
  

  emisor.once('llamada de teléfono', function(quienLlama) {
    console.log('brr brr');
  });
  
  
  emisor.emit('llamada de teléfono', 'padre');  // Emitir el evento 'llamada de teléfono' con 'padre' como argumento
