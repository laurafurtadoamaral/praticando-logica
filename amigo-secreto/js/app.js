let listaAmigos = [];
let nomesIncluidos = document.getElementById('lista-amigos');
let resultadoSorteio = document.getElementById('lista-sorteio');


function adicionar(){ 
    let amigo = document.getElementById('nome-amigo');
    listaAmigos.push(amigo.value);
    document.getElementById('nome-amigo').value = '';
    nomesIncluidos.innerHTML = listaAmigos.join(' , ');
}

function sortear(){

    let listaEmbaralhada = listaAmigos.sort(function(){return 0.5 - Math.random()});
    resultadoSorteio.innerHTML = listaEmbaralhada.join(' , ');

    // pendente resultado correto. Linkar nomes entrada e saída não podendo ser o mesmo
}


function reiniciar(){
    listaAmigos = [];
    nomesIncluidos.innerHTML = '';
    resultadoSorteio.innerHTML = ''; 
    alert ('Dados zerados');
}