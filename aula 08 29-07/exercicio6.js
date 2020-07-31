var a = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];

function lerArray(array){
    for(var i = 0; i < array.length; i++){
        if(a[i] > 7.0){
            console.log(a[i]);
        }
    }
}

lerArray(a);