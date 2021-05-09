//Test InvertirArray
const invertirArray = require('../src/invertirArray');

test('Validar que existe la funcion invertirArray', () => {
    expect(typeof invertirArray).toEqual('function');
  });

test('Invertir arreglo de 5 elementos', () => {
    var inv = invertirArray([7,9,4,3,5]);
    expect(inv).toEqual([5,3,4,9,7]); 
  });
  test('Validar que el elemento en la primera posicion es a', () => {
    var inv = invertirArray([7,9,'k',3,'a']);
    expect(inv[0]).toEqual('a'); 
  });

  test('Validar que el último elemento del array no es a', () => {
    var inv = invertirArray([7,9,'k',3,'a']);
    expect(inv[5]).not.toEqual('a'); 
  });