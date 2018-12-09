"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeResultsToMongo = writeResultsToMongo;
exports.getMostRecentETHData = getMostRecentETHData;
exports.removeCollectionFromMongo = removeCollectionFromMongo;

var _mongodb = require("mongodb");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* getMostRecentETHData()
 * desc: Reads ETH data from MongoDB
 * return: json block of data for ETH daily transaction activity
 */
function getMostRecentETHData(_x) {
  return _getMostRecentETHData.apply(this, arguments);
}
/* writeResultsToMongo()
 * desc: Writes results from the google BigQuery into MongoDB on the cloud
 * param: dataToWrite - the json block to write to MongoDB.
 *
 */


function _getMostRecentETHData() {
  _getMostRecentETHData = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(url) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(resolve, reject) {
                var client, db, results;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(url === undefined || url === "")) {
                          _context.next = 6;
                          break;
                        }

                        console.log("MongoDB url not set in the environment.");
                        console.log("Try running source SetMongoEnv.sh prior to running this.");
                        reject(new Error("MongoDB url not set in the environment."));
                        _context.next = 18;
                        break;

                      case 6:
                        _context.prev = 6;
                        _context.next = 9;
                        return _mongodb.MongoClient.connect(url, {
                          useNewUrlParser: true
                        });

                      case 9:
                        client = _context.sent;
                        db = client.db("ethereum");
                        _context.next = 13;
                        return db.collection("eth_transactions").find({}).toArray();

                      case 13:
                        results = _context.sent;
                        resolve(results);

                      case 15:
                        _context.prev = 15;
                        client.close();
                        return _context.finish(15);

                      case 18:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this, [[6,, 15, 18]]);
              }));

              return function (_x7, _x8) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getMostRecentETHData.apply(this, arguments);
}

function writeResultsToMongo(_x2, _x3, _x4) {
  return _writeResultsToMongo.apply(this, arguments);
}
/* writeResultsToMongo()
 * desc: Writes results from the google BigQuery into MongoDB on the cloud
 * param: dataToWrite - the json block to write to MongoDB.
 *
 */


function _writeResultsToMongo() {
  _writeResultsToMongo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(dataToWrite, targetDB, targetCollection) {
    var url, client, db;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = process.env.URLCrypto;

            if (!(url == undefined || url === "")) {
              _context3.next = 6;
              break;
            }

            console.log("MongoDB url not set in the environment.");
            console.log("Try running source SetMongoEnv.sh prior to running this.");
            _context3.next = 23;
            break;

          case 6:
            _context3.prev = 6;
            console.log("Connect to MongoDB");
            _context3.next = 10;
            return _mongodb.MongoClient.connect(url, {
              useNewUrlParser: true
            });

          case 10:
            client = _context3.sent;
            db = client.db(targetDB);
            console.log("Writing results to", targetCollection);
            _context3.next = 15;
            return db.collection(targetCollection).insertOne(dataToWrite);

          case 15:
            _context3.next = 20;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](6);
            console.log("Error writing to DB:", _context3.t0);

          case 20:
            _context3.prev = 20;
            client.close();
            return _context3.finish(20);

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[6, 17, 20, 23]]);
  }));
  return _writeResultsToMongo.apply(this, arguments);
}

function removeCollectionFromMongo(_x5, _x6) {
  return _removeCollectionFromMongo.apply(this, arguments);
}

function _removeCollectionFromMongo() {
  _removeCollectionFromMongo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(targetDB, targetCollection) {
    var url, client, db;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = process.env.URLCrypto;

            if (!(url == undefined || url === "")) {
              _context4.next = 6;
              break;
            }

            console.log("MongoDB url not set in the environment.");
            console.log("Try running source SetMongoEnv.sh prior to running this.");
            _context4.next = 23;
            break;

          case 6:
            _context4.prev = 6;
            console.log("Connect to MongoDB");
            _context4.next = 10;
            return _mongodb.MongoClient.connect(url, {
              useNewUrlParser: true
            });

          case 10:
            client = _context4.sent;
            db = client.db(targetDB);
            console.log("Deleting prior data in", targetCollection);
            _context4.next = 15;
            return db.collection(targetCollection).remove();

          case 15:
            _context4.next = 20;
            break;

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](6);
            console.log("Error writing to DB:", _context4.t0);

          case 20:
            _context4.prev = 20;
            client.close();
            return _context4.finish(20);

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[6, 17, 20, 23]]);
  }));
  return _removeCollectionFromMongo.apply(this, arguments);
}
//# sourceMappingURL=dbUtils.js.map