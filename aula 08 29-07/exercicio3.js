function felizAnoNovo(){
    console.log("Feliz Ano Novo!!!");
}

function contagemRegressiva(){
    for(var i = 10; i > 0; i--){
            console.log(i);
        }
    felizAnoNovo();
}

contagemRegressiva();
