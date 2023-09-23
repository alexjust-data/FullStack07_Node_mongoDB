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


// nos obliga a controlar esa sincronia. Si haces while o for... no controlarás las sincronías (con promesas si)
function serie(n, fn, callback) {
    if (n == 0) {
        // termino el bucle
        callback();
        return;
    }
    n = n - 1;
    fn("texto" + n, function() {
        serie(n, fn, callback)
    })
};

serie(6, escribeTrasDosSegundos, function(){
    console.log("fin");
});