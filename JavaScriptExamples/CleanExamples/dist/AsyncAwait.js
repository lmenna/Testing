"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myPromiseError = exports.myPromiseInParallel = exports.myPromiseStillBlocking = exports.codeNonBlocker = exports.codeBlocker = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* myPromiseStillBlocking
 * desc: This function shows a valid usage of using a promise to run a task and return
 *       the result later by resolving the promise. result = await myPromiseStillBlocking works fine.
 *       But there is a problem.  If myPromiseStillBlocking is called multiple time and a await Promise.all
 *       is each call will still run sequentially.
 */
var myPromiseStillBlocking = function myPromiseStillBlocking(msg) {
  return new Promise(function (resolve, reject) {
    //do something, fetch something....
    //you guessed it, mongo queries go here.
    console.log("Begin long query... ".concat(msg));
    variableBlockingCode(10000000) //I can continue to process my result inside my promise
    .then(function (result) {
      console.log("In .then");
      resolve(result);
      return result;
    });
  });
};
/* myPromiseInParallel
 * desc: Same as the blocking version above, but this version can be run in parallel using await Promise.all
 */


exports.myPromiseStillBlocking = myPromiseStillBlocking;

var myPromiseInParallel = function myPromiseInParallel(msg) {
  return Promise.resolve().then(function (msg) {
    //do something, fetch something....
    //you guessed it, mongo queries go here.
    console.log("Begin long query... ".concat(msg));
    variableBlockingCode(10000000) //I can continue to process my result inside my promise
    .then(function (result) {
      console.log("In .then");
      return result;
    });
  });
};

exports.myPromiseInParallel = myPromiseInParallel;

var myPromiseError = function myPromiseError(msg) {
  return new Promise(function (resolve, reject) {
    //do something, fetch something....
    //you guessed it, mongo queries go here.
    console.log("Begin long query... ".concat(msg));
    variableBlockingCode(1000000) //I can continue to process my result inside my promise
    .then(function (result) {
      console.log("In .then");
      reject("Something Bad!");
      return result;
    });
  });
};

exports.myPromiseError = myPromiseError;

var codeBlocker = function codeBlocker(msg) {
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return variableBlockingCode(5000000);

            case 2:
              resolve(msg);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports.codeBlocker = codeBlocker;

var codeNonBlocker = function codeNonBlocker(msg) {
  return Promise.resolve().then(
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(v) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return variableBlockingCode(5000000);

            case 2:
              return _context2.abrupt("return", msg);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }());
};

exports.codeNonBlocker = codeNonBlocker;

var variableBlockingCode = function variableBlockingCode(maxCount) {
  return new Promise(function (resolve, reject) {
    var x = 0;

    while (x < maxCount) {
      x += Math.random();
    }

    resolve(maxCount);
  });
};
//# sourceMappingURL=AsyncAwait.js.map