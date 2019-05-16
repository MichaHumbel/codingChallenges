const info = (...args) => console.log('\x1b[36m%s\x1b[0m', ...args);
const debug = (...args) => console.log('\x1b[35m%s\x1b[0m', ...args);

module.exports = {
    info,
    debug
}