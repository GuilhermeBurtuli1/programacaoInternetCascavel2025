const x1 = document.querySelector("#x1");
const y1 = document.querySelector("#y1");
const x2 = document.querySelector("#x2");
const y2 = document.querySelector("#y2");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.onclick = function () {
    const X1 = Number(x1.value);
    const Y1 = Number(y1.value);
    const X2 = Number(x2.value);
    const Y2 = Number(y2.value);

    if (
        isNaN(X1) || isNaN(Y1) ||
        isNaN(X2) || isNaN(Y2)
    ) {
        resultado.innerHTML = "Por favor, insira todos os valores numéricos.";
        return;
    }

    const deltaX = X2 - X1;
    const deltaY = Y2 - Y1;

    const distancia = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    resultado.innerHTML = `A distância entre os pontos é ${distancia.toFixed(2)}.`;
};
