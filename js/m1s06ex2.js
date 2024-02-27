async function obterEExibirInformacoesDoUsuario() {
    try {
      const userInfo = await getUserInfo();
      console.log("Informações do usuário:");
      console.log(`Nome: ${userInfo.nome}`);
      console.log(`Idade: ${userInfo.idade}`);
      console.log(`Email: ${userInfo.email}`);
    } catch (error) {
      console.error("Erro ao obter informações do usuário:", error.message);
    }
  }
  
  // Chamando a função para obter e exibir as informações do usuário
  obterEExibirInformacoesDoUsuario();