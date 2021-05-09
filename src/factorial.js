//FACTORIAL
//función para saber si se envia un numero
function isNumero(n){
    return (typeof n =='number')    
}

//funcion para calcular el factorial
//dato = 7; // Número del que queremos calcular el factorial

function factorial(dato){
let r = 1;
if((isNumero(dato))==false)
    {
        return 'Not numbers';
    }else{
for(let i = dato; i>0; i--){
    r *= i;
}
return(r);
}};
module.exports = factorial;
//console.log(factorial(7));
//console.log(factorial('o'));