function calcular(){

var operacao = document.getElementById('operacao').value;


//alert(operaçao)
var num1 = document.getElementById('num1').value

var num2 = document.getElementById('num2').value

//forçando tipos de variaveis
num1 = parseFloat(num1);
num2 = parseFloat(num2);

if(num1 == '' || num1 == null){
    alert('Favor digitar um numero valido para operaçao (num1)');
    return false;
}
if(num2 == '' || num2 == null){
    alert('Favor digitar um numero valido para operaçao (num2)');
    return false;
}
var resultado = null;


// //forçndo tipo de variavel
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);

switch(operacao){

case '1': //subtraçao
resultado = num1 - num2;
break;

case '2': //adição
resultado = num1 + num2;
break;

case '3': //multiplicaçao
resultado = num1 * num2;
break;

case '4': //divisao
resultado = num1 / num2;
break;

default:
    alert(' opçao selecionada é invalida');
    return false;
}


document.getElementById('resultado').value = resultado;
}