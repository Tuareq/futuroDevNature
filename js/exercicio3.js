// EXERCICIO 3 M1S05
const prompt = require('prompt-sync')();

// Cria um array vazio para armazenar os números
const numeros = [];

// Loop para ler 5 números do usuário
for (let i = 0; i < 5; i++) {
  // Lê um número do usuário
  const numero = parseInt(prompt(`Digite o ${i + 1}º número: `));

  // Adiciona o número ao array
  numeros.push(numero);
}

// Imprime cada número do array no console
for (const numero of numeros) {
  console.log(numero);
}