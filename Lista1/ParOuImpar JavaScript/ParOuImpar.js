let numero = document.querySelector("#numero");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function numeroImpar() {
    let = valor = Number(numero.value)

if(valor % 2) {
    resultado.textContent = "Este número é impar";
}
else{
    resultado.textContent = "Este número é par"
}

}

botao.onclick = function() {
    numeroImpar();
}