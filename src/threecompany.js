//threecompany
function threecompany(cadena){
    var n= cadena.length;
    var output= '';

    for(var i=0; i<n; i++){
        var letra = cadena.charAt(i);//separa letra por letra
        output = output + letra + letra + letra
    }

    return output;
};
module.exports = threecompany;
/*
console.log(threecompany('ty'));
console.log(threecompany('5567'));
console.log(threecompany('casa'));
*/
