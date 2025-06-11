let cavalos = document.querySelector("#cavalos");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");


function calcular(){

let cvl = Number(cavalos.value);
let total = cvl * 4;

resultado.textContent = " são necessarias "+ total +" ferraduras";

}

botao.onclick = function(){
    calcular();
}