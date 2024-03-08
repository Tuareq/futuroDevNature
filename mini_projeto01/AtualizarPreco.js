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
  
  const produto1 = new Produto("Camiseta Azul", 60.25, 1000);
  console.log(`Nome: ${produto1.nome}`);
  console.log(`Preço: R$ ${produto1.preco}`);
  console.log(`Quantidade: ${produto1.quantidade}`);
  
  console.log(`Valor total: R$ ${produto1.getValorTotal()}`);
  
  produto1.AtualizarPreco(65.50);
  console.log(`Preço atualizado: R$ ${produto1.preco}`);