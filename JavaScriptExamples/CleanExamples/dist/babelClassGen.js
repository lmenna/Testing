"use strict";
/* babelClassGen.js
 * Generated code from Babel for a simple person class.
 * ES6 supports the "class" keyword to define classes.
 * The code here is how the class would be implemented in prior version of JavaScript.
 *
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersonAsFunction = exports.PersonAsClass = void 0;

function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _createClass = function () {
  console.log("In _createClass");

  function defineProperties(target, props) {
    console.log("In defineProperties");
    console.log("target:", target);
    console.log("props:", props);

    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  console.log("In _classCallCheck");
  console.log("instance:", instance);
  console.log("Constructor:", Constructor);

  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var PersonAsFunction = function () {
  console.log("In var PersonAsFunction");

  function PersonAsFunction(name, age) {
    console.log("In function PersonAsFunction");
    console.log("name:", name);
    console.log("age:", age);

    _classCallCheck(this, PersonAsFunction);

    this.name = name;
    this.age = age;
  }

  _createClass(PersonAsFunction, [{
    key: "sayHello",
    value: function sayHello() {
      return "Hello " + this.name;
    }
  }]);

  return PersonAsFunction;
}();
/* Person
 * desc: Here is Person as a class.  The code below was passed to Babel to generate the
 *       code presented above.
 *       Note: The name was changed from Person to PersonAsClass to avoid name conflicts.
 */


exports.PersonAsFunction = PersonAsFunction;

var PersonAsClass =
/*#__PURE__*/
function () {
  function PersonAsClass(name, age) {
    _classCallCheck2(this, PersonAsClass);

    this.name = name;
    this.age = age;
  }

  _createClass2(PersonAsClass, [{
    key: "sayHello",
    value: function sayHello() {
      return "Hello " + this.name;
    }
  }]);

  return PersonAsClass;
}();

exports.PersonAsClass = PersonAsClass;
//# sourceMappingURL=babelClassGen.js.map