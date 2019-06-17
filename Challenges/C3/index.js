const logger = require('../../logger');

logger.info('Codechallenge 3 ---- Start');

// Your code goes here:
const numbArray = [10, 15, 3, 7];
const number = 17;

const calc = (numbArray, total) => {
  const summs = [];
  numbArray.forEach((number, index) => {
    numbArray.forEach((number2, index2) => {
      if (index === index2) return null;
      summs.push(number + number2);
    });
  });
  return summs.indexOf(total) > -1;
}


logger.info('Start', calc(numbArray, number));