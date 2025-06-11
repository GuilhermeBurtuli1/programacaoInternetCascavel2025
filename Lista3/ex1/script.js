let dimensao1 = document.querySelector("#dimensao1");
let dimensao2 = document.querySelector("#dimensao2");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular(){
    let dm1 = Number(dimensao1.value)
    let dm2 = Number(dimensao2.value)
    let area = dm1 * dm2;
    let forma;

if( dm1 === dm2){
forma ="quadrado";
}
else{
    forma="retangulo";
}
resultado.textContent = " e um "+ forma +" com area de "+ area;
}

botao.onclick = function(){
    calcular();
}
