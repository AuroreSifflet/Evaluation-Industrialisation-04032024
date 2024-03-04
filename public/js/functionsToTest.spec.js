const { functionsToTest } = require('./functionsToTest.js');
const returnAnObject = functionsToTest.returnAnObject;
const multiplyAllByTwo = functionsToTest.multiplyAllByTwo;
describe('Test de returnAnObject: ', () => {
  test('Renvoi un objet {"0": "hello", "1": "bienvenue"} si "hello" et "bienvenue" sont fournis', () => {
    expect(returnAnObject('hello', 'bienvenue')).toStrictEqual({
      0: 'hello',
      1: 'bienvenue',
    });
  });
  test("Renvoi {0: No argument was given to the function.} si pas d'argument n'est fourni", () => {
    expect(returnAnObject()).toStrictEqual(
      'No argument was given to the function.'
    );
  });
});

describe('Test de returnAnObject: ', () => {
  test('Renvoi un tableau [2, 4, 6] si [1, 2, 3] sont fournis', () => {
    expect(multiplyAllByTwo([1, 2, 3])).toStrictEqual([2, 4, 6]);
  });
  test('Renvoi un tableau [NaN] si [\'uh\'] sont fournis', () => {
    expect(multiplyAllByTwo(['uh'])).toStrictEqual([NaN]);
  });
  test('Renvoi une chaîne de caractère \'The argument is not an Array of numbers\' si 4 sont fournis', () => {
    expect(multiplyAllByTwo(4)).toStrictEqual('The argument is not an Array of numbers');
  });
});
