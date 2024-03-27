const express = require("express");
const app = express();

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

app.listen(3000, function(){
    console.log("Minha aplicação esta no ar!");
});