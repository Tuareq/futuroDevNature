function solicitarInformacoes() {
    var nome = prompt("Digite seu nome:");
    var idade = prompt("Digite sua idade:");
    var email = prompt("Digite seu email:");

    var usuario = {
        nome: nome,
        idade: idade,
        email: email
    };

    localStorage.setItem('user', JSON.stringify(usuario));
}