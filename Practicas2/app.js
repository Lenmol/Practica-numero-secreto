const leer = require("prompt-sync")();

let intentDeseadosUsuar = 0;

let numIngresado = 0;
let numSecreto = 0;
console.log("Bienvenido a adivinar el numero secreto");
console.log("ingrese cantidad de intentos")
intentDeseadosUsuar = Number(leer());

numSecreto =Math.floor(Math.random() * (intentDeseadosUsuar*2) + 1);

console.log(intentDeseadosUsuar);
console.log(numSecreto)

for (let i = 1; i <=intentDeseadosUsuar ; i++) {
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