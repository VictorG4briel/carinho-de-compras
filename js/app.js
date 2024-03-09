let totalGeral = 0
limpar()

function adicionar(){
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value; 
    if(quantidade <= 0){
        alert('Insira um quantidade valida')
        return
    }
    //calcular o preço, o nosso subtotal
let preco = quantidade * valorUnitario;
let carrinho = document.getElementById('lista-produtos');
//adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
</section>`;
//valor total
totalGeral = totalGeral + preco;
let somaDosValores = document.getElementById('valor-total')
somaDosValores.textContent = `R$${totalGeral}`
document.getElementById('quantidade').value = 0;

}
function limpar(){
    let totalGeral = 0
document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').innerHTML = 'R$ 0'

}

