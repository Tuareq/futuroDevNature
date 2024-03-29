// EXERCICIO 6 M1S05
const prompt = require('prompt-sync')({sigint: true});

// Função para validar se o valor digitado é um número
function isNumber(valor) {
return !isNaN(parseFloat(valor)) && isFinite(valor);
}

// Função para tratar erros
function tratarErro(mensagem) {
console.error(mensagem);
process.exit(1);
}

let numeros = [];

for (let i = 0; i < 5; i++) {
let numero;
do {
    numero = prompt(`Digite o número ${i + 1}: `);
    if (!isNumber(numero)) {
      tratarErro("Valor digitado não é um número válido.");
    }
  } while (!isNumber(numero));

numeros.push(parseInt(numero));
}

let numerosOrdenados = numeros.slice();

numerosOrdenados.sort((a, b) => a - b);

let pares = numeros.filter((numero) => numero % 2 === 0);
console.log(`Array original: ${numeros}`);

console.log(`Array ordenado em ordem crescente: ${numerosOrdenados}`);

console.log(`Array com os números pares: ${pares}`);