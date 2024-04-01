function alterarStatus(numeroJogo){
let jogo = document.getElementById('game-' + numeroJogo);
     if (jogo.classList.contains('dashboard__item__button')){
        jogo.classList.remove('dashboard__item__button');
        jogo.classList.add('dashboard__item__button--return');
        jogo.innerHTML = '<a onclick="alterarStatus('+ numeroJogo +')" href="#" class="dashboard__item__button dashboard__item__button--return">Devolver</a>';
    } else {
        jogo.classList.remove('dashboard__item__button--return');
        jogo.classList.add('dashboard__item__button');
        jogo.innerHTML = '<a onclick="alterarStatus('+ numeroJogo +')" href="#" class="dashboard__item__button">Alugar</a>';
    }
}