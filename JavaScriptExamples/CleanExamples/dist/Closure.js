"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersonClosure = PersonClosure;
exports.createCounters = createCounters;

/* Closure.js
 * desc: Shows how closures can be implemented in JavaScript
 *       A closure is a function with an internal state that perisists after the function
 *       is called.  This happens in JavaScript if there is another function within the first that
 *       provides access to the inner variables.
 */
function PersonClosure(pName) {
  // The _name variable is not accessible from outside the Person function
  var _name = pName; // The getName function provides access to the _name variable.
  // This function is available outside and can set access the values closed inside.
  // It is refered to as a Closure.
  // To say it another way, a closure is a function that has access to the parent scope,
  // even after the parant function has closed.

  this.getName = function () {
    console.log("From this.getName, we can access the inner variable _name");
    return _name;
  };
  /* this.functionIsVisibleOutside
   * desc: Will be visible from outside the Person function and can be called to access
   *       inner objects closed into the Person function.
   */


  this.functionIsVisibleOutside = function () {
    console.log("From functionIsVisibleOutside we can call functionNotVisibleOutside.");
    functionNotVisibleOutside();
    return "functionIsVisibleOutside worked";
  };
  /* this.nowICanSeeYou
   * desc: Another example of opening up access to closed items within the Person function
   */


  this.nowICanSeeYou = function () {
    return canYouSeeMe();
  };
  /* canYouSeeMe
   * desc: This function in NOT visible outside of the person function.  So NO I can't see you from outside.
   */


  function canYouSeeMe() {
    return "I see you.";
  }
  /* functionNotVisibleOutside
   * desc: functionNotVisibleOutside is defined as a var within the Person function. It will
   *       be local to the function Person and NOT visible outside.
   */


  var functionNotVisibleOutside = function functionNotVisibleOutside() {
    console.log("functionNotVisibleOutside was called.");
  };
} // Closure example #2
// This example explicitly returns the functions used to access the closed over variable.
// COVE - Closed Over Variable Environment
// PLSRD - Persistent Lexically Scoped Reference Data


function createCounters() {
  // The variables here will be stored after this function exits.
  // Store whatever you'd like.  Possibly a lookup table.
  // For this example a single integer counter is stored.
  // This variable will not be directly accessible.  It will be accessed using the function returned.  
  var counter = 0;

  function incrementCounter() {
    counter++;
    console.log("incr: ".concat(counter));
  }

  function decrementCounter() {
    counter--;
    console.log("decr: ".concat(counter));
  } // Note that you can return as many methods as needed to access the internal state store in count.


  return [incrementCounter, decrementCounter];
}
//# sourceMappingURL=Closure.js.map