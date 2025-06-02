let valor = document.querySelector("#valor");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function Calcular(){

let quantidade = Number(valor.value);

let Queijo = quantidade * 50;
let Ovos = quantidade * 2;


resultado.innerHTML = "<h4> Queijo = "+ Queijo+ " gramas <br>"+
                      "Ovos = "+ Ovos+ "<br></h4>"


        }

botao.onclick = function(){

Calcular();

}