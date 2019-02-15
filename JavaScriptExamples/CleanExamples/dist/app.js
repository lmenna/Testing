/* app.js
 * desc: Used to launch various JavaScript examples.  Each function in this file will run code
 *       that shows how a specific JavaScript feature works.  Feel free to add more examples
 *       and to run only those examples that are interesting to you.
 */
"use strict";

var _Closure = require("./Closure");

var _BigNumbers = require("./BigNumbers");

var _ES6Features = require("./ES6Features");

var _lexicalScoping = require("./lexicalScoping");

var _setTimeout = require("./setTimeout");

var _classesAndThis = require("./classesAndThis");

var _Arrays = require("./Arrays");

var _babelClassGen = require("./babelClassGen");

var _AsyncAwait = require("./AsyncAwait.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

require("@babel/polyfill");

// Utility to log with a timestamp.
var start = Date.now();

var log = function log(msg) {
  console.log("     -->> ".concat(Date.now() - start, " ").concat(msg));
};
/* runClosureExample()
 * desc: A closure is a function with an internal state that perisists after the function
 *       is called.  This function is not a closure, but it runs the function which are.
 *       The closure functions are located in Closure.js  
 */


function runClosureExample() {
  console.log("\n--->> runClosureExample");
  var p = new _Closure.PersonClosure("Luigi");
  console.log("Person p:", p);
  console.log("Person p._name:", p._name);
  console.log("Person p.getName:", p.getName());
  console.log("Person p.functionIsVisibleOutside:", p.functionIsVisibleOutside());
  console.log("Person p.canYouSeeMe is undefined use p.nowICanSeeYou:", p.nowICanSeeYou());
}

function runClosureImplementingACounter() {
  console.log("\n--->> runClosureImplementingACounter - Another closure example.");
  console.log("Create one counter closure.");
  console.log("The counter closure has one variable in the PLSRD - Persistent Lexically Scoped Reference Data");
  console.log("This variable is internally called counter.");
  console.log("It can only be accesses using the functions returned by createCounters");

  var _createCounters = (0, _Closure.createCounters)(),
      _createCounters2 = _slicedToArray(_createCounters, 2),
      incrementCounter = _createCounters2[0],
      decrementCounter = _createCounters2[1];

  incrementCounter();
  incrementCounter();
  incrementCounter();
  decrementCounter();
  console.log("Create another counter closure.");
  console.log("It is expected that this new closure will have its own counter, starting back at 0.");

  var _createCounters3 = (0, _Closure.createCounters)();

  var _createCounters4 = _slicedToArray(_createCounters3, 2);

  incrementCounter = _createCounters4[0];
  decrementCounter = _createCounters4[1];
  incrementCounter();
  incrementCounter();
  incrementCounter();
  decrementCounter();
}
/* runBigNumberExample()
 * desc: 
 */


function runBigNumberExample() {
  console.log("\n--->> runBigNumberExample");
  console.log("BigNumber Example");
  var aNumber = (0, _BigNumbers.aBigOne)();
  outputBigNumber(aNumber);
  aNumber = (0, _BigNumbers.addOne)(aNumber);
  outputBigNumber(aNumber);
  var aBN = (0, _BigNumbers.aBigOneBN)();
  outputBN(aBN);
  aBN = (0, _BigNumbers.addOneBN)(aBN);
  outputBN(aBN);
}
/* outputBigNumber()
 * desc: 
 */


function outputBigNumber(aNumber) {
  console.log("BigNumber:", aNumber);
  console.log("BigNumber.toString():", aNumber.toString());
  console.log("BigNumber.toString(16):", aNumber.toString(16));
  console.log("BigNumber.valueOf():", aNumber.valueOf());
  console.log("BigNumber.toFormat(0):", aNumber.toFormat(0));
}

function outputBN(aNumber) {
  console.log("BN:", aNumber);
  console.log("BN.toString():", aNumber.toString());
}
/* runES6Features()
 * desc: 
 */


function runES6Features() {
  console.log("\n--->> runES6Features");
  console.log("ES6 Default parameters");
  console.log("Call multiply with no parameters:", (0, _ES6Features.defaultParametersMultiply)()); // Note: It is best to put undefined in for missing parameters

  console.log("Call multiply with first parameter:", (0, _ES6Features.defaultParametersMultiply)(3, undefined)); // For the next call the undefined for the missing first parameter is required

  console.log("Call multiply with second parameter:", (0, _ES6Features.defaultParametersMultiply)(undefined, 4));
  console.log("Call multiply with both parameters:", (0, _ES6Features.defaultParametersMultiply)(3, 4)); // Template literals allow variables to be embedded into strings.  Use `backquotes` to set these.

  console.log((0, _ES6Features.templateLiterals)()); // Multiline strings can now be defined.  Use `backquotes` to set these.

  console.log((0, _ES6Features.multiLineStrings)()); // For var we expect all inner scopes in the function to just apply
  // at the level of the function.  All inner declarations using var don't reallocate the variable.

  console.log((0, _ES6Features.scopeTestVar)()); // For let we expect the variables defined in the inner scopes to reallocate the variable.

  console.log((0, _ES6Features.scopeTestLet)()); // Try a simple person class

  var p = new _ES6Features.PersonClass("Luigi", "Norfolk St", 21);
  console.log("Class Person instance p:", p);
  var pn = new _ES6Features.PersonClass();
  console.log("Class Person instance, nothing set, pn:", pn);
  pn.setName("Named");
  console.log("     Set the name. pn:", pn);
  console.log("     Get the name. pn.getName:", pn.getName());
  console.log("     Get the name, accessing it directly. pn.name:", pn.name);
  pn.name = "I changed it directly. All members are public.";
  console.log("     Set the name, accessing it directly. pn.name:", pn.name); // Create and instance of Employee which is a PersonClass

  var e = new _ES6Features.Employee("Luigi", "Norfolk St", 21, "E-123456");
  console.log("Class Employee instance. e:", e); // Checkout new ES6 array functions

  var aNumberArray = [1, 2, 3, 4, 5];
  var result = (0, _ES6Features.forEachTest)(aNumberArray);
  console.log("Input Array:", aNumberArray);
  console.log("forEachTest result:", result);
  var resultAnonymous = (0, _ES6Features.forEachAnonymousTest)(aNumberArray);
  console.log("forEachAnonymousTest resultAnonymous:", resultAnonymous);
  console.log("Map across an array and double each element");
  console.log("Original array:", aNumberArray);
  console.log("Result from mapping that doubles each element:", (0, _ES6Features.mapArray01)(aNumberArray));
  console.log("Filter array selecting out odd numbers");
  console.log("Original array:", aNumberArray);
  console.log("Filtered array showing only odd numbers:", (0, _ES6Features.filterArray01)(aNumberArray));
  console.log("Object literals (name value pairs) now automatically set the names");
  console.log("Title, author, genre example:", (0, _ES6Features.objectLiterals)("The Hobbit", "J.R.R. Tolkein", "Fantasy"));
  console.log("Destructuring is where you pull name value pairs out of an object.");
  var sampleObj = {
    a: "this is a",
    b: "this is b",
    c: "this is c"
  };
  console.log("Object is:", sampleObj);
  console.log("Pull out a and c.  a:", sampleObj.a, " c:", sampleObj.c);
  console.log("Call multipleParameters:", (0, _ES6Features.multipleParameters)("required", "optional1", "optional2", "optional3", 1, 2, Math.random()));
  var arrayToSpread = ["AryV0", "AryV1", "AryV2"];
  console.log("Call spreadTheArray:", _ES6Features.spreadTheArray.apply(void 0, ["requiredParam"].concat(arrayToSpread)));
}

function runLexicalScope() {
  console.log("\n--->> runLexicalScope");
  console.log("simpleHoistingExample:", (0, _lexicalScoping.simpleHoistingExample)());
  var l = new _lexicalScoping.LexicalScoping();
  console.log("Instance of LexicalScoping:", l);
  console.log("l.getVar:", l.getVar());
  console.log("l.getVarArrow:", l.getVarArrow());
  console.log("l.getValHidden:", l.getVarFromHidden());
  console.log("getVarFromHiddenArrow:", l.getVarFromHiddenArrow());
}
/* runsetTimeout
 * desc: Example showing how executing code takes precendence over something placed immediately on the event
 *       queue (placed on the event queue with a timeout of 0).
 */


function runsetTimeout() {
  console.log("\n--->> runsetTimeout");
  (0, _setTimeout.setTimeout01)();
  (0, _setTimeout.setTimeout02)();
}
/* runclassesAndThis
 * desc: Examples showing how classes, this and prototypes work.
 */


function runclassesAndThis() {
  console.log("\n--->> runclassesAndThis");
  console.log("What is this?");
  (0, _classesAndThis.whatIsThis)(1);
  (0, _classesAndThis.testObjectCreate)();
  console.log("Create an animal where methods are set in the animal function body");
  var leo1 = (0, _classesAndThis.Animal_V1)("Leo the Lion", 100);
  console.log("leo v1:", leo1);
  console.log("leo.eat(5) v1:");
  leo1.eat(5);
  console.log("Create an animal where methods are picked up using Object.create()");
  var leo2 = (0, _classesAndThis.Animal_V2)("Leo the Lion", 100);
  console.log("leo v2:", leo2);
  console.log("leo.eat(5) v2:");
  leo2.eat(5); // Create an Animal with methods in the function's prototype object.

  console.log("Animal created with methods in the function's prototype object");
  console.log("Remeber that every function automatically has a prototype object contained within it.");
  var leo3 = (0, _classesAndThis.Animal_V3)("Leo V3", 300);
  console.log("leo3:", leo3);
  console.log("leo3.eat(5).  Note: Animal_V3 has a eat method in its prototype.");
  console.log("Since it was created using Object.create(Animal_V3.prototype) the eat() method will get picked up in the prototype.");
  leo3.eat(5);
  console.log("Animal_V3.prototype:", _classesAndThis.Animal_V3.prototype); // Create animals by calling the function using new.
  // new will call Object.create() automatically creating the "this" object which will
  // delegate to the object's prototype.

  console.log("Create Animals calling Animal function using new.");
  console.log("Calling with new will invoke Object.create() automatically creating the \"this\" object.");
  var leoNew = new _classesAndThis.AnimalWithNew("New Leo", 1000); // Put "new" in front of function invocation.

  console.log("leoNew:", leoNew);
  console.log("leoNew.eat(6)");
  leoNew.eat(6); // Note how this iterates over the prototype chain showing all of the functions
  // associated with the prototype.

  for (var key in leoNew) {
    console.log("Key: ".concat(key, ".  Value: ").concat(leoNew[key]));
  } // We will now use the class keyword to reproduce what was done above using a modern technique.


  console.log("We will now use the class keyword to reproduce what was done above using a modern technique.");
  var leoObj = new _classesAndThis.AnimalAsClass("Leo with Class", 2000);
  console.log("leoObj:", leoObj);
  console.log("leoObj.eat(7):");
  leoObj.eat(7); // When using a class the functions in the prototype are displayed when using for in.

  for (var _key in leoObj) {
    console.log("Key: ".concat(_key, ".  Value: ").concat(leoObj[_key]));
  }

  console.log("anAry prototype:", Object.getPrototypeOf(leoObj));

  try {
    (0, _classesAndThis.leaveOutNew)();
  } catch (err) {
    console.log("Got an error because we called a class as a function without using new.\n", err);
  }
}

function runArrayTests() {
  console.log("\n--->> runArrayTests");
  (0, _Arrays.arrayNewTesting)();
}

function runBabelGenTest() {
  console.log("\n--->> runBabelGenTest");
  console.log("let p1 = new PersonAsFunction()");
  var p1 = new _babelClassGen.PersonAsFunction();
  console.log("let p2 = new PersonAsFunction(\"Luigi\", 21)");
  var p2 = new _babelClassGen.PersonAsFunction("Luigi", 21);
}
/* runAsyncAwaitBlocker
 * desc: Shows how promises can still result in calls that are blocking and run sequentially.
 */


function runAsyncAwaitBlocker() {
  return _runAsyncAwaitBlocker.apply(this, arguments);
}
/* runAsyncAwaitNonBlocker
 * desc: Shows how promises can still result in calls that are blocking and run sequentially.
 */


function _runAsyncAwaitBlocker() {
  _runAsyncAwaitBlocker = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            log("Start: runAsyncAwaitBlocker");
            log("Synchronous 1");
            (0, _AsyncAwait.codeBlocker)("CB1").then(log);
            log("Synchronous 2");
            (0, _AsyncAwait.codeBlocker)("CB2").then(log);
            log("Synchronous 3"); // log("01 await await three tasks in sequence.");
            // let startTime = Date.now();
            // let task1 = await myPromiseStillBlocking("task1");
            // log(`02 First task is done.  Result: ${task1}`);
            // let task2 = await myPromiseStillBlocking("task2");
            // log(`03 Second task is done.  Result: ${task2}`);
            // let task3 = await myPromiseStillBlocking("task3");
            // log(`04 Third task is done.  Result: ${task3}`);
            // let task4 = await myPromiseStillBlocking("task4");
            // log(`05 Fourth task is done.  Result: ${task4}`);
            // let task5 = await myPromiseStillBlocking("task5");
            // let endTime = Date.now();
            // log(`06 Fifth task is done.  Result: ${task5}`);
            // console.log(`${endTime-startTime} msec. Total time for 5 tasks run synchronously.`);
            // console.log("Now run the tasks simultameously.");
            // startTime = Date.now();
            // const [task1p, task2p, task3p, task4p, task5p] = await Promise.all([
            //   myPromiseInParallel("task1p"),
            //   myPromiseInParallel("task2p"),
            //   myPromiseInParallel("task3p"),
            //   myPromiseInParallel("task4p"),
            //   myPromiseInParallel("task5p")
            // ]);
            // endTime = Date.now();
            // console.log(`${endTime-startTime} msec. Total time for 3 tasks run simultaneously.`); 

            log("End: runAsyncAwaitBlocker");

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _runAsyncAwaitBlocker.apply(this, arguments);
}

function runAsyncAwaitNonBlocker() {
  return _runAsyncAwaitNonBlocker.apply(this, arguments);
}
/* runAsyncAwaitPromiseError
 * desc: Shows the correct way to handle errors from functions that return promises.
 */


function _runAsyncAwaitNonBlocker() {
  _runAsyncAwaitNonBlocker = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var a, b;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            log("Start: runAsyncAwaitNonBlocker");
            log("Synchronous 1");
            a = (0, _AsyncAwait.codeNonBlocker)("CnB1");
            log("Synchronous 2");
            b = (0, _AsyncAwait.codeNonBlocker)("CnB2");
            log("Synchronous 3");
            _context2.next = 8;
            return Promise.all([a, b]);

          case 8:
            log("End: runAsyncAwaitNonBlocker");

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _runAsyncAwaitNonBlocker.apply(this, arguments);
}

function runAsyncAwaitPromiseError() {
  return _runAsyncAwaitPromiseError.apply(this, arguments);
} // Call the runner function here.  Uncomment the ones you'd like to test.


function _runAsyncAwaitPromiseError() {
  _runAsyncAwaitPromiseError = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            log("Start: runIt");
            log("01 await myPromiseError");
            _context3.prev = 2;
            _context3.t0 = console;
            _context3.t1 = "Result = ";
            _context3.next = 7;
            return (0, _AsyncAwait.myPromiseError)();

          case 7:
            _context3.t2 = _context3.sent;
            _context3.t3 = _context3.t1.concat.call(_context3.t1, _context3.t2);

            _context3.t0.log.call(_context3.t0, _context3.t3);

            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t4 = _context3["catch"](2);
            console.log("Caught an error: ", _context3.t4);

          case 15:
            log("End: runAsyncAwaitPromiseError");

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[2, 12]]);
  }));
  return _runAsyncAwaitPromiseError.apply(this, arguments);
}

runClosureExample();
runClosureImplementingACounter(); //runES6Features();
//runLexicalScope();
//runES6Features();
//runsetTimeout();
//runBigNumberExample();
//runclassesAndThis();
//runArrayTests();
//runBabelGenTest();
//runAsyncAwaitBlocker();
//runAsyncAwaitNonBlocker();
//runAsyncAwaitPromiseError();
//# sourceMappingURL=app.js.map