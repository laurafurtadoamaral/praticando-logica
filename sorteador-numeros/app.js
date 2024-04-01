function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate){
        alert ('Atenção, valor do campo "Do número" deve ser inferior ao do campo "Até o número". Verifique!');
        return;
    }
    if (quantidade >= (ate - de) ){
        alert (`A quantidade de números solicitada é maior que os números contidos no intervalo de ${de} a ${ate}`);
        return;
    }
    
    let numerosSorteados = [];
    for (let i=0; i < quantidade; i++){
        let numero  = gerarNumeroAleatorio(de, ate);
           
        while (numerosSorteados.includes(numero)){
            numero  = gerarNumeroAleatorio(de, ate);
        }
    numerosSorteados.push(numero);
    numerosSorteados.sort((a, b) => a - b);
    }
    let resultado = (document.getElementById('resultado'));
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
    mudarClasseBotao ();
}

function mudarClasseBotao(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')){
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function gerarNumeroAleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar (){
   document.getElementById('quantidade').value = '';
   document.getElementById('de').value = '';
   document.getElementById('ate').value = '';
   document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
   mudarClasseBotao();
}