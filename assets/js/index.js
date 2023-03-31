alert('Logue com o login padrão! Usuário: 123 / Senha: 123')

const inputCpf = document.querySelector('.inputCpf');
const inputSenha = document.querySelector('.inputSenha');
const btnAcessar = document.querySelector('.btnLogin');

btnAcessar.addEventListener('click', () => {
    const cpfCorreto = 123;
    const senhaCorreta = 123;

    if (inputCpf.value == cpfCorreto && inputSenha.value == senhaCorreta) {
        window.location.href = "menuTransacoes.html";
    } else {
      alert('Logue com o login padrão! Usuário: 123 / Senha: 123');
    }
});

