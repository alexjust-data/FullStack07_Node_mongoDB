
"use script";

// JS las varibale no tiene TIPO, tiene un string dentro simplemente
var variable = "value";

if(variable){
    console.log("soy truthy");
}

variable = 0; // como dentro hay un number evalua como false

if (variable) {
    console.log("..");
} else {
    console.log("soy false");
};


