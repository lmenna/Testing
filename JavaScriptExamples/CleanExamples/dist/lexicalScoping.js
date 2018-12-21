"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LexicalScoping = LexicalScoping;
exports.simpleHoistingExample = simpleHoistingExample;

/* lexicalScoping.js
 * desc: Example of how lexical scoping of variables for arrow functions differs from regular functions.
 */

/* LexicalScoping
 * desc: This is a JavaScript function that behaves like an object.  Sometimes this is called
 *       a constructor function.
 *       It declares and sets member variables and member fucntions using the "this" keyword.
 *       You don't call this function, rather you "new" it.  Like this,
 *       let l = new LexicalScoping();
 *       l.checkLexicalScope();
 */
function LexicalScoping() {
  var _this = this;

  var self = this; // Allows the hidden function to access the aVar.

  this.aVar = 1; // "this." arrow functions have access to "this" and are visible from outside the function LexicalScoping()

  this.getVarArrow = function () {
    return _this.aVar;
  }; // "this." functions have access to "this" and are visible from outside the function LexicalScoping()


  this.getVar = function () {
    this.aVar = 2;
    this.aVar++;
    return this.aVar;
  }; // "this." functions have access to "this" and are visible from outside the function LexicalScoping()


  this.getVarFromHidden = function () {
    return getVarHidden();
  }; // Note: Inner arrow functions have access to "this".  They are NOT visible outside of the LexicalScoping() function.


  var getVarArrowHidden = function getVarArrowHidden() {
    return _this.aVar;
  };

  this.getVarFromHiddenArrow = function () {
    return getVarArrowHidden();
  }; // Inner functions don't have access to this.


  function getVarHidden() {
    // Can't use this. here.  Need to use the saved "this" in "self".
    return self.aVar;
  }
}
/* simpleHoistingExample
 * desc: Shows how the lexical parsing of the JavaScript during compilation allows aVar to be accessed
 *       prior to its declarations and definition.
 */


function simpleHoistingExample() {
  aVar = 1; // This looks weird, but it works. The aVar declaration at the end applies to the whole scope!

  return aVar; // At this point aVar is exist and has a value.

  var aVar = 3; // Now we declare and set aVar's value, but all the action happened above.
}
//# sourceMappingURL=lexicalScoping.js.map