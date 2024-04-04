const leer = require("prompt-sync")();

const MAX_INTENTOS = 10;

let intentDeseadosUsuar = 0;
let dobleIntentos = intentDeseadosUsuar * 2;
let numSecreto = Math.floor(Math.random()*dobleIntentos + 1);

let numIngresado = 0;


console.log("Bienvenido a adivinar el numero secreto")
console.log("Cuantos intentos quiere tener?");
intentDeseadosUsuar = Number(leer());


for (let i = 1 ; i<=intentDeseadosUsuar ; i++){
    console.log("Ingrese un numero");
    numIngresado = Number(leer());

    if(numIngresado == numSecreto){
        console.log("Adivinaste el numero, es:",numSecreto);
        i = intentDeseadosUsuar;
    } else if (numIngresado < numSecreto){ 
        console.log("El numero es mayor");
    } else if(numIngresado > numSecreto){
        console.log("El numero es menor");
    }
}