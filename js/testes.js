const prompt = require('prompt-sync')({sigint: true});
 let frutas = [];
 for (let i = 0; i < 3; i++) {
    let fruta = prompt(`Digite a fruta ${i+1}: `);
     frutas.push(fruta);
 }
 console.log(`A segunda fruta é ${frutas[1]}`);



// const promptSync = require('prompt-sync')();
// const frutas = [];
// for (let i = 0; i < 3; i++) {
//     const fruta = promptSync(`Digite o nome da ${i + 1}ª fruta: `);
//     frutas.push(fruta);
//   }
//   console.log(`A segunda fruta é: ${frutas[1]}`);