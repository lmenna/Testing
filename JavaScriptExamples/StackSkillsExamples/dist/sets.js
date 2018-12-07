"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ecma6Iterate = exports.manualIterate = exports.runSetDelete = exports.runSetCategories = void 0;

/* Coding examples from the Stackskill JavaScript online course
 * https://stackskills.com/courses/179647/lectures/2700083
 */
//  Set examples
var runSetCategories = function runSetCategories() {
  console.log("var runSetCategories = ()");
  var categories = new Set();
  categories.add('Sports');
  categories.add('Weather');
  categories.add('Sports'); // Sets will only store unique values

  console.log("categories:", categories); // > categories: Set { 'Sports', 'Weather' }
};

exports.runSetCategories = runSetCategories;

var runSetDelete = function runSetDelete() {
  console.log("var runSetDelete = ()");
  var aSet = new Set();
  aSet.add({
    name1: "value1"
  });
  aSet.add({
    name2: "value2"
  });
  var obj = {
    name3: "value3"
  };
  aSet.add(obj);
  console.log("Original:", aSet);
  aSet.delete({
    name3: "value3"
  });
  console.log("After delete using values:", aSet);
  aSet.delete(obj);
  console.log("After delete using object:", aSet);
};

exports.runSetDelete = runSetDelete;

var manualIterate = function manualIterate() {
  console.log("var manualIterate = ()");
  var colors = new Set();
  colors.add("red");
  colors.add("green");
  colors.add("blue");
  var itr = colors.values();

  for (var c = itr.next(); !c.done; c = itr.next()) {
    console.log(c.value);
  }
};

exports.manualIterate = manualIterate;

var ecma6Iterate = function ecma6Iterate() {
  console.log("var ecma6Iterate = ()");
  var colors = new Set();
  colors.add("red");
  colors.add("green");
  colors.add("blue");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = colors.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      // insertion order
      console.log(key);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

exports.ecma6Iterate = ecma6Iterate;
//# sourceMappingURL=sets.js.map