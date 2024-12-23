// 1 captura o formulario
const loginForm = document.getElementById('loginForm');

// 2 add o evento de envio
loginForm.addEventListener('submit', function (e) {e.preventDefault(); //evita o carregamento da pagina

// 3 capt. os valores dos campos
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

// 4 Simulação de autenticação
if (email === 'admin@example.com' && password === '123456') {
    alert('Login bem-sucedido!');
    // 5 Redirecionar para outra página (se necessário)
    // 6 window.location.href = 'dashboard.html';
  } else {
    // 7 Exibe mensagem de erro
    alert('Email ou senha incorretos!');
    // 8 Adiciona borda vermelha aos campos
    document.getElementById('email').classList.add('is-invalid');
    document.getElementById('password').classList.add('is-invalid');
  }
});