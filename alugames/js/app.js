function alterarStatus(numero){

let jogo = document.getElementById(`game-${numero}`);
let imagem = jogo.querySelector('.dashboard__item__img');
let botao = jogo.querySelector('.dashboard__item__button');

// se jogo alugado
if (imagem.classList.contains('dashboard__item__img--rented')){
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';

// deixa jogo disponível
    }else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}