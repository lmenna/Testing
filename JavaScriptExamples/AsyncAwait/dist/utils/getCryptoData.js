"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExchangeData = getExchangeData;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getExchangeData(_url) {
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(resolve, reject) {
      var xmlhttp, method, url;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              xmlhttp = new XMLHttpRequest(), method = "GET", url = _url;
              xmlhttp.open(method, url, true);

              xmlhttp.onerror = function () {
                console.log("** An error occurred retrieving data from ".concat(url));
                reject(new Error("** An error occurred retrieving data from ".concat(url)));
                return;
              };

              xmlhttp.onreadystatechange = function () {
                // console.log(`Ready state: ${this.readyState}`);
                // console.log(`Status: ${this.status}`);
                // console.log(`Response text: ${xmlhttp.responseText}`);
                if (this.status === 404) {
                  console.log("Error 404 querying ".concat(url));
                  reject(xmlhttp.responseText);
                } else if (this.readyState === 4 && this.status === 200) {
                  var exchangeData = xmlhttp.responseText;
                  var timeStamp = new Date();
                  var returnObj = {
                    timeStamp: timeStamp,
                    exchangeData: exchangeData
                  };
                  console.log("Resolving promise getExchangeData for ".concat(url));
                  resolve(returnObj);
                }
              };

              xmlhttp.send();

            case 5:
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
}
//# sourceMappingURL=getCryptoData.js.map