let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$0,00';

function adicionar(){ 
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('$')[1];
    let quantidade = document.getElementById('quantidade').value;   
    if (quantidade <= 0) {
        alert('Digite um número maior que zero!');
        return;
    }
    let preco = quantidade * valorUnitario;
    document.getElementById('quantidade').value = '';


// adicionar produto no carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
  </section>`;

// atualizar preço total
totalGeral = totalGeral + preco;
let valorTotal = document.getElementById('valor-total');
valorTotal.textContent = `R$${totalGeral}`;
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0,00';
}