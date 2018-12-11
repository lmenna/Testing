"use strict";

var _Closure = require("./Closure");

var _BigNumbers = require("./BigNumbers");

var _ES6Features = require("./ES6Features");

function runClosureExample() {
  console.log("Closure Example");
  var p = new _Closure.PersonClosure("Luigi");
  console.log("Person p:", p);
  console.log("Person p._name:", p._name);
  console.log("Person p.getName:", p.getName());
  console.log("Person p.functionIsVisibleOutside:", p.functionIsVisibleOutside());
  console.log("Person p.canYouSeeMe is undefined use p.nowICanSeeYou:", p.nowICanSeeYou());
}

function runBigNumberExample() {
  console.log("BigNumber Example");
  var aNumber = (0, _BigNumbers.aBigOne)();
  outputBigNumber(aNumber);
  aNumber = (0, _BigNumbers.addOne)(aNumber);
  outputBigNumber(aNumber);
  var aBN = (0, _BigNumbers.aBigOneBN)();
  logBN(aBN);
  aBN = (0, _BigNumbers.addOneBN)(aBN);
  outputBN(aBN);
  var convertBN = convertBNtoBigNumber(aNumber);
}

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

function runES6Features() {
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
}

runES6Features();
//# sourceMappingURL=app.js.map