let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let valor3 = document.querySelector("#valor3");
let valor4 = document.querySelector("#valor4");


let btAprovacao = document.querySelector("#btAprovacao");
let resultado = document.querySelector("#resultado");

function maiorValor(){
    let numero1 = Number(valor1.value);
    let numero2 = Number(valor2.value);
    let numero3 = Number(valor3.value);
    let numero4 = Number(valor4.value);

//mostrar o maior valor

if((numero1 < numero2) && (numero1 < numero3) && (numero1 < numero4)) {
    resultado.textContent = "O menor valor é: " + numero1;
}
else if((numero2 < numero1) && (numero2 < numero3) && (numero2 < numero4)) {
    resultado.textContent = "O menor valor é: " + numero2;
}
else if((numero3 < numero1) && (numero3 < numero2) && (numero2 < numero4)) {
    resultado.textContent = "O menor valor é: " + numero3;
}
else{
    resultado.textContent = "O menor valor é: " + numero4;
}
}


btAprovacao.onclick = function() {
    maiorValor();

}





