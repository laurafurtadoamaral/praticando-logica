let listaAmigos = [];
let nomesIncluidos = document.getElementById('lista-amigos');

function adicionar(){ 
    let amigo = document.getElementById('nome-amigo');
    listaAmigos.push(amigo.value);
    alert (listaAmigos);
    document.getElementById('nome-amigo').value = '';
    nomesIncluidos.innerHTML = listaAmigos.join(' , ');

}

function sortear(){

}


function reiniciar(){
    listaAmigos = [];
    nomesIncluidos.innerHTML = '';
    alert ('Dados zerados');
}