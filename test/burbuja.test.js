//Test burbuja
var bubbleSort = require('../src/burbuja');

test('Validar que existe la funcion bubbleSort', () => {
    expect(typeof bubbleSort).toEqual('function');
  });

test('Ordernar 3 numeros', () => {
    expect(bubbleSort([9,8,3])).toEqual([3,8,9]); 
  });

  test('Ordernar no son numeros', () => {
      var result = bubbleSort(['z','F','Q'])
    expect(result).toEqual('Not numbers'); 
  });

