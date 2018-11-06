const asyncWrap = fn => (...args) => fn(...args).catch(args[2]);
module.exports = asyncWrap;