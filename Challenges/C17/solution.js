const logger = require('../../logger');

logger.info('Codechallenge 17 ---- Start');

let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const itemsToAdd = ['11', '12', '13'];

itemsToAdd.forEach(elm => {
  const randomIndex = Math.floor(Math.random() * array.length);
  array.splice(randomIndex, 0, elm);
});

logger.info('array', array);