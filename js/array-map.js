// let numeros = [5, 3, 7]

// numeros.map(index => {
//     console.log("O numero é", index)
// })

// function leitor(numero){
//     console.log("O numero é", numero)
// }

const pessoas1 = [
    {nome: "Ana", idade: 24},
    {nome: "Bento", idade: 21},
    {nome: "Leonardo", idade: 28},

]

const novaListaPessoas = pessoas1.map(pessoaAtual => {
    let dataAtual = new Date();

    let pessoa = {
        nome: pessoaAtual.nome,
        anoNascimento: dataAtual.getFullYear() - pessoaAtual.idade
    }

return pessoa

})

console.log(novaListaPessoas)