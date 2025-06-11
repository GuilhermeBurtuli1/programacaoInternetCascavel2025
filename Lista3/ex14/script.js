const valorContaInput = document.querySelector("#valorConta");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.onclick = function () {
    const valorTotal = Number(valorContaInput.value);

    if (isNaN(valorTotal) || valorTotal <= 0) {
        resultado.innerHTML = "Por favor, insira um valor válido maior que zero.";
        return;
    }

    // Valor para cada um dividindo igualmente
    const valorDividido = valorTotal / 3;

    // Carlos e André pagam só a parte inteira (sem centavos)
    const carlos = Math.floor(valorDividido);
    const andre = Math.floor(valorDividido);

    // Felipe paga o que sobra
    const felipe = valorTotal - (carlos + andre);

    resultado.innerHTML = `
        Carlos deve pagar: R$ ${carlos.toFixed(2)}<br>
        André deve pagar: R$ ${andre.toFixed(2)}<br>
        Felipe deve pagar: R$ ${felipe.toFixed(2)}
    `;
};
