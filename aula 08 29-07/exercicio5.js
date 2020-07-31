const contagemRegressiva = new Promise((resolve, reject) => {
    // setTimeout(function(){
         for(var i = 10; i > 0; i--){
             console.log(i);
    // }}, 1000);
 }})
 
const felizAnoNovo = new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Feliz Ano Novo!!!")
    }, 1000);
})

const asyncFunction = async () => {
    try{
        const primeiraParte = await contagemRegressiva;
        const segundaParte = await felizAnoNovo;
        console.log(primeiraParte)
        console.log(segundaParte);
    }
    catch(erro){
        console.log(erro);
    }
}

asyncFunction();