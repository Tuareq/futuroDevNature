const numeros = [1, 2, 3, 4, 5];

numeros.map(numero => {
    const quadrados = numero ** 2;
    return quadrados;
  });

console.log(quadrados); // [1, 4, 9, 16, 25]