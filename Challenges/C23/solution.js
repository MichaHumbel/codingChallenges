const logger = require('../../logger');

logger.info('Codechallenge #Number ---- Start');

// Your code goes here:

const array = [4, 6, 9, 10];
const countMissingNumbers = (arr) => {
  // Math.max(...arr) - Math.min(...arr) + 1 ---> find how many numbers would be in the array if there weren’t missing numbers
  // The difference between the result of this and the array length will give us the count of missing numbers
  return Math.max(...arr) - Math.min(...arr) + 1 - arr.length;
}

logger.info('Start', countMissingNumbers(array));