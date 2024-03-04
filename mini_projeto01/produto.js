class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    // Métodos (opcional)
  
    // Exemplo: Obter valor total do produto
    getValorTotal() {
      return this.preco * this.quantidade;
    }
  
    // Exemplo: Diminuir a quantidade do produto
    diminuirQuantidade(valor) {
      if (valor <= this.quantidade) {
        this.quantidade -= valor;
      } else {
        console.log(`Quantidade insuficiente. Estoque: ${this.quantidade}`);
      }
    }
  }
  
  // Exemplo de uso
  const produto1 = new Produto("Camiseta", 50.00, 10);
  console.log(`Nome: ${produto1.nome}`);
  console.log(`Preço: R$ ${produto1.preco}`);
  console.log(`Quantidade: ${produto1.quantidade}`);
  
  console.log(`Valor total: R$ ${produto1.getValorTotal()}`);
  
  produto1.diminuirQuantidade(5);
  console.log(`Quantidade após diminuir: ${produto1.quantidade}`);
