const preco = document.querySelector("#preco");
const valor = document.querySelector("#valor");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.onclick = function () {
    const precoLitro = Number(preco.value);
    const valorPago = Number(valor.value);

    if (precoLitro <= 0 || valorPago <= 0 || isNaN(precoLitro) || isNaN(valorPago)) {
        resultado.innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    const litros = valorPago / precoLitro;

    resultado.innerHTML = `Com R$ ${valorPago.toFixed(2)}, você abasteceu ${litros.toFixed(2)} litros de gasolina.`;
};
