let cpfLogin = '';
let senhaLogin = '';

const cpfCorreto = 123;
const senhaCorreta = 123;

// Define os valores iniciais de saldo, saque e depósito
document.getElementById('valorDoSaldo').innerHTML = 10000;
document.getElementById('valorDoSaque').innerHTML = 0;
document.getElementById('valorDoDeposito').innerHTML = 0;

function acessarTransacoes() {
    cpfLogin = document.getElementById('cpfLogin').value;
    senhaLogin = document.getElementById('senhaLogin').value;

    if (cpfLogin == cpfCorreto && senhaLogin == senhaCorreta) {
        window.location.href = "menuTransacoes.html";
    } else {
      alert('Login inválido! / Usuário: 123 Senha: 123');
    }
}

function sairTransacoes() {
    if (confirm(`Deseja sair da sua conta?`)) {
        window.location.href = "index.html";    
    }
}

function recarregarValores() { 
    document.getElementById('valorDoSaldo').innerHTML = 10000;
    document.getElementById('valorDoSaque').innerHTML = 0;
    document.getElementById('valorDoDeposito').innerHTML = 0;
}

function sacar() {
    valorDoSaldo = parseFloat(document.getElementById('valorDoSaldo').innerHTML);
    valorDoSaque = parseFloat(document.getElementById('valorDoSaque').innerHTML);
    inputSaque = parseFloat(document.getElementById('inputSaque').value.replace(',', '.'));

    if (!isNaN(inputSaque) && inputSaque > 0) {
        if (inputSaque <= valorDoSaldo) {
            document.getElementById('valorDoSaldo').innerHTML = (valorDoSaldo - inputSaque).toFixed(2);
            document.getElementById('valorDoSaque').innerHTML = (valorDoSaque + inputSaque).toFixed(2);
        } else {
            alert('Saldo insuficiente!');
        }
    } else {
        alert('Informe um número decimal positivo!');
    }
    document.getElementById('inputSaque').value = '';
}

function depositar() {
    valorDoSaldo = parseFloat(document.getElementById('valorDoSaldo').innerHTML);
    valorDoDeposito = parseFloat(document.getElementById('valorDoDeposito').innerHTML);
    inputDeposito = parseFloat(document.getElementById('inputDeposito').value.replace(',', '.'));

    if (!isNaN(inputDeposito) && inputDeposito > 0) {
        document.getElementById('valorDoSaldo').innerHTML = (valorDoSaldo + inputDeposito).toFixed(2);
        document.getElementById('valorDoDeposito').innerHTML = (valorDoDeposito + inputDeposito).toFixed(2);
    } else {
        alert('Informe um número decimal positivo!');
    }
    document.getElementById('inputDeposito').value = '';
}





