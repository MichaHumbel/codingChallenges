const logger = require('../../logger');

logger.info('Codechallenge 16 ---- Start');

const numbers = [12, 1, 61, 5, 9, 2];
const desired = 24;
const generatePowerSet = (arr) => {
  // generate all possible combinations
  const fn = (active, rest, a) => {
    if (active.length === 0 && rest.length === 0)
      return;
    if (rest.length === 0) {
      a.push(active);
    } else {
      fn([...active, rest[0]], rest.slice(1, rest.length), a);
      fn(active, rest.slice(1, rest.length), a);
    }
    return a;
  }
  return fn([], arr, []);
}

const subArray = (arr, desired) => {
  const powerSet = generatePowerSet(arr);
  const sums = powerSet.map(set => set.reduce((pv, cv) => pv + cv, 0));
  if (sums.indexOf(desired) > -1) {
    return powerSet[sums.indexOf(desired)];
  }
  return null;
}

logger.info('Start', subArray(numbers, desired));