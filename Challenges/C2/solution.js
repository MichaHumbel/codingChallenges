const logger = require('../../logger');

logger.info('Codechallenge 2 ---- Start');

// Your code goes here:
const array = [
  [10, 15, 30],
  [12, 15, 20],
  [17, 20, 32]
];
const sorted = [].concat.apply([], array).sort((a, b) => a - b);
logger.info('Array', sorted);