var produtos = [
    {nome: "Arroz", preco: 12.99},
    {nome: "Feijão", preco: 4.99},
    {nome: "Farinha de Trigo", preco: 2.99},
    {nome: "Óleo de Soja", preco: 3.99},
    {nome: "Polvilho", preco: 3.99}
]

//console.log(produtos[0].preco);

function total(array){
    var soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i].preco;
    }
    console.log(soma);
}

total(produtos);