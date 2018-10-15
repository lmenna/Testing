var assert = require('assert');
var functional = require('../FunctionalProg.js');

describe('Uppercase', function() {
  describe('#uppercaseTheArray()', function() {
    it('should turn elements in an array to uppercase', function() {
      var testUppercaseArray = ["Aname1","another"];
      assert.equal(functional.uppercaseTheArray(testUppercaseArray)[0],
        functional.f_uppercaseTheArray(testUppercaseArray)[0]);
    });
  });
});

describe('FilterArray', function() {
  describe('#filterTheArray()', function() {
    it('should filter elements from the array', function() {
      var testFilterArray = ["Aname1","another","abcd"];
      assert.equal((functional.filterTheArray(testFilterArray, 4)).length,
        (functional.f_filterTheArray(testFilterArray, 4)).length);
    });
  });
});


describe('ReduceArray', function() {
  describe('#reduceTheArray()', function() {
    it('should reduce the array', function() {
      var testFilterArray = ["Ab","a","b"];
      assert.equal((functional.sumOfLengths(testFilterArray)), 4);
      assert.equal((functional.sumOfLengths(testFilterArray)),
        functional.f_sumOfLengths(testFilterArray));
    });
  });
});
