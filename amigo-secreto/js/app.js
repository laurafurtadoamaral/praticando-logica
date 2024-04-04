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
    resultadoSorteio.innerHTML = '';
    let listaEmbaralhada = listaAmigos.slice().sort(function(){return 0.5 - Math.random()});
    for (let i=0; i<listaEmbaralhada.length; i++){
        if( i == listaEmbaralhada.length - 1) {
        resultadoSorteio.innerHTML = resultadoSorteio.innerHTML + listaEmbaralhada[i] + ' --> ' + listaEmbaralhada[0] + '<br>';
        } else{
        resultadoSorteio.innerHTML = resultadoSorteio.innerHTML + listaEmbaralhada[i] + ' --> ' + listaEmbaralhada[i + 1] + '<br>';
        }
    }
}

function reiniciar(){
    listaAmigos = [];
    nomesIncluidos.innerHTML = '';
    resultadoSorteio.innerHTML = ''; 
}