"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = Person;

function Person(pName) {
  // The _name variable is not accessible from outside the Person function
  var _name = pName; // The getName function provides access to the _name variable.
  // This function

  this.getName = function () {
    return _name;
  };
}
//# sourceMappingURL=Closure.js.map