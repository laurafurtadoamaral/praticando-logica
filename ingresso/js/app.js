let pistaDisponivel = 100;
let superiorDisponivel = 200;
let inferiorDisponivel = 400;

function comprar(){
let ingresso = document.getElementById('tipo-ingresso').value;
let quantidade = document.getElementById('qtd').value;
if (quantidade <= 0){
    alert ('A quantidade escolhida deve ser maior que zero');
}
alert (`Você escolheu ${quantidade} ingressos do tipo ${ingresso}`);
document.getElementById('qtd').value = '';
}




// a quantidade disponível deve diminuir




// alert para quantidade indisponível


