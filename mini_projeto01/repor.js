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
  }
  
  const produto1 = new Produto("Bota Motoquiero CAC", 180.00, 50);
  console.log(`Nome: ${produto1.nome}`);
  console.log(`Preço: R$ ${produto1.preco}`);
  console.log(`Quantidade: ${produto1.quantidade}`);
  
  console.log(`Valor total: R$ ${produto1.getValorTotal()}`);
  
  produto1.repor(5);
  console.log(`Quantidade após repor: ${produto1.quantidade}`);