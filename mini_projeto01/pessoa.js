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
  
  const pessoa1 = new Pessoa("Narciso B. Neto", 65, "Desenvolvedor Web FULLLLLLLLLL");
  console.log(`Nome: ${pessoa1.nome}`);
  console.log(`Idade: ${pessoa1.idade}`);
  console.log(`Profissão: ${pessoa1.profissao}`);