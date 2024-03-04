document.getElementById('submit-button').addEventListener('click', function () {
    if(items.value !== ""){
      const endereco = {
        logradouro: data.logradouro,
        complemento: data.complemento,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf
      };
  
      if (localStorage.getItem('endereco')) {
        if (confirm('Já existe um endereço cadastrado. Deseja atualizar com o novo endereço?')) {
          localStorage.setItem('endereco', JSON.stringify(endereco));
          alert('Endereço atualizado com sucesso!');
        }
      } else {
        if (data.erro) {
          alert('CEP não encontrado.');
        } else if (confirm(`${endereco.logradouro}, ${endereco.complemento ? endereco.complemento : ''} - ${endereco.bairro} - ${endereco.localidade}/${endereco.uf}\n\nDeseja salvar esse endereço no localStorage?`)) {
          localStorage.setItem('endereco', JSON.stringify(endereco));
          alert('Endereço salvo com sucesso!');
        }
      }
  
      counter++
      localStorage.setItem("counter", counter);
    }
  });
  
  // On page load, restore endereco from localStorage if it exists
  const endereco = JSON.parse(localStorage.getItem('endereco'));
  if (endereco) {
    alert(`Endereço atual:\n${endereco.logradouro}, ${endereco.complemento ? endereco.complemento : ''} - ${endereco.bairro} - ${endereco.localidade}/${endereco.uf}`);
<<<<<<< HEAD
  }
  //final
=======
  }
>>>>>>> c8c04673ab2a0ca0e1f6639f20644278e0126c5d
