const logger = require('../../logger');

// logger.info('Codechallenge #1 ---- Start');

const countDecoding = (msg, n) => {
  if (n == 0 || n == 1) return 1;

  let count = 0;

  if (msg[n - 1] > '0') count = countDecoding(msg, n - 1);

  if (msg[n - 2] == '1' || (msg[n - 2] == '2' && msg[n - 1] < '7'))
    count += countDecoding(msg, n - 2);

  return count;
};

const msg = '71238214';
const n = msg.length;

logger.info(
  'Encoded Message: ',
  msg,
  'Decodable in ',
  countDecoding(msg, n),
  ' ways.'
);