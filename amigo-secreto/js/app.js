let listaAmigos = [];
let nomesIncluidos = document.getElementById('lista-amigos');
let resultadoSorteio = document.getElementById('lista-sorteio');

function adicionar(){ 
    let amigo = document.getElementById('nome-amigo');
    if (listaAmigos.includes(amigo.value)){
        alert ('Nome já incluído!');
    } if (amigo.value === ''){
        alert ('Campo vazio, informe um nome!');
    } else{
    listaAmigos.push(amigo.value);
    document.getElementById('nome-amigo').value = '';
    nomesIncluidos.innerHTML = listaAmigos.join(' , ');
    }
}

function sortear(){
    resultadoSorteio.innerHTML = '';
    if(listaAmigos.length < 4){
    alert ('É necessário informar ao mínimo 4 nomes diferentes');
    } else {
    let listaEmbaralhada = listaAmigos.slice().sort(function(){return 0.5 - Math.random()});
    for (let i=0; i<listaEmbaralhada.length; i++){
            if( i == listaEmbaralhada.length - 1) {
            resultadoSorteio.innerHTML = resultadoSorteio.innerHTML + listaEmbaralhada[i] + ' --> ' + listaEmbaralhada[0] + '<br>';
            } else{
            resultadoSorteio.innerHTML = resultadoSorteio.innerHTML + listaEmbaralhada[i] + ' --> ' + listaEmbaralhada[i + 1] + '<br>';
            }
        }
    }
}

function reiniciar(){
    listaAmigos = [];
    nomesIncluidos.innerHTML = '';
    resultadoSorteio.innerHTML = ''; 
}