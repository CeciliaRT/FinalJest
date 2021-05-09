//Test Palindorme
const palindrome = require('../src/Palindromo');

test('Validar que existe la funcion Palindrome', () => {
    expect(typeof palindrome).toEqual('function');
  });
 
test('Validar que identifica Rotor como Palindrome', () => {
    var pal = palindrome('Rotor');
    expect(pal).toEqual(['Rotor', 'Es palindrome']); 
  });
  
  test('Validar que Casa no es Palindrome', () => {
    var pal = palindrome('Casa');
    expect(pal).toEqual(['Casa', 'No Es palindrome']); 
  });
