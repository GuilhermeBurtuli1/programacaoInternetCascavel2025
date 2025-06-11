const qtdP = document.querySelector("#qtdP");
const qtdM = document.querySelector("#qtdM");
const qtdG = document.querySelector("#qtdG");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.onclick = function () {
    const p = Number(qtdP.value);
    const m = Number(qtdM.value);
    const g = Number(qtdG.value);

    if (
        isNaN(p) || p < 0 ||
        isNaN(m) || m < 0 ||
        isNaN(g) || g < 0
    ) {
        resultado.innerHTML = "Por favor, insira quantidades válidas (números maiores ou iguais a zero).";
        return;
    }

    const precoP = 10;
    const precoM = 12;
    const precoG = 15;

    const total = p * precoP + m * precoM + g * precoG;

    resultado.innerHTML = `O valor total arrecadado é R$ ${total.toFixed(2)}.`;
};
