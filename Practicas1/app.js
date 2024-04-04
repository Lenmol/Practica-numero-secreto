const leer = require("prompt-sync")();

let numSecreto = Math.floor(Math.random()*10)

let numIngresado = 0
const MAX_INTENTOS = 10

console.log("Bienvenido a aduivinar el numero secreto")


for (let i = 0 ; i<MAX_INTENTOS ; i++){
    console.log("Ingrese un numero");
    numIngresado = Number(leer());
    if(numIngresado == numSecreto){
        console.log("Adivinaste el numero, es:",numSecreto);
        i = 10;
    } else if (numIngresado < numSecreto){ 
        console.log("El numero es mayor");
    } else if(numIngresado > numSecreto){
        console.log("El numero es menor");
    }
}