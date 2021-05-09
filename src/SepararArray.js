//Tarea 6 arreglo de numeros, dividirlos de 3 en 3 y imprimir el numero menor y mayor
//var numerosA=[21,45,-5,1,4,8,9,8,88]

//funcion para saber si el arreglo es de números
function isNumero(n){
    return (typeof n =='number')    
}

//funcion separar un array
function Separar3 (numerosA) {
    var index = numerosA.length;
    var t=0;
if((numerosA.every(isNumero))==false)
    {
        return 'Not numbers';
    }else{
    //console.log (t, index/3)
    console.log('Original:' ,numerosA);
    for(var i=0; i<index/3; i++)
    {
            var primA= numerosA.slice(t, t+3);
            console.log(primA);
           // return 'min', lookupMin(primA), 'Max:' ,lookupMax(primA);
         console.log('Min:' ,lookupMin(primA));
           console.log('Max:' ,lookupMax(primA));
            t= t+3;
        }
    } 
    return numerosA;
    };



const lookupMin = (a)=>{
    return Math.min(...a)
};

const lookupMax = (a)=>{
    return Math.max(...a)
};


module.exports = Separar3;
//console.log(Separar3([1,5,6,9,3]))
//console.log(Separar3(['a','5','6','9','3']))