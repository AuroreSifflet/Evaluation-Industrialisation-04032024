/**
 * Fonction anonyme returnAnObject()
 *  si args n'ont pas été donnés, un message est retourné
 * @param {*} args
 * @return {Object | string} Un objet est retourné avec comme propriété un nombre et comme valeur un arg
 * cependant si args n'ont pas été donnés, un message est retourné
 */
const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach(arg => {
      response[index] = arg;
      index++;
    })
  } else {
    response = 'No argument was given to the function.';
  };
  return response;
};
returnAnObject('hello', 'bienvenue', 2, ['ami', 2, { firstName: 'Aurore', lastName: '' }])

/**
 * Fonction anonyme multiplyAllByTwo()
 * permet de mapper sur le tableau arrayOfNumbers qui est passé en argument
 * @param {Array<number>} arrayOfNumbers
 * @return {Array<number> | string} Un nouveau tableau de nombre response est retourné
 * avec chaque nombre du tableau arrayOfNumbers multiplié par deux
 * cependant si arrayOfNumbers fournit n'était pas un tableau, un message est retourné
 */
const multiplyAllByTwo = (arrayOfNumbers) => {
  let response;
  const createArray = [];
  console.log(arrayOfNumbers.constructor.prototype);
  if (arrayOfNumbers.constructor.prototype === createArray.constructor.prototype) {
    response = arrayOfNumbers.map((val) => {
      if (typeof val !== 'number') {
        return val;
      }
      return val * 2;
    });
  } else {
    response = 'The argument is not an Array of numbers';
  };

  console.log(response);
  return response;
};

console.log(multiplyAllByTwo(4));
console.log(multiplyAllByTwo(['uh']));
console.log(multiplyAllByTwo([1, 2, 3]));
