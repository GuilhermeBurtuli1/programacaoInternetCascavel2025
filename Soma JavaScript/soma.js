let numero1 = document.querySelector("#numero1");
let numero2  = document.querySelector("#numero2");
let btnSomar = document.querySelector("#btnSomar");
let resultado = document.querySelector("#resultado");


function somar( ){
    //retornando o texto digitado no campo
    let numerosomado1 = Number(numero1.value);
    let numerosomado2 = Number(numero2.value);
    let resultadosoma = numerosomado1 + numerosomado2;
    //alternando o texto do elemento h1

    resultado.textContent = resultadosoma;

}
btnSomar.onclick = function(){
    somar();
}