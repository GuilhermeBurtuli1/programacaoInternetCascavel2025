const numeroInput = document.querySelector("#numero");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.onclick = function () {
    let num = Number(numeroInput.value);

    if (isNaN(num) || num < 0 || num > 999 || !Number.isInteger(num)) {
        resultado.innerHTML = "Por favor, insira um número inteiro entre 0 e 999.";
        return;
    }

    // Centena
    const centena = Math.floor(num / 100);

    // Dezena
    const dezena = Math.floor((num % 100) / 10);

    // Unidade
    const unidade = num % 10;

    resultado.innerHTML = `
        CENTENA = ${centena} <br>
        DEZENA = ${dezena} <br>
        UNIDADE = ${unidade}
    `;
};
