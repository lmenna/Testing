"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aBigOne = aBigOne;
exports.addOne = addOne;
exports.aBigOneBN = aBigOneBN;
exports.addOneBN = addOneBN;

var _bignumber = require("bignumber.js");

var _bn = _interopRequireDefault(require("bn.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function aBigOne() {
  return new _bignumber.BigNumber(100000000000000000000000000000000000000000000000000000);
}

function aBigOneBN() {
  return new _bn.default("100000000000000000000000000000000000000000000000000000", 10);
}

function addOneBN(aBN) {
  return aBN.add(new _bn.default("1", 10));
}

function addOne(aNum) {
  return aNum.plus(new _bignumber.BigNumber(1));
}
//# sourceMappingURL=BigNumbers.js.map