var ehPrimo = (numero) => {
    var contador = 0;
    for(var i = 1; i <= numero; i++){
        if(numero % i == 0){
            contador++;
        }
    }

    if(contador == 2){
        console.log("O número " + numero + " é primo.");
    }else{
        console.log("O número " + numero + " não é primo.");
    }
}

ehPrimo(3);
ehPrimo(5);
ehPrimo(8);
ehPrimo(11);
ehPrimo(19);
ehPrimo(21);
