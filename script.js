// 1 captura o formulario
const loginForm = document.getElementById('loginForm');

// 2 add o evento de envio
loginForm.addEventListener('submit', function (e) {e.preventDefault(); //evita o carregamento da pagina

//capt. os valores dos campos
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

// Simulação de autenticação
if (email === 'admin@example.com' && password === '123456') {
    alert('Login bem-sucedido!');
    // Redirecionar para outra página (se necessário)
    // window.location.href = 'dashboard.html';
  } else {
    // Exibe mensagem de erro
    alert('Email ou senha incorretos!');
    // Adiciona borda vermelha aos campos
    document.getElementById('email').classList.add('is-invalid');
    document.getElementById('password').classList.add('is-invalid');
  }
});