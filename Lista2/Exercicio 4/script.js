let pizzas = document.querySelector("#pizzas");
let refrigerante = document.querySelector("#refrigerante");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");


function pizzaria() {
    let qtdepizzas = Number(pizzas.value);
    let qtderefri = Number(refrigerante.value);
    
    calculopizzas = qtdepizzas * 12;
    calculorefri = qtderefri * 7;
    calculototal = calculopizzas + calculorefri;
    resultado.textContent = "Valor total: " + calculototal;


}

botao.onclick = function() {
    pizzaria();
}
