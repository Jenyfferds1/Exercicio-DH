var rodada= 1;
var matriz_jogo = Array(3)

$(document).ready(function(){
$('#btn_iniciar_jogo').click( function(){

//$("#id").val()

//valida a digitação dos apelidos dos jogadores
if($('#entrada_apelido_jogador_1').val() == ''){
    alert('Apelido do jogador 1 não foi preenchido');
    return false;
}

if($('#entrada_apelido_jogador_2').val() == ''){
    alert('Apelido do jogador 2 não foi preenchido');
    return false;
}

 //exibir os apelidos, criat os spans
 $('#nome_jogador_1').html($('#entrada_apelido-jogador_1').val());
 $('#nome_jogador_2').html($('#entrada_apelido-jogador_2').val());

//controlar visualização das divs
$('#pagina_inicial').hide();
$('#palco_jogo').show();


});

//adicionar class jogada  em cda div do jogo
$('.jogada').click(function(){
//criar id em cada div do jogo
var id_campo_clicado =this.id;
$('#'+id_campo_clicado).off();
jogada(id_campo_clicado)


});
 function jogada(id){
     //criar variavel rodada
     var icone='';
     var ponto = 0;

 //a cada rodada verifica que jogador esta jogando (par ou impar)
 if((rodada %2) == 1){
     icone = 'url("imagens/marcacao_1.png")';
     ponto = -1;
 }    else{
    icone = 'url("imagens/marcacao_1.png")';
    ponto = 1;

 }

 rodada ++;
 $('#'+id).css('background-image', icone)

//crir arrays globalmente
//quebra o id para pegar linha e coluna
var linha_coluna = id.sprint('-');


matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

//verificar se houver vencedor
verifica_combinacao();

 }
 function verifica_combinacao(){
     //verifica na horizontal linha A
     var pontos = 0;
     for(var i = 1; i<=3; i++){
         pontos = pontos + matriz_jogo['a'][i];
     }
     ganhador(pontos);


//verificar 

 }







 }





});