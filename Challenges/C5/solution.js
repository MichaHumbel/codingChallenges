const logger = require('../../logger');

logger.info('Codechallenge 5 ---- Start');

// Test array
const array = [3, 4, -1, 5];

const getFirstNumber = (arr) => {
  // removes duplicates
  const set = [...new Set(arr)];

  // removes negatives
  const removeNegative = set.filter(elm => elm > 0);

  // sort from lowest to highest
  const sorted = removeNegative.sort((a, b) => a - b);

  const lowest = sorted.map((numb, index) => {
    if (index + 1 === sorted.length) {
      return numb + 1;
    } else if (sorted[index + 1] - numb > 1) {
      return numb + 1;
    } else if (numb > 1) {
      return 1;
    }
  });
  return lowest.filter(elm => elm)[0];
}



// solution can be improved

logger.info('First missing number is:', getFirstNumber(array));