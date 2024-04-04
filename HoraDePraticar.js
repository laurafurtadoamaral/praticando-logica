// Crie uma função que valide se um número é positivo, negativo ou zero.
function validacao(numero){
    if (numero === 0){
        alert ('O número é nulo');
    } if (numero > 0){
        alert ('O numero é positivo');
    } else{
        alert('O número é negativo');
    }
}

// Implemente uma função que verifique se uma pessoa é maior de idade.
function deMaior(idade){
    if (idade>=18){
        alert ('Você é maior de idade')
    } else {
        alert('Você é menor de idade');
    }
}

// Desenvolva uma função que valide se uma string é vazia ou não.
function validacao (string){
    if (string === ''){
        alert('String vazia');
    } else{
        alert('string não é vazia');
    }
}

// Crie uma função que determine se um ano é bissexto

function anoBissexto(ano){
    if (ano % 400 === 0){
        alert ('O ano é bissexto');
    } else if (ano % 100 === 0){
        alert ('O ano não é bissexto');
    } else if (ano % 4 === 0){
        alert ('O ano é bissexto');
    } else {
        alert ('O ano não é bissexto');
    }
}

// Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
function media(a,b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        alert ('Precisamos de números e não letras')
    } else{
    let media = (a+b)/2;
    return media;
    }
}

// Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
function tamanho(array){
    let tamanho = array.length;
    return tamanho;
}

// Crie um array e utilize a função includes para verificar se um elemento específico está presente
let lista = [1, 2, 3, 4, 5];
let numero = parseInt(prompt('Digite um número'));
if (lista.includes(numero)){
    alert('Sim, o número está contido');
} else{
    alert ('Não, o número não está incluso');
}

// Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.
function confere(array, elemento){
    if (array.includes(elemento)){
        alert('O elemento está contido no array');
    } else {
        alert('O elemento não está contido no array');
    }
}

// Crie um array de strings e utilize includes para verificar se uma determinada string está presente.
let lista = ['a', 'b', 'c', 'd', 'e'];
let elemento = prompt('Escreva um elemento');
if (lista.includes(elemento)){
    alert('O elemento está contido no array');
} else {
    alert('O elemento não está contido no array');
}

// Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um
// estudante procurado. Depois retorne se o objeto está presente no array.


//Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.

