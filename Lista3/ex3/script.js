let pao = document.querySelector("#pão");
let broa = document.querySelector("#broa");
let botao = document.querySelector("#botao");

function calcular(){
    let vlr1 = Number(pão.value);
    let vlr2 = Number(broa.value);
    let calculo1 = vlr1 * 0.12;
    let calculo2 = vlr2 * 1.50;
    let calculototal = calculo1 + calculo2;
    let caltotal = calculototal * 0.1;

    resultado.innerHTML = "<p>resultado total e: R$"+ calculototal.toFixed(2)+
                          "<br> 10% do valor para guardar e: R$"+ caltotal.toFixed(2)+"</p>";
                       
}


botao.onclick = function(){
    calcular();
}
