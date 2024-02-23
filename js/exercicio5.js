// EXERCICIO 5 M1S05
const prompt = require('prompt-sync')({sigint: true});

// Array para armazenar os números
let numeros = [];

// Loop para solicitar os 5 números do usuário
for (let i = 0; i < 5; i++) {
let numero = parseInt(prompt(`Digite o número ${i + 1}: `));
numeros.push(numero);
}

// Criar um novo array com os mesmos números do array numeros
let numerosOrdenados = numeros.slice();

// Ordenar o novo array em ordem crescente
numerosOrdenados.sort((a, b) => a - b);

// Imprimir o novo array ordenado
console.log(`Array ordenado em ordem crescente: ${numerosOrdenados}`);
