let saldo = document.querySelector("#saldo")
let reajuste = document.querySelector("#reajuste")
let btreajuste = document.querySelector("#btreajuste")
let resultado = document.querySelector("#resultado")

function saldoReajustado() {
    let valorSaldo = Number(saldo.value);
    let porcentagem = Number(reajuste.value);
    let resultadoSoma = valorSaldo + (valorSaldo * (porcentagem / 100));
    resultado.textContent = resultadoSoma;
}

btreajuste.onclick = function() {
    saldoReajustado();
}

