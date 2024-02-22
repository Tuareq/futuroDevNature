// EXERCICIO 1 M1S05  ==hhh
const prompt = require('prompt-sync')({sigint: true});
 let frutas = [];
 for (let i = 0; i < 3; i++) {
    let fruta = prompt(`Digite a fruta ${i+1}: `);
     frutas.push(fruta);
 }
 console.log(`A segunda fruta é ${frutas[1]}`);