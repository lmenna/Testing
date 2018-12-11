"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultParametersMultiply = defaultParametersMultiply;
exports.templateLiterals = templateLiterals;
exports.multiLineStrings = multiLineStrings;
exports.scopeTestVar = scopeTestVar;
exports.scopeTestLet = scopeTestLet;
exports.forEachTest = forEachTest;
exports.forEachAnonymousTest = forEachAnonymousTest;
exports.Employee = exports.PersonClass = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* ES6Features.js
 * desc: Several examples showing new features released in JavaScript ES6.
 */

/* defaultParametersMultiply
 * desc: Default parameters can be set in the function signature.
 *       When calling this if you want the default for the first parameter
 *       then pass in undefined.  Like this defaultParametersMultiply(undefined, 5)
 */
function defaultParametersMultiply() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
}
/* templateLiterals
 * desc: Allows you to plug variables directly into strings
 *       Note the use of the back ticks when defining the string ``
 */


function templateLiterals() {
  var first = "John";
  var last = "Doe";
  var greeting = "Hello to ".concat(first, " ").concat(last, ".  Using embedded variables in this string. ${first} and ${last} should be replaced with names in the first sentence.");
  return greeting;
}
/* multiLineStrings
 * desc: Can have a string spanning multiple lines
 *       Note the use of the back ticks when defining the string ``
 */


function multiLineStrings() {
  var multiLine = "This is line 1 of a multi-line string\n  and line2\n  and line3\n  ...\n  use `backquotes` to define these\n  ...\n  end";
  return multiLine;
}
/* scopeTestVar
 * desc: This shows how var is scoped in a function.  It is not ES6 specific, JavaScript always
 *       worked this way.
 */


function scopeTestVar() {
  // For var all inner declarations don't reallocate the variable.
  var x = 1;
  {
    // This var definition refers back to the origin definiton of x and changes it's value
    var x = 2;
  }
  {
    // This var definition refers back to the origin definiton of x and changes it's value
    var x = 3;
  } // At this point x=3

  return x;
}
/* scopeTestLet
 * desc: This shows how 'let' has different scoping behavior from 'var'
 */


function scopeTestLet() {
  // For let we expect the variables defined in the inner scopes to reallocate the variable.
  var x = 1;
  {
    // This reallocates the variable and puts 2 in it.  Original x is unaffectd.
    var _x = 2;
  }
  {
    var _x2 = 3;
  } // At this point only x=1 remains.

  return x;
}

var PersonClass =
/*#__PURE__*/
function () {
  // Note there are no member variable here.  They are created in the constructor.
  function PersonClass(name, address, age) {
    _classCallCheck(this, PersonClass);

    this.name = name;
    this.address = address;
    this.age = age;
  } // Getters and setters, but all member variables are public so these
  // are not really protecting anything.


  _createClass(PersonClass, [{
    key: "getName",
    value: function getName() {
      // Memeber variables are always accesed using this.
      return this.name;
    }
  }, {
    key: "getAddress",
    value: function getAddress() {
      return this.address;
    }
  }, {
    key: "getAge",
    value: function getAge() {
      return this.age;
    }
  }, {
    key: "setName",
    value: function setName(aName) {
      this.name = aName;
    }
  }]);

  return PersonClass;
}();

exports.PersonClass = PersonClass;

var Employee =
/*#__PURE__*/
function (_PersonClass) {
  _inherits(Employee, _PersonClass);

  function Employee(name, address, age, id) {
    var _this;

    _classCallCheck(this, Employee);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Employee).call(this, name, address, age));
    _this.empId = id;
    return _this;
  }

  _createClass(Employee, [{
    key: "getEmpId",
    value: function getEmpId() {
      return this, empId;
    }
  }]);

  return Employee;
}(PersonClass);
/* forEachTest
 * desc: Shows how to iterate over and array using forEach calling a function on each element in the array
 */


exports.Employee = Employee;

function forEachTest(aNumbersArray) {
  var result = [];

  function timesTwo(number) {
    result.push(2 * number);
  }

  aNumbersArray.forEach(timesTwo);
  return result;
}
/* forEachAnonymousTest
 * desc: Shows how to iterate over and array using forEach calling a function on each element in the array
 *       This version uses an anonymous function
 */


function forEachAnonymousTest(aNumbersArray) {
  var result = [];
  aNumbersArray.forEach(function (number) {
    result.push(2 * number);
  });
  return result;
}
//# sourceMappingURL=ES6Features.js.map