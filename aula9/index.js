const express = require("express");
const app = express();

//função middleware express.static() para servir arquivos do diretório "public".
app.use(express.static('public'));  

// iniciando o servidor chamando o método listen():
app.listen(3000, () => {
  console.log('Servidor ligado na porta 3000');
});

const requestLogger = (req, res, next) => {
  const { method, url } = req;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${method} ${url}`);
  next();
};

app.use(requestLogger);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html")
});

app.get("/sobre", function(req, res){
    res.send("Olá sobre ta certo")
});

app.get("/contato", function(req, res){
    res.send("Quem é este contato?")
});

app.get("/ola", function(req, res){
  res.send("Olá tudo bem com você")
});

app.get("/ola/:nome/:idade", function(req, res){
  let nome = req.params.nome
    res.send("Ola" + nome + ", tudo bem?")
});

app.get("/busca", (req, res) => {
  // let parametro = req.query.parametro

  const { parametro } = req.query

  // Verificar se o parâmetro "parametro" está presente!
  if(!parametro) {
      return res.status(400).json({
          error: "Parametros da Query estão faltando: parametro"
      })
  }

  res.json({ message: `Você pesquisou por: ${parametro}`})
})

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

// app.listen(3000, function(){
// console.log("Minha aplicação esta no ar!");
// });

