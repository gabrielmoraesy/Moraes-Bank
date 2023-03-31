const btnSair = document.querySelector('.btnSair');
const btnRecarregar = document.querySelector('.btnRecarregar');

const saldoAtual = document.querySelector('.valorDoSaldo');
const saqueAtual = document.querySelector('.valorDoSaque');
const depositoAtual = document.querySelector('.valorDoDeposito');

const btnSacar = document.querySelector('.btnSacar');
const btnDepositar = document.querySelector('.btnDepositar');

const inputDeposito = document.querySelector('.inputDeposito');
const inputSaque = document.querySelector('.inputSaque');

// Define os valores iniciais de saldo, saque e depósito.
saldoAtual.innerHTML = 10000;
saqueAtual.innerHTML = 0;
depositoAtual.innerHTML = 0;

btnSair.addEventListener('click', () => {
    if (confirm('Deseja sair da sua conta?')) {
        window.location.href = "index.html";
    }
})

btnRecarregar.addEventListener('click', () => {
    saldoAtual.innerHTML = 10000;
    saqueAtual.innerHTML = 0;
    depositoAtual.innerHTML = 0;
});

btnSacar.addEventListener('click', () => {
    const inputSaqueValor = inputSaque.value.replace(',', '.');

    if (inputSaqueValor === 0 || inputSaqueValor === "") {
        alert("Informe um número inteiro");
        return;
    }

    if (inputSaqueValor > saldoAtual.innerHTML) {
        alert('Saldo insuficiente!');
        return;
    }

    saldoAtual.innerHTML = (parseFloat(saldoAtual.innerHTML) - parseFloat(inputSaqueValor)).toFixed(2);
    saqueAtual.innerHTML = (parseFloat(saqueAtual.innerHTML) + parseFloat(inputSaqueValor)).toFixed(2);

    inputSaque.value = '';
});

btnDepositar.addEventListener('click', () => {
    const inputDepositoValor = inputDeposito.value.replace(',', '.');

    if (inputDepositoValor === 0 || inputDepositoValor === '') return alert('Informe um número positivo!');

    saldoAtual.innerHTML = (parseFloat(saldoAtual.innerHTML) + parseFloat(inputDepositoValor)).toFixed(2);
    depositoAtual.innerHTML = (parseFloat(depositoAtual.innerHTML) + parseFloat(inputDepositoValor)).toFixed(2);

    inputDeposito.value = '';
});

function apenasNumeros(evt) {
    var evento = evt || window.event;
    var chave = evento.keyCode || evento.which;
    chave = String.fromCharCode( chave );
    var regex = /^[0-9.,]+$/;
    if( !regex.test(chave) ) {
       evento.returnValue = false;
       if(evento.preventDefault) evento.preventDefault();
    }
};

inputSaque.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        btnSacar.click();
    }
});

inputDeposito.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        btnDepositar.click();
    }
});




