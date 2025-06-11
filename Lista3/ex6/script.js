const peso = document.querySelector("#peso");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.onclick = function () {
    const pesoPrato = Number(peso.value);
    const precoPorQuilo = 12.00;

    if (isNaN(pesoPrato) || pesoPrato <= 0) {
        resultado.innerHTML = "Por favor, insira um peso válido.";
        return;
    }

    const valorPagar = pesoPrato * precoPorQuilo;

    resultado.innerHTML = `O valor a pagar é R$ ${valorPagar.toFixed(2)}.`;
};
