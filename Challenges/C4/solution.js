const logger = require('../../logger');

logger.info('Codechallenge 4 ---- Start');

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 2, 1];

const multiply = (array) => {
  const multiplied = [];
  array.forEach(elm => {
    const newArray = array.filter(number => number != elm);
    multiplied.push(newArray.reduce((a, b) => a * b))
  })
  return multiplied;
}

logger.info('Start', multiply(array1));
logger.info('Start', multiply(array2));