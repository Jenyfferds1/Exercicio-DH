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
 
 contagemRegressiva.then(function(res){ console.log(res)})
                   .then(function(){ return felizAnoNovo})
                   .then(function(res) { console.log(res)});