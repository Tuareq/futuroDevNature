fetch('https://api.thecatapi.com/v1/images/search?limit=10')
  .then(response => response.json())
  .then(data => {
    data.forEach(image => {
      document.write(`<img src='${image.url}' width='200'/> <br />`);
    });
  })
  .catch(error => {
    console.error('Erro ao buscar as imagens:', error);
  });