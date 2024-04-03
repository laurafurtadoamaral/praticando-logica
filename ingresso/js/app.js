function comprar(){
let ingresso = document.getElementById('tipo-ingresso').value;
let quantidade = parseInt(document.getElementById('qtd').value);

if (quantidade <= 0){
    alert ('A quantidade escolhida deve ser maior que zero');
    return;
}
document.getElementById('qtd').value = '';

if (ingresso === 'inferior'){
        let qtdInferior = document.getElementById('qtd-inferior').textContent;
    let qtdInferiorAtualizada = qtdInferior - quantidade;
    if(qtdInferiorAtualizada < 0){
        alert('Quantidade indisponível!');
        return;
    } else {
        document.getElementById('qtd-inferior').textContent = qtdInferiorAtualizada.toString();
    }

}else if (ingresso === 'superior'){
    let qtdSuperior = document.getElementById('qtd-superior').textContent;
    let qtdSuperiorAtualizada = qtdSuperior - quantidade;
    if(qtdSuperiorAtualizada < 0){
        alert('Quantidade indisponível!');
        return;
    } else {
        document.getElementById('qtd-superior').textContent = qtdSuperiorAtualizada.toString();
    }

}else {
    let qtdPista = document.getElementById('qtd-pista').textContent;
    let qtdPistaAtualizada = qtdPista - quantidade;
    if(qtdPistaAtualizada < 0){
        alert('Quantidade indisponível!');
        return;
    } else {
        document.getElementById('qtd-pista').textContent = qtdPistaAtualizada.toString();
    }
}}