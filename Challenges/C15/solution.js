const logger = require('../../logger');

logger.info('Codechallenge 15 ---- Start');

const numbArray = [6, 1, 3, 3, 3, 6, 6];
const numbArray2 = [13, 19, 13, 13];

const findSingle = (arr) => {
  const fullArray = [...arr];
  let single = null;
  while (arr.length > 0 && !single) {
    const firstElement = arr.shift();
    if (fullArray.filter(numb => numb === firstElement).length === 1) single = firstElement;
  }
  return single;
}

logger.info('Singlenumber is: ', findSingle(numbArray));
logger.info('Singlenumber is: ', findSingle(numbArray2));