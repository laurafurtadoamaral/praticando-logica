function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let numerosSorteados = [];
    for (let i=0; i < quantidade; i++){
        let numero  = gerarNumeroAleatorio(de, ate);
           
        while (numerosSorteados.includes(numero)){
            numero  = gerarNumeroAleatorio(de, ate);
        }
    numerosSorteados.push(numero);
    }
    let resultado = (document.getElementById('resultado'));
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
    }

function gerarNumeroAleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}