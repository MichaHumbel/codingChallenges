const logger = require('../../logger');

logger.info('Codechallenge 12 ---- Start');

const msg = 'AAAABBBCCDAA';
const msg2 = '4A3B2C1D2A';

const encode = (msg) => {
  if (/\d/.test(msg)) {
    // has numbers => decode
    const decoded = [];
    const splitUp = msg.match(/\d+[A-Z]/g);
    // splitUp = ['4A', '3B', '2C', '1D', '2A']
    splitUp.forEach(elm => {
      decoded.push(elm[1].repeat(elm[0]));
    })
    return decoded.join('');
  } else {
    // has no numbers => encode
    const encoded = [];
    const splitUp = msg.match(/(\w)\1*/g);
    // splitUp = ['AAAA', 'BBB', 'CC', 'D', 'AA']
    splitUp.forEach(elm => {
      encoded.push(elm.length.toString() + elm[0]);
    })
    return encoded.join('');
  }
}
logger.info('Start', encode(msg));
logger.info('Start', encode(msg2));