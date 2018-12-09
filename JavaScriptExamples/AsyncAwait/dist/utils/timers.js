"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeoutResolveSuccess = timeoutResolveSuccess;
exports.timeoutRejectError = timeoutRejectError;
exports.slowAddition = slowAddition;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* timers.js
 * desc: async, await and Promise examples using timers to simulate long running processes.
 *
 */
function myFunc(arg) {
  console.log("arg was => ".concat(arg));
}

function timeoutResolveSuccess(_x, _x2) {
  return _timeoutResolveSuccess.apply(this, arguments);
}

function _timeoutResolveSuccess() {
  _timeoutResolveSuccess = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(delay, retVal) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var wait = setTimeout(function () {
                clearTimeout(wait);
                resolve(retVal);
              }, delay);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _timeoutResolveSuccess.apply(this, arguments);
}

function timeoutRejectError(_x3, _x4) {
  return _timeoutRejectError.apply(this, arguments);
}

function _timeoutRejectError() {
  _timeoutRejectError = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(delay, retError) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              var wait = setTimeout(function () {
                clearTimeout(wait);
                reject(retError);
              }, delay);
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _timeoutRejectError.apply(this, arguments);
}

function getSlowValue(_x5) {
  return _getSlowValue.apply(this, arguments);
}

function _getSlowValue() {
  _getSlowValue = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(val) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", timeoutResolveSuccess(1000 * Math.random() + 500, val));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _getSlowValue.apply(this, arguments);
}

function slowAddition() {
  return _slowAddition.apply(this, arguments);
}

function _slowAddition() {
  _slowAddition = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", new Promise(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4(resolve, reject) {
                var firstValue, secondValue;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return getSlowValue(2);

                      case 2:
                        firstValue = _context4.sent;
                        console.log("firstValue:", firstValue);
                        _context4.next = 6;
                        return getSlowValue(3);

                      case 6:
                        secondValue = _context4.sent;
                        console.log("secondValue:", secondValue);
                        resolve(firstValue + secondValue);

                      case 9:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));

              return function (_x6, _x7) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _slowAddition.apply(this, arguments);
}
//# sourceMappingURL=timers.js.map