async function getUserInfo() {
  return new Promise((resolve) => {
    // Simulando o tempo de espera da consulta (2 segundos)
    setTimeout(() => {
      const userInfo = {
        nome: "Alice",
        idade: 30,
        email: "alice@example.com",
      };
      resolve(userInfo);
    }, 2000);
  });
}

// Função que utiliza getUserInfo para obter as informações do usuário e exibi-las no console
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