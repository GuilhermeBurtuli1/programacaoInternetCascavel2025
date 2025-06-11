const diasTotaisInput = document.querySelector("#diasTotais");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.onclick = function () {
    const diasTotais = Number(diasTotaisInput.value);

    if (isNaN(diasTotais) || diasTotais < 0) {
        resultado.innerHTML = "Por favor, insira um número válido de dias.";
        return;
    }

    const diasPorMes = 30;
    const mesesPorAno = 12;

    const anos = Math.floor(diasTotais / (mesesPorAno * diasPorMes));
    const diasRestantesAno = diasTotais % (mesesPorAno * diasPorMes);

    const meses = Math.floor(diasRestantesAno / diasPorMes);
    const dias = diasRestantesAno % diasPorMes;

    resultado.innerHTML = `${diasTotais} dias equivalem a ${anos} ano(s), ${meses} mês(es) e ${dias} dia(s).`;
};
