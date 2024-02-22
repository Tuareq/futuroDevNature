// EXERCICIO 2 M1S05
const prompt = require('prompt-sync')({sigint: true}); 
// Array para armazenar as frutas let frutas = []; 
// Loop para inserir 3 frutas 
for (let i = 0; i < 3; i++) { let fruta = prompt(Digite a fruta ${i + 1}: ); frutas.push(fruta); }
 // Exibir a segunda fruta 
 console.log(A segunda fruta é ${frutas[1]}); 
 // Adicionar uma nova fruta 
 frutas.push("Manga"); 
 // Remover a primeira fruta 
 frutas.shift(); 
 // Exibir o array atualizado 
 console.log(Array atualizado: ${frutas});