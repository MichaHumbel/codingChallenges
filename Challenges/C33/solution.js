// Thanks to: https://medium.freecodecamp.org/how-to-find-the-index-where-a-number-belongs-in-an-array-in-javascript-9af8453a39a8

const logger = require('../../logger');

logger.info('Solution 33 ---- Start');

const solution1 = (arr, num) => {
  // Insert num into arr, creating a new array.
  let newArray = arr.concat(num)
  //             [40, 60].concat(50)
  //             [40, 60, 50]

  // Sort the new array from least to greatest.
  newArray.sort((a, b) => a - b)
  // [40, 60, 50].sort((a, b) => a - b)
  // [40, 50, 60]

  // Return the index of num which is now
  // in the correct place in the new array.
  return newArray.indexOf(num);
  // return [40, 50, 60].indexOf(50)
  // 1
}

logger.info('Index is:', solution1([40, 60], 50));

const solution2 = (arr, num) => {
  // solution 1 as single line
  return arr.concat(num).sort((a, b) => a - b).indexOf(num);
}

logger.info('Index is:', solution2([40, 60], 50));


const solution3 = (arr, num) => {
  // Sort arr from least to greatest.
  let sortedArray = arr.sort((a, b) => a - b)
  //                  [40, 60].sort((a, b) => a - b)
  //                  [40, 60]

  // Compare num to each number in sortedArray
  // and find the index where num is less than or equal to
  // a number in sortedArray.
  let index = sortedArray.findIndex((currentNum) => num <= currentNum)
  //            [40, 60].findIndex(40 => 50 <= 40) --> falsy
  //            [40, 60].findIndex(60 => 50 <= 60) --> truthy
  //            returns 1 because num would fit like so [40, 50, 60]

  // Return the correct index of num.
  // If num belongs at the end of sortedArray or if arr is empty
  // return the length of arr.
  return index === -1 ? arr.length : index
}

logger.info('Index is:', solution3([40, 60], 50));

const solution4 = (arr, num) => {
  // solution 3 without comments and local variables
  let index = arr.sort((a, b) => a - b).findIndex((currentNum) => num <= currentNum)
  return index === -1 ? arr.length : index
}

logger.info('Index is:', solution4([40, 60], 50));