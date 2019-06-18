const logger = require('../../logger');

logger.info('Codechallenge 14 ---- Start');

const set = [1, 2, 3, 4];

const generatePowerSet = (set) => {
  // make a copy of set & delete the reference to set
  const fullSet = [...set];
  // powerSet is an array with an empty array inside
  const powerSet = [
    [],
  ];

  // push each item in the powerSet Array;
  let i = 0;
  while (fullSet.length > 0) {
    powerSet.push([fullSet[i]]);
    const firstElement = fullSet.shift();
    fullSet.forEach(elm => {
      powerSet.push([firstElement, elm]);
    })
  }

  // add the full set to the powerset
  powerSet.push(set);

  return powerSet
}

logger.info('Start', generatePowerSet(set));