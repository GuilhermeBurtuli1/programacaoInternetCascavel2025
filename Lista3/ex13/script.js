const raioInput = document.querySelector("#raio");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.onclick = function () {
    const raio = Number(raioInput.value);
    const pi = 3.14;

    if (isNaN(raio) || raio <= 0) {
        resultado.innerHTML = "Por favor, insira um raio válido maior que zero.";
        return;
    }

    const area = pi * raio * raio;

    resultado.innerHTML = `A área da pizza é ${area.toFixed(2)} unidades².`;
};
