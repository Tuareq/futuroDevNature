const express = require("express")

const app = express();

app.get("/", function(req, res){
    res.send("Olá Mundo")
})  //adicionar rota dizendo o metodo

app.get("/sobre", function(req, res){
    res.send("Olá sobre ta certo")
}) 
app.get("/contato", function(req, res){
    res.send("Quem é este contato?")
}) 
app.get("/sobre:nome", function(req, res){
    res.send("O seu nome é:")
}) 
app.get("/ola/:nome", function(req, res) {
    const nome = req.params.nome

    res.send("Bem vindo " + nome)
})
// Servidor padrao é a porta 3000
app.listen(3000, function(){
    console.log("Minha aplicação esta no ar!")
}); 
