// Aqui você pode adicionar funcionalidades, como scroll suave, menu mobile, etc.
console.log("Site carregado com sucesso!");
// Aqui você pode adicionar funcionalidades, como scroll suave, menu mobile, etc.
console.log("Site carregado com sucesso!");


// FORM
document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

  // Coleta os dados
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value;

  // Validação simples
  if (!nome || !email || !assunto || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Simula envio (você pode conectar a um backend depois)
  alert("Mensagem enviada com sucesso! Obrigado pelo contato, " + nome + ".");
  
  // Limpa o formulário
  this.reset();
});

// FORM