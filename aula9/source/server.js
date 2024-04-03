const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor CRUD!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//CRIANDO PRODUTO
let products = [];

app.post('/products', (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  const product = { id: products.length + 1, name, price, description };
  products.push(product);

  res.status(201).json(product);
});

// Listando Produtos - Rota GET para obter produtos

app.get('/products', (req, res) => {
    res.json(products);
  });

  // Atualizando produtos - rota PUT para atualizar

  app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;
  
    const productIndex = products.findIndex(p => p.id === parseInt(id));
  
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
  
    products[productIndex] = { ...products[productIndex], name, price, description };
  
    res.json(products[productIndex]);
  });

  // Excluindo produto - rota DELETE

  app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
  
    const productIndex = products.findIndex(p => p.id === parseInt(id));
  
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
  
    products.splice(productIndex, 1);
  
    res.status(204).send();
  });

  //  testar as suas rotas usando o Postman. Certifique-se de enviar as requisições 
  // para o endereço http://localhost:3000, usando os métodos HTTP corretos (POST, GET, PUT, DELETE).

  // Middlewares - middleware para logar informações de cada chamada realizada

  //app.use((req, res, next) => {
  //  console.log(`Metodo:




