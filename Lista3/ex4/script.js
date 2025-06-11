let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcularDiasDeVida() {
    let nomePessoa = nome.value.trim();
    let idadeAnos = Number(idade.value);

    if (nomePessoa === "" || isNaN(idadeAnos) || idadeAnos < 0) {
        resultado.innerHTML = "Por favor, preencha corretamente o nome e a idade.";
        return;
    }

    let diasDeVida = idadeAnos * 365;

    resultado.innerHTML = `${nomePessoa.toUpperCase()}, VOCÊ JÁ VIVEU ${diasDeVida} DIAS`;
}

botao.onclick = calcularDiasDeVida;
