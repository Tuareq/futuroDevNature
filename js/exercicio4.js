//  EXERCICIO 4 M1S05
const prompt = require('prompt-sync')({sigint: true});

// Array para armazenamento dos números
let numeros = [];

// Loop para solicitar dos 5 números do usuário
for (let i = 0; i < 5; i++) {
let numero = parseInt(prompt(Digite o número ${i + 1}: ));
numeros.push(numero);
}

// Calcular soma dos elementos do array usando reduce
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

// Imprimir soma dos elementos do array
console.log(Soma dos elementos do array: ${soma});