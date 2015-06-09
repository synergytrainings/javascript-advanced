var shuffle = function(array) {
    for (var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
};
 
var isSorted = function(array, column, asc){
    for(var i=1; i<array.length; i++) {
        var el1 = asc ? array[i-1] : array[i],
            el2 = asc ? array[i] : array[i-1];
        if (el1[column] > el2[column]) { 
            return false; 
        }
    }
    return true;
}

function bogosort (array, column, asc) {
    var sorted = false;
    while(sorted == false){
        array = shuffle(array);
        sorted = isSorted(array, column, asc);
    }
    postMessage({model: array, column: column, asc: asc});
}

onmessage = function(e) {
    bogosort(e.data.model, e.data.column, e.data.asc);
};