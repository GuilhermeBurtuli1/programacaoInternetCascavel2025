let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let btAprovacao = document.querySelector("#btAprovacao");
let resultado = document.querySelector("#resultado");

function maiorValor() {
    let numero1 = Number(valor1.value);
    let numero2 = Number(valor2.value);

//mostrar o maior valor
if(numero1 > numero2){
    resultado.textContent = "O maior valor é: " + numero1;

}else{
    resultado.textContent = "O maior valor é: " + numero2;
};

}

btAprovacao.onclick = function() {
    maiorValor();
}