//Test ContarVocales
const contarVocales = require('../src/ContarVocales');

test('Validar que existe la funcion ContarVocales', () => {
    expect(typeof contarVocales).toEqual('function');
  });
 
test('Validar regresa vocales= 3, 4 contantes para la palabra Algunos', () => {
    var palabra = contarVocales('Algunos');
    expect(palabra).toEqual([3, 4]); 
  });

  test('Validar regresa vocales= 0, 4 contantes para la palabra lgns', () => {
    var palabra = contarVocales('lgns');
    expect(palabra).toEqual([0, 4]); 
  });

  test('Validar regresa vocales= 5, 6 contantes para la palabra Rapidamente', () => {
    var palabra = contarVocales('Rapidamente');
    expect(palabra).toEqual([5, 6]); 
  });