const salarioInput = document.querySelector("#salario");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.onclick = function () {
    const salarioInicial = Number(salarioInput.value);

    if (isNaN(salarioInicial) || salarioInicial <= 0) {
        resultado.innerHTML = "Por favor, insira um salário válido maior que zero.";
        return;
    }

    const aumento = salarioInicial * 0.15;
    const salarioComAumento = salarioInicial + aumento;
    const imposto = salarioComAumento * 0.08;
    const salarioFinal = salarioComAumento - imposto;

    resultado.innerHTML = `
        Salário inicial: R$ ${salarioInicial.toFixed(2)}<br>
        Salário com aumento de 15%: R$ ${salarioComAumento.toFixed(2)}<br>
        Salário final após desconto de 8% de impostos: R$ ${salarioFinal.toFixed(2)}
    `;
};
