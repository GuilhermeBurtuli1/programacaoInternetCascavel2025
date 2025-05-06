let valor = document.querySelector("#valor");
let pago  = document.querySelector("#pago");
let btnSubtrair = document.querySelector("#btnSubtrair");
let resultado = document.querySelector("#resultado");


function subtrair( ){
    //retornando o texto digitado no campo
    let numerovalor = Number(valor.value);
    let numeropago = Number(pago.value);
    let troco = numeropago - numerovalor;
    //alternando o texto do elemento h1

    resultado.textContent = "Troco: " + troco;

}
btnSubtrair.onclick = function(){
    subtrair();
}