"use strict";

var _dbUtils = require("./utils/dbUtils");

var _timers = require("./utils/timers");

var _getCryptoData = require("./utils/getCryptoData");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("@babel/polyfill");

var poloniexURL = "https://poloniex.com/public?command=returnTicker";
var coinbaseURL = "https://api.pro.coinbase.com/products";
var bittrexURLAll = "https://bittrex.com/api/v1.1/public/getmarketsummaries";
var hitbtcURL = "https://api.hitbtc.com/api/2/public/ticker";
var yobitBaseURL = "https://yobit.net/api/3/ticker/";

var runAsyncTest01 =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var url, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Case 1: Set DB url to a valid value. Data should be returned without error.
            console.log("\n--->> Case 1: Set DB url to a valid value. Data should be returned without error.");
            console.log("--->> This is the case where data should be returned normally.");
            url = process.env.URLEth;

            if (!(url === undefined || url === "")) {
              _context.next = 6;
              break;
            }

            console.log("Couldn't find the MongoDB url.  Try sourcing SetMongoEnv.sh prior to running.");
            return _context.abrupt("return", new Error("MongoDB environment not found."));

          case 6:
            _context.prev = 6;
            _context.next = 9;
            return (0, _dbUtils.getMostRecentETHData)(url);

          case 9:
            result = _context.sent;
            console.log("Result:", result);
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](6);
            console.log("err:", _context.t0);
            return _context.abrupt("return", new Error("Error in runAsyncTest01"));

          case 17:
            console.log("End: Case 1.");

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[6, 13]]);
  }));

  return function runAsyncTest01() {
    return _ref.apply(this, arguments);
  };
}();

var runAsyncTest02 =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var url, retPromise, retValue;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Case 2: Try to get data with DB URL not set.
            console.log("\n--->> Case 2: Try to get data with DB URL not set.");
            console.log("--->> This case should fail with the promise rejected and exception caught.");
            url = "";
            _context2.prev = 3;
            retPromise = (0, _dbUtils.getMostRecentETHData)(url);
            console.log("retPromise:", retPromise);
            _context2.next = 8;
            return retPromise;

          case 8:
            retValue = _context2.sent;
            // var retValue = await getMostRecentETHData();
            console.log("retValue:", retValue);
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            console.log("err:", _context2.t0);
            return _context2.abrupt("return", new Error("Error in runAsyncTest02"));

          case 16:
            console.log("End: Case 2.");

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[3, 12]]);
  }));

  return function runAsyncTest02() {
    return _ref2.apply(this, arguments);
  };
}();
/* runTimerAsync01
 * desc: Uses setTimeout to produce a delay to test async await code.  Returns success.
 */


var runTimerAsync01 =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _timers.timeoutResolveSuccess)(1500, "Result01");

          case 2:
            result = _context3.sent;
            console.log("result:", result);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function runTimerAsync01() {
    return _ref3.apply(this, arguments);
  };
}();
/* runTimerAsync02
 * desc: Test a async failure.  Uses setTimeout to produce a delay to test async await code.  Returns failure.
 */


var runTimerAsync02 =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _timers.timeoutRejectError)(1000, "Result02");

          case 3:
            result = _context4.sent;
            console.log("result:", result);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log("Error in runTimerAsync02:", _context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 7]]);
  }));

  return function runTimerAsync02() {
    return _ref4.apply(this, arguments);
  };
}();
/* runDoSlowMath
 * desc: Performs arithmetic (a + b) where 'a' and 'b' take a long time to compute.
  *      Uses setTimeout to simulate long running requests.
 */


var runSlowMath =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _timers.slowAddition)();

          case 3:
            result = _context5.sent;
            console.log("slowAddition result:", result);
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log("Error in runSlowMath:", _context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 7]]);
  }));

  return function runSlowMath() {
    return _ref5.apply(this, arguments);
  };
}();
/* runMarketDataTest()
 * desc: Queries various exchanges for market data.  First it does this sequentially using
 *       await on each request.  Next it does this in parallel awaiting on all request simultaneously
 */


var runMarketDataTest =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var startAwait, polo, poloTime, cb, cbTime, bt, btTime, hb, hbTime, endAwait, startAwaitAll, polo2, cb2, bt2, hb2, endAwaitAll;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log("Begin: runMarketDataTest");
            startAwait = Date.now();
            _context6.prev = 2;
            _context6.next = 5;
            return (0, _getCryptoData.getExchangeData)(poloniexURL);

          case 5:
            polo = _context6.sent;
            poloTime = Date.now();
            _context6.next = 9;
            return (0, _getCryptoData.getExchangeData)(coinbaseURL);

          case 9:
            cb = _context6.sent;
            cbTime = Date.now();
            _context6.next = 13;
            return (0, _getCryptoData.getExchangeData)(bittrexURLAll);

          case 13:
            bt = _context6.sent;
            btTime = Date.now();
            _context6.next = 17;
            return (0, _getCryptoData.getExchangeData)(hitbtcURL);

          case 17:
            hb = _context6.sent;
            hbTime = Date.now();
            console.log("Polo: ".concat(poloTime - startAwait, "  CB: ").concat(cbTime - poloTime, "  BT: ").concat(btTime - cbTime, "  HB: ").concat(hbTime - btTime));
            console.log("Time for awaiting each exchange seperately: ".concat(hbTime - startAwait));
            _context6.next = 26;
            break;

          case 23:
            _context6.prev = 23;
            _context6.t0 = _context6["catch"](2);
            console.log("Error getting data sequentially: ".concat(_context6.t0));

          case 26:
            endAwait = Date.now();
            startAwaitAll = Date.now();
            console.log("Get all exchange data simultaneously.");
            _context6.prev = 29;
            polo2 = (0, _getCryptoData.getExchangeData)(poloniexURL);
            cb2 = (0, _getCryptoData.getExchangeData)(coinbaseURL);
            bt2 = (0, _getCryptoData.getExchangeData)(bittrexURLAll);
            hb2 = (0, _getCryptoData.getExchangeData)(hitbtcURL);
            _context6.next = 36;
            return Promise.all([polo2, cb2, bt2, hb2]);

          case 36:
            _context6.next = 41;
            break;

          case 38:
            _context6.prev = 38;
            _context6.t1 = _context6["catch"](29);
            console.log("Error getting data simultaneously: ".concat(_context6.t1));

          case 41:
            endAwaitAll = Date.now();
            console.log("Time for awaiting all exchanges together: ".concat(endAwaitAll - startAwaitAll));
            console.log("End: runMarketDataTest");

          case 44:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this, [[2, 23], [29, 38]]);
  }));

  return function runMarketDataTest() {
    return _ref6.apply(this, arguments);
  };
}(); //runAsyncTest01();
//runAsyncTest02();
// runTimerAsync01();
// runTimerAsync02();
// runSlowMath();


setInterval(runMarketDataTest, 10000);
//# sourceMappingURL=app.js.map