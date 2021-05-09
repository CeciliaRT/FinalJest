//Test threecompany
const threecompany = require('../src/threecompany');

test('Validar que existe la funcion threecompany', () => {
    expect(typeof threecompany).toEqual('function');
  });
 
test('Validar que para ty regresa tttyyy', () => {
    var palabra = threecompany('ty');
    expect(palabra).toEqual('tttyyy'); 
  });

  test('Validar que para 5567 regresa 555555666777', () => {
    var palabra = threecompany('5567');
    expect(palabra).toEqual('555555666777'); 
  });