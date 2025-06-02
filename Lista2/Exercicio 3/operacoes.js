let numero = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calculos() {
    let vlr1 = Number(numero.value)
    let vlr2 = Number(numero2.value)

    //calculo +
    let calculoSoma = vlr1 + vlr2;
    
    // calculo -
    let calculoSub = vlr1 - vlr2;

    //calculo x
    let calculoMult = vlr1 * vlr2

    //calculo ÷
    let calculoDiv = vlr1 / vlr2

    resultado.innerHTML = "<h3>Resultado da Soma (+): "+calculoSoma+"<br>"+
                            "Resultado da Subtração (-): "+calculoSub+"<br>"+
                            "Resultado da Multiplicação (x): "+calculoMult+"<br>"+
                            "Resultado Divisão (÷)"+calculoDiv+"</h3>"


}

botao.onclick = function() {
    calculos();
}