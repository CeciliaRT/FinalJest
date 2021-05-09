const { isNumber } = require("lodash");
const { type } = require("os");

function isNumero(n){
    return (typeof n =='number')    
}

function bubbleSort(items){
    const elementos = items.length

if((items.every(isNumero))==false)
{
    return 'Not numbers';
}else{
    for(var i = (elementos-1); i>0; i--)
    {
        for(var j = (elementos-i); j>0; j--)
        {
            if(items[j] < items [j-1])
            {
                [items[j],items[j-1]]= [items [j -1],items[j]]
            }

        }
    }
    return 'else', items
} 
}

module.exports = bubbleSort;
//var array = [8,9,3,5,1];
//console.log(array.every(isNumero))
//console.log(bubbleSort(array))
//var array2 = ['a','c','l'];
//console.log(array2.every(isNumero))
//console.log(bubbleSort(array2))
