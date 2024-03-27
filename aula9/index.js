const express = require("express");
const app = express();

//função middleware express.static() para servir arquivos do diretório "public".
app.use(express.static('public'));  

// iniciando o servidor chamando o método listen():
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const requestLogger = (req, res, next) => {
  const { method, url } = req;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${method} ${url}`);
  next();
};

app.use(requestLogger);

app.get("/", function(req, res){
    res.send("Olá Mundo")
});

app.get("/sobre", function(req, res){
    res.send("Olá sobre ta certo")
});

app.get("/contato", function(req, res){
    res.send("Quem é este contato?")
});

app.get("/sobre:nome", function(req, res){
    res.send("O seu nome é:")
});

app.get("/ola/:nome", function(req, res) {
    const nome = req.params.nome;

    res.send(`Bem vindo ${nome}`);
});

app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
  
    if (productId === '1') {
      res.send('Você está vendo o produto 1 - Smartphone de última geração');
    } else if (productId === '2') {
      res.send('Você está vendo o produto 2 - Notebook super leve e potente');
    } else if (productId === '3') {
      res.send('Você está vendo o produto 3 - Smart TV 4K gigante');
    } else {
      res.send('Produto não encontrado');
    }
  });

app.listen(3000, function(){
    console.log("Minha aplicação esta no ar!");
});

