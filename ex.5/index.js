//clonando objetos usando o operador Spread 
const produto ={
    nome:'caneta Bic Preta',
    preco:1.90,
    desconto:0.5
}

function clone(objeto){
    return { ...objeto }
}


const novoProduto = clone(produto)
novoProduto.nome ='Caneca Bic Azul'

console.log(produto,novoProduto)