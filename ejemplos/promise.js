// /**
//  * npx nodemon promise.js
//  */


// funcion que devuelve una promesa

function sleep(ms) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(54);
        }, ms)
    })
}

const promesa = sleep(3000);

console.log(promesa);

// para que se resuelva
// lo bueno es que se puede encadenar
promesa.then((resultado) => {
    console.log("han pasado 3 segundos, con resultado", resultado);
    return sleep(2000);
}).then(() => {
    console.log("han pasado 2 segundos más")
}).catch(err => {
    console.log("Hubo un error", err.message);
});

/**
 * [nodemon] starting `node promise.js`
* Promise { <pending> }
* han pasado 3 segundos, con resultado 54
* han pasado 2 segundos más
* [nodemon] clean exit - waiting for changes before restart
 */


// funcion que devuelve una promesa
console.log("segunda promesa ....... ");

function sleep2(ms) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            //resolve(54);
            reject( new Error("Error faltal segunda promesa .......") );
        }, ms)
    })
}

const promesa2 = sleep2(3000);

console.log(promesa2);

// para que se resuelva
// lo bueno es que se puede encadenar
promesa2.then((resultado) => {
    console.log("han pasado 3 segundos segunda promesa ......., con resultado", resultado);
    return sleep(2000);
}).then(() => {
    console.log("han pasado 2 segundos más segunda promesa .......")
}).catch(err => {
    console.log("Hubo un error", err.message);
});




/**
 * Array de promesas
 * 
 * espera a que se cumplan todas y cada una de las promesas que le hemos pasado
 * cuando se han cumplido todas se resuelve el .then y se ejecuta la funcion "resultados"
 * 
 * resulvemos con la funcion sleep inicial, resultado [ 54, 54, 54 ]
 */

Promise.all( [sleep(3000), sleep(4000), sleep(5000)] ).then(resultados => {
    console.log(resultados);
})