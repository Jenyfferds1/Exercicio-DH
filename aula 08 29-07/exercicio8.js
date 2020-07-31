var alunos = [
    {nome: "Cedrico Diggory", serie: 9},
    {nome: "Dino Thomas", serie: 8},
    {nome: "Fred Weasley", serie: 9},
    {nome: "George Weasley", serie: 9},
    {nome: "Harry Potter", serie: 9},
    {nome: "Hermione Granger", serie: 9},
    {nome: "Luna Lovegood", serie: 8},
    {nome: "Neville Longbottom", serie: 8},
    {nome: "Ronald Weasley", serie: 9},
    {nome: "Simas Finneagan", serie: 8},
]

function disciplinaDeQuarta(array){
    for(var i = 0; i < array.length; i++){
        if(array[i].serie == 8){
            console.log("A disciplina da quarta-feira de " + array[i].nome + " é História");
        }else{
            console.log("A disciplina da quarta-feira de " + array[i].nome + " é Física");
        }
    }
}


disciplinaDeQuarta(alunos);