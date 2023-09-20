"use script";

function escribeTrasDosSegundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000)
}

// quiero que cuando termine el text1 ejecute una funcion
escribeTrasDosSegundos("texto1", function(){

    escribeTrasDosSegundos("texto2", function() {
        
        console.log("fin.");
    })

});

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

// nos obliga a controlar esa sincronia. Si haces while o for... no controlarás las sincronías (con promesas si)
function serie(arr, fn, callback) {
    if (arr.length == 0) {
        // termino el bucle
        callback();
        return;
    }
    fn("texto" + arr.shift(), function() {
        serie(arr, fn, callback)
    })
};

serie([1,2,3,'cuatro',5], escribeTrasDosSegundos, function(){
    console.log("fin...");
});

/**
 * Async utilities for node and the browser
 * https://caolan.github.io/async/v3/
 */