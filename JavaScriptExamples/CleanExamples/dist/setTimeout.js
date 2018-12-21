"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTimeout01 = setTimeout01;
exports.setTimeout02 = setTimeout02;

/* setTimeout.js
 * desc: Examples using setTimeout from node to see how events work.
 */
function myFunc(arg) {
  console.log("arg was => ".concat(arg));
}

function setTimeout01() {
  console.log("Will call myFunc in 2.5sec with arg=funky");
  setTimeout(myFunc, 2500, 'funky');
}

function setTimeout02() {
  console.log("Will call myFunc with delay set to 0 and arg=instant");
  setTimeout(myFunc, 0, 'instant');
  console.log("Even though myFunc is request with 0 delay this will output first.");
  console.log("That is because the call to mFunc is on the event queue while this is running code.");
  console.log("Only after this function yields the CPU will myFunc be invoked.");
  console.log("Here is a long calc...");

  for (var i = 0; i < 250000; i++) {
    var j = 1.2345 * i;
  }

  console.log("Long calc is done...");
  console.log("Ending this function now!");
}
//# sourceMappingURL=setTimeout.js.map