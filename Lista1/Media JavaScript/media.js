let primeiro = document.querySelector("#primeiro");
let segundo = document.querySelector("#segundo");
let terceiro = document.querySelector("#terceiro");

let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");
let botao3 = document.querySelector("#botao3");
let botao4 = document.querySelector("#botao4");

let resultado1 = document.querySelector("#resultado1");
let resultado2 = document.querySelector("#resultado2");
let resultado3 = document.querySelector("#resultado3");
let resultado4 = document.querySelector("#resultado4");

let vlrmediaAritimetica;
let vlrmediaPonderada;






function mediaAritimetica() {
    let valor1 = Number(primeiro.value);
    let valor2 = Number(segundo.value);
    let valor3 = Number(terceiro.value);
    let calculo1 = (valor1 + valor2 + valor3) /3;
    resultado1.textContent = "Media Aritimetica:   " + calculo1;
    vlrmediaAritimetica = calculo1;
}

botao1.onclick = function() {
    mediaAritimetica();
}



function mediaPonderada() {
    let valor1 = Number(primeiro.value);
    let valor2 = Number(segundo.value);
    let valor3 = Number(terceiro.value);
    let calculo2 = ((valor1 * 3) + (valor2 * 2) + (valor3 *5)) / 10;
    resultado2.textContent = "Media Ponderada: " + calculo2;
    vlrmediaPonderada = calculo2;
}

botao2.onclick = function() {
    mediaPonderada();
}

function somadaMedias() {
    let calculo3 = vlrmediaAritimetica + vlrmediaPonderada;
    resultado3.textContent = "Soma das Medias: " + calculo3;
}

botao3.onclick = function() {
    somadaMedias();
}


function mediadaMedias() {
    let calculo4 = (vlrmediaAritimetica + vlrmediaPonderada) /2;
    resultado4.textContent = "Meida das Medias: " + calculo4;
}

botao4.onclick = function() {
    mediadaMedias();
}

