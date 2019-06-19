const logger = require('../../logger');

logger.info('Codechallenge 14 ---- Start');

const set = [1, 2, 3];
const generatePowerSet = (arr) => {
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
  return fn([], arr, [
    []
  ]);
}

logger.info('test', generatePowerSet(set))