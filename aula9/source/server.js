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
  // para o endereço http://localhost:8000, usando os métodos HTTP corretos (POST, GET, PUT, DELETE).

  // Middlewares - middleware para logar informações de cada chamada realizada

  //app.use((req, res, next) => {
  //  console.log(`Metodo:

  /*
  Comentando cada linha desse código para gravar o video da prova:

1.const express = require('express');                    Aqui, estou importando o módulo `express`, que é um 
framework para construir aplicativos web em Node.js.

2.const app = express();                                 Criei uma instância do aplicativo Express chamada `app`.

3.const PORT = 8000;                                     Defini a porta em que o servidor irá escutar (neste caso, a porta 8000).

4.app.use(express.json());                               Configurei o aplicativo para usar o middleware `express.json()`, 
que analisa o corpo das requisições como JSON.

5.app.get('/', (req, res) => { ... });                   Defini uma rota para a URL raiz ("/"). Quando alguém 
acessa essa rota via método GET, o servidor responde com a mensagem "Bem-vindo ao servidor CRUD!".

6.app.listen(PORT, () => { ... });                      Iniciar o servidor Express para escutar na porta especificada. Quando o servidor está ativo, ele exibe uma mensagem no console.

7.let products = [];                                    Criei uma variável chamada `products` para armazenar os produtos.

8.app.post('/products', (req, res) => { ... });         Defini uma rota para criar um novo produto.
 Quando alguém envia uma requisição POST para "/products", o servidor verifica os dados enviados 
 (nome, preço e descrição). Se os dados forem válidos, o produto é criado e retornado como resposta.

 9.app.get('/products', (req, res) => { ... });         Defini uma rota para obter a lista de produtos.
 Quando alguém acessa "/products" via método GET, o servidor retorna a lista de produtos.

 10.app.put('/products/:id', (req, res) => { ... });    Defini uma rota para atualizar um produto
 existente. O ID do produto é passado como parâmetro na URL. Se o produto com o ID fornecido existir, 
 ele é atualizado com os novos dados.

 11.app.delete('/products/:id', (req, res) => { ... });   Defini uma rota para excluir um produto. O ID do produto é passado como parâmetro na URL. Se o produto com o ID fornecido existir, ele é removido da lista.

 12.Existe comentários explicativos do prof. adicionais no código, como instruções para testar
 as rotas usando o Postman e um comentário incompleto sobre middlewares.


 Lembrete: Testar essas rotas usando o Postman, enviando as requisições para o endereço
 `http://localhost:8000` com os métodos HTTP corretos (POST, GET, PUT, DELETE).

  */




