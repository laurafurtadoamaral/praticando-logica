let valorTotal = document.getElementById('valor-total');

function adicionar(){ 
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('$')[1];
    let quantidade = document.getElementById('quantidade').value;    
    let preco = quantidade * valorUnitario;

// adicionar produto no carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
  </section>`;

// atualizar preço total

}