async function getUserInfo() {
  return new Promise((resolve) => {
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
obterEExibirInformacoesDoUsuario();