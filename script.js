
  const form = document.getElementById('contatoForm');
  const mensagem = document.getElementById('mensagem');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede envio padrão para página
    const data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        mensagem.innerHTML = '<p>Obrigado! Formulário enviado com sucesso.</p>';
        form.reset(); // limpa o formulário
      } else {
        mensagem.innerHTML = '<p>Erro ao enviar. Tente novamente.</p>';
      }
    })
    .catch(error => {
      mensagem.innerHTML = '<p>Erro ao enviar. Tente novamente.</p>';
      console.error(error);
    });
  });
