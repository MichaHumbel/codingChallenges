const logger = require('../../logger');

logger.info('Codechallenge 13 ---- Start');

const arr = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];

const sortString = (arr) => {
  var tmp;

  arr.forEach((elm, i) => {
    arr.forEach((elm2, j) => {
      // swap items
      if (elm > elm2) {
        tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    })
  });

  return arr;
}

logger.info('Start', sortString(arr));