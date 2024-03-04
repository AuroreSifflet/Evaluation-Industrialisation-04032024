
/**
 * Fonction anonyme returnAnObject()
 * 
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
  if (arrayOfNumbers.constructor.prototype === new Array().constructor.prototype) {
    response = arrayOfNumbers.map((val => val * 2));
    console.log('arrayTimesTwo: ', arrayTimesTwo);
    console.log('response: ', response);
  } else {
    response = 'The argument is not an Array of numbers';
  };
  return response;
};