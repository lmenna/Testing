"use strict";
/* whatIsThis
 * desc: See what the value of this is in a function
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whatIsThis = whatIsThis;
exports.testObjectCreate = testObjectCreate;
exports.Animal_V1 = Animal_V1;
exports.Animal_V2 = Animal_V2;
exports.Animal_V3 = Animal_V3;
exports.AnimalWithNew = AnimalWithNew;
exports.leaveOutNew = leaveOutNew;
exports.AnimalAsClass = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function whatIsThis(aParam) {
  console.log("this at the function level START:", this);
  var obj = {
    firstName: "Luigi",
    id: 10,
    displayThis: function displayThis() {
      console.log("this inside the obj:", this);
      console.log("this.firstName inside the obj:", this.firstName);
    }
  };
  obj.displayThis();
  console.log("this at the function level END:", this);
}
/* leaveOutNew
 * desc: Classes are just functions in JavaScript.  Try to call the function directly without
 *       using new.
 */


function leaveOutNew() {
  var Person =
  /*#__PURE__*/
  function () {
    function Person(name, age) {
      _classCallCheck(this, Person);

      this.name = name;
      this.age = age;
    }

    _createClass(Person, [{
      key: "sayHello",
      value: function sayHello() {
        return "Hello " + this.name;
      }
    }]);

    return Person;
  }();

  var p = new Person("Luigi", 11);
  console.log("p:", p);
  var p2 = Person("Luigi2", 22);
}
/* Animal_V1
 * desc: Case where we create an Animal object using a function containing variables and functions.
 *       In this case every Animal instance will contain copies of the functions eat, sleep and play.
 *       This is wasteful since the functions can be shared.
 */


function Animal_V1(name, energy) {
  var animal = {}; // Member variables

  animal.name = name;
  animal.energy = energy; // Member functions

  animal.eat = function (amount) {
    console.log("".concat(this.name, " is eating."));
    this.energy += amount;
  };

  animal.sleep = function (length) {
    console.log("".concat(this.name, " is sleeping."));
    this.energy += length;
  };

  animal.play = function (length) {
    console.log("".concat(this.name, " is playing."));
    this.energy -= length;
  };

  return animal;
}
/* testObjectCreate
 * desc: Illistate how Object.create() automatically fill in missing items.  It is like
 *       they are inherited from the base object.
 */


function testObjectCreate() {
  var parent = {
    name: "Luigi",
    age: 35,
    heritage: "Italian"
  };
  console.log("Use Object.create() and see how properties are passed to the child.");
  var child = Object.create(parent);
  child.name = "Junior";
  child.age = 12;
  console.log("parent:", parent);
  console.log("parent.name", parent.name);
  console.log("parent.age", parent.age);
  console.log("parent.heritage:", parent.heritage);
  console.log("child:", child, "  <--- Note: heritage is NOT here.");
  console.log("child.name", child.name);
  console.log("child.age", child.age);
  console.log("child.heritage:", child.heritage, "  <--- But heritage is here.");
} // Create one instance of the animal methods to share across all instances


var animalMethods = {
  eat: function eat(amount) {
    console.log("".concat(this.name, " is eating."));
    this.energy += amount;
  },
  sleep: function sleep(length) {
    console.log("".concat(this.name, " is sleeping."));
    this.energy += length;
  },
  play: function play(length) {
    console.log("".concat(this.name, " is playing."));
    this.energy -= length;
  }
};
/* Animal_V2
 * desc: Case where we create an Animal object using a function but in this case the methods
 *       have been seperated into a seperate variable named animalMethods.
 */

function Animal_V2(name, energy) {
  // Member function picked up from animalMethods
  var animal = Object.create(animalMethods); // Member variables.

  animal.name = name;
  animal.energy = energy;
  return animal;
}
/* Animal_V3
 * desc: Case where we create an Animal object using the function prototype object to
 *       store the animalMethods.
 *       The function's prototype is an object that every function has
 */


function Animal_V3(name, energy) {
  // Use function's prototype as backstop for missing methods
  var animal = Object.create(Animal_V3.prototype); // Member variables

  animal.name = name;
  animal.energy = energy; // Member functions

  Animal_V3.prototype.eat = function (amount) {
    console.log("".concat(this.name, " is eating."));
    this.energy += amount;
  };

  Animal_V3.prototype.sleep = function (length) {
    console.log("".concat(this.name, " is sleeping."));
    this.energy += length;
  };

  Animal_V3.prototype.play = function (length) {
    console.log("".concat(this.name, " is playing."));
    this.energy -= length;
  };

  return animal;
}
/* AnimalWithNew
 * desc: Case where we want the Animal function to be called using the "new" keyword.
 *       The function's prototype is an object that every function has
 */


function AnimalWithNew(name, energy) {
  // When calling the function with new the Object.create() is handled for us
  // with the "this" constaining the created object backed by the prototype.
  // Use function's prototype as backstop for missing methods
  // let animal = Object.create(Animal_V3.prototype);
  // When created with new the "this" keyword contains the object
  // Member variables
  // animal.name = name;
  // animal.energy = energy;
  this.name = name;
  this.energy = energy; // When created using new the function implicitly returns the object for you.
  // so we can comment this out.
  // return(animal);
} // Member functions for AnimalWithNew


AnimalWithNew.prototype.eat = function (amount) {
  console.log("".concat(this.name, " is eating."));
  this.energy += amount;
};

AnimalWithNew.prototype.sleep = function (length) {
  console.log("".concat(this.name, " is sleeping."));
  this.energy += length;
};

AnimalWithNew.prototype.play = function (length) {
  console.log("".concat(this.name, " is playing."));
  this.energy -= length;
};
/* AnimalAsClass
 * desc: This is the modern way to create a class in JavaScript.  The previous examples are valuable
 *       since they show how the class actually works.
 */


var AnimalAsClass =
/*#__PURE__*/
function () {
  function AnimalAsClass(name, energy) {
    _classCallCheck(this, AnimalAsClass);

    this.name = name;
    this.energy = energy;
  } // Member functions for AnimalWithNew


  _createClass(AnimalAsClass, [{
    key: "eat",
    value: function eat(amount) {
      console.log("".concat(this.name, " is eating."));
      this.energy += amount;
    }
  }, {
    key: "sleep",
    value: function sleep(length) {
      console.log("".concat(this.name, " is sleeping."));
      this.energy += length;
    }
  }, {
    key: "play",
    value: function play(length) {
      console.log("".concat(this.name, " is playing."));
      this.energy -= length;
    }
  }]);

  return AnimalAsClass;
}();

exports.AnimalAsClass = AnimalAsClass;
//# sourceMappingURL=classesAndThis.js.map