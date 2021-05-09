//Test factorial
const factorial = require('../src/factorial');

test('Validar que existe la funcion factorial', () => {
    expect(typeof factorial).toEqual('function');
  });

test('Factorial de 7', () => {
    var fac = factorial(7);
    expect(fac).toEqual(5040); 
  });

  test('Factorial de 0', () => {
    var fac = factorial(0);
    expect(fac).toEqual(1); 
  });

  test('Factorial de 2', () => {
    var fac = factorial(2);
    expect(fac).toEqual(2); 
  });

  test('Factorial no es numero', () => {
      var fac = factorial('x');
    expect(fac).toEqual('Not numbers'); 
  });
