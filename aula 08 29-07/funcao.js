
/*
function dizerTchau(nome, sobrenome){
    console.log(nome+" "+ sobrenome+ " foi embora");
}


dizerTchau("Jenyffer", "Silva");*/

// function -nome da function -(parametros)variaveis dentro da função
/*function dizerOi(nome) {
    console.log("Olá " + nome);
}

dizerOi("Jenyffer");*/
/*
parOuImpar(14);

function parOuImpar(numero){
    if(numero % 2 == 0){
        console.log("Numero "+ numero+" é par")
    }else{
        console.log("Numero "+numero+ " é impar")
    }
}*/
//funcao anonima
/*var dizerOla = function (nome) {

return "olá"+nome
}
console.log(dizerOla("Jenyffer"))*/


//funcao com construtor pouco utilizada
/*var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");*/

/*function circunferencia (raio){//raio é uma varivel global
    function diametro(){ //funcao aninhada
return 2*raio // raio é uma variavel da função 
    }         
    return Math.PI * diametro(); // invocamos a funcao
}
console.log(circunferencia(2));*/
/*
var funcao = (){
    console.log('a vem primeiro');
    cllback();
}
function a(callback){
    setTimeout(function(){//funcao
    callback()
    }, 3000) //tempo
 console.log('a vem primeiro');
}
 function b(){
     console.log('b vem depos');
 }*/