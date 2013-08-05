var deep = require('deep-access');

exports = module.exports = create(1);
exports.asc = exports;
exports.desc = create(-1);

function create (inv) {
  return function compare (prop) {
    return function (_a, _b) {
      var a = prop? deep(_a, prop) : _a;
      var b = prop? deep(_b, prop) : _b;
      return inv * (
          a < b? -1
        : a > b? 1
        : 0);
    }
  }
}

