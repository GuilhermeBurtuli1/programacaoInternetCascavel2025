const dia = document.querySelector("#dia");
const mes = document.querySelector("#mes");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.onclick = function () {
    const diaInformado = Number(dia.value);
    const mesInformado = Number(mes.value);

    if (
        isNaN(diaInformado) || diaInformado < 1 || diaInformado > 30 ||
        isNaN(mesInformado) || mesInformado < 1 || mesInformado > 12
    ) {
        resultado.innerHTML = "Por favor, insira um dia (1 a 30) e um mês (1 a 12) válidos.";
        return;
    }

    const diasTotais = (mesInformado - 1) * 30 + diaInformado;

    resultado.innerHTML = `Já se passaram ${diasTotais} dias desde o início do ano.`;
};
