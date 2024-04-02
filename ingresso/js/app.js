function comprar(){
let ingresso = document.getElementById('tipo-ingresso').value;
let quantidade = parseInt(document.getElementById('qtd').value);

if (quantidade <= 0){
    alert ('A quantidade escolhida deve ser maior que zero');
}
document.getElementById('qtd').value = '';

// Atualizar quantidade de ingresso disponível

if (ingresso === 'Cadeira inferior'){
    let inferiorDisponivel = document.getElementById('qtd-inferior');
    inferiorDisponivel.textContent = parseInt(inferiorDisponivel.textContent) - quantidade;


}else if (ingresso === 'superior'){
    let superiorDisponivel = document.getElementById('qtd-superior');
    superiorDisponivel.textContent = parseInt(superiorDisponivel.textContent) - quantidade;

}else{
    let pistaDisponivel = document.getElementById('qtd-pista');
    pistaDisponivel.textContent = parseInt(pistaDisponivel.textContent) - quantidade;
}
}




// alert para quantidade indisponível
