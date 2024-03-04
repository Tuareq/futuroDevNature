function verificarNumeroPar(numero) {
<<<<<<< HEAD
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve('Número validado é par');
    } else {
      reject('Erro: número informado é ímpar');
    }
  });
}
  
verificarNumeroPar(10)
  .then((mensagem) => {
    console.log(mensagem); // "Número validado é par"
  })
  .catch((mensagem) => {
    console.log(mensagem); // "Erro: número informado é ímpar"
  });
=======
    return new Promise((resolve, reject) => {
      if (numero % 2 === 0) {
        resolve('Número validado é par');
      } else {
        reject('Erro: número informado é ímpar');
      }
    });
  }
    
  verificarNumeroPar(10)
    .then((mensagem) => {
      console.log(mensagem); // "Número validado é par"
    })
    .catch((mensagem) => {
      console.log(mensagem); // "Erro: número informado é ímpar"
    });
>>>>>>> c8c04673ab2a0ca0e1f6639f20644278e0126c5d
