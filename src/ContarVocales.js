//Tarea contar las vocales refactorizada con Funciones Flecha

const contarVocales=(cadena) => {
    var n = cadena.length;
    var vocales = ["a","e","i","o","u"]; 
    var countVocal=0;
    var countConst=0;
    for(var i=0; i<n ; i++){
        if (vocales.indexOf(cadena.charAt(i).toLowerCase()) >= 0)
            countVocal++;
        else
            countConst++;
    }
    return [countVocal,countConst++];
}
module.exports = contarVocales;
console.log('Vocales y Consonantes ' + contarVocales('Algunos'))
console.log('Vocales y Consonantes ' + contarVocales('Rapidamente'))
console.log('Vocales y Consonantes ' + contarVocales('tres'))

