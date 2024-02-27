function verificarNumeroPar(numero) {
    return new Promise((resolve, reject) => {
      if (numero % 2 === 0) {
        resolve('Número validado é par');
      } else {
        reject('Error: número informado é ímpar');
      }
    });
  }
  
  // Exemplo de uso
  verificarNumeroPar(10)
    .then((mensagem) => {
      console.log(mensagem); // "Número validado é par"
    })
    .catch((mensagem) => {
      console.log(mensagem); // "Error: número informado é ímpar"
    });