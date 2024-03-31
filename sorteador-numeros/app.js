function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    alert (`Gerar ${quantidade} números de ${de} até ${ate}`);

    let numerosSorteados = [];
    for (let i=0; i < quantidade; i++){
        let numero  = gerarNumeroAleatorio(de , ate);
        numerosSorteados.push(numero);
    }
    alert (numerosSorteados);
}    

function gerarNumeroAleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}