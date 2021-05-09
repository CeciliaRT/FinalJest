//Test Array3YRegresaMayor
var Separar3 = require('../src/SepararArray');

test('Separar3 function exists', () => {
    expect(typeof Separar3).toEqual('function');
  });


  test('Array no son números', () => {
    var result = Separar3(['z','F','Q']);
  expect(result).toEqual('Not numbers'); 
});

test('Array esta ordenado?', () => {
  var result = Separar3([9,3,1]);
  console.log(result)
expect(result).toEqual([9,3,1]); 
});
