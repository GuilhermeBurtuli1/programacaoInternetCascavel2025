let valor = document.querySelector("#valor");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function Calcular(){

let reajuste = Number(valor.value);

let reajuste1 = reajuste * 1.01;
let reajuste2 = reajuste * 1.02;
let reajuste3 = reajuste * 1.05;
let reajuste4 = reajuste * 1.10;

resultado.innerHTML = "<h4> reajuste de 1% = "+ reajuste1+ "<br>"+
                      "reajuste de 2% = "+ reajuste2+ "<br>"+
                      "reajuste de 5% = "+ reajuste3+ "<br>"+
                      "reajuste de 10% = "+ reajuste4+ "<br></h4>"

        
}

botao.onclick = function(){

Calcular();

}