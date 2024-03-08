class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  // Getters
  get nome() {
    return this._nome;
  }

  get preco() {
    return this._preco;
  }

  get quantidade() {
    return this._quantidade;
  }

  // Setters
  set nome(nome) {
    if (!nome || typeof nome !== 'string') {
      console.log('Nome inválido');
      return;
    }
    this._nome = nome;
  }

  set preco(preco) {
    if (preco < 0 || isNaN(preco)) {
      console.log('Preço inválido');
      return;
    }
    this._preco = preco;
  }

  set quantidade(quantidade) {
    if (quantidade < 0 || isNaN(quantidade)) {
      console.log('Quantidade inválida');
      return;
    }
    this._quantidade = quantidade;
  }

  // Métodos ...

  // Exemplo: Obter valor total do produto
  getValorTotal() {
    return this.preco * this.quantidade;
  }

  // Exemplo: Adicionar quantidade ao produto
  repor(quantidadeReposta) {
    if (quantidadeReposta < 0 || isNaN(quantidadeReposta)) {
      console.log('Quantidade reposta inválida');
      return;
    }
    this.quantidade += quantidadeReposta;
  }

  // Método para atualizar preço
  AtualizarPreco(novoPreco) {
    if (novoPreco < 0 || isNaN(novoPreco)) {
      console.log('Novo preço inválido');
      return;
    }
    this.preco = novoPreco;
  }
}

// Classe Pessoa
class Pessoa {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  // Getters
  get nome() {
    return this._nome;
  }

  get idade() {
    return this._idade;
  }

  get profissao() {
    return this._profissao;
  }

  // Setters
  set nome(nome) {
    if (!nome || typeof nome !== 'string') {
      console.log('Nome inválido');
      return;
    }
    this._nome = nome;
  }

  set idade(idade) {
    if (idade < 0 || isNaN(idade)) {
      console.log('Idade inválida');
      return;
    }
    this._idade = idade;
  }

  set profissao(profissao) {
    if (!profissao || typeof profissao !== 'string') {
      console.log('Profissão inválida');
      return;
    }
    this._profissao = profissao;
  }
}

// Classe Cliente
class Cliente extends Pessoa {
  constructor(nome, idade, profissao, telefone, email, clienteDesde) {
    super(nome, idade, profissao);
    this.telefone = telefone;
    this.email = email;
    this.clienteDesde = clienteDesde;
  }

  // Getters
  get telefone() {
    return this._telefone;
  }

  get email() {
    return this._email;
  }

  get clienteDesde() {
    return this._clienteDesde;
  }

  // Setters
  set telefone(telefone) {
    if (!telefone || typeof telefone !== 'string') {
      console.log('Telefone inválido');
      return;
    }
    this._telefone = telefone;
  }

  set email(email) {
    if (!email || typeof email !== 'string') {
      console.log('Email inválido');
      return;
    }
    this._email = email;
  }

 // Completando o código da classe Cliente:

set clienteDesde(clienteDesde) {
  if (!clienteDesde || !/\d{4}-\d{2}-\d{2}/.test(clienteDesde)) {
    console.log('Data de início de cliente inválida');
    return;
  }
  this._clienteDesde = clienteDesde;
}

// Exemplo: Obter informações do cliente
obterInformacoes() {
  return `
    Nome: ${this.nome}
    Idade: ${this.idade}
    Profissão: ${this.profissao}
    Telefone: ${this.telefone}
    Email: ${this.email}
    Cliente desde: ${this.clienteDesde}
  `;
}
}

// Exemplo de uso:
const cliente1 = new Cliente(
  "Karina Bella",
  48,
  "Engenheira de Software",
  "(11) 9991-8888",
  "anaclara@tmail.com",
  "2067-12-09"
);

console.log(cliente1.obterInformacoes());
