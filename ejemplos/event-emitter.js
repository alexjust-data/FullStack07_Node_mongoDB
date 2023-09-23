'use strict';  // Utilizar modo estricto para prevenir errores comunes en JavaScript


// https://nodejs.org/docs/latest-v20.x/api/events.html


const EventEmitter = require('events');      // Importar el módulo 'events' para trabajar con EventEmitter, este nombre es una convención
const emisor = new EventEmitter();           // Crear una nueva instancia de EventEmitter


/**
 * El método .on es típicamente asociado con objetos EventEmitter en Node.js y es utilizado para registrar manejadores de eventos. 
 * Esencialmente, permite que un objeto "escuche" un evento específico y ejecute una función o un "manejador" cada vez que ese evento ocurra.
 * 
 * Añadir un manejador de eventos para 'llamada de teléfono' que se ejecutará CADA VEZ que se emita el evento :
 */

emisor.on('llamada de teléfono', function() {  // Escuchar evento 'llamada de teléfono'. Cada vez que este evento sea emitido, la función se ejecutará.
  console.log('ring ring');                    // Imprimir 'ring ring' en la consola cuando se emita el evento.
});


/**
 * El método .once registra un manejador que se ejecutará solo la primera vez que se emita el evento y luego se elimina automáticamente.
 * El manejador de eventos que se ejecutará sólo LA PRIMERA VEZ que se emita 'llamada de teléfono'
 */
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
