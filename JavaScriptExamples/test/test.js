var assert = require('assert');
var functional = require('../FunctionalProg.js');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

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
      assert.equal((functional.filterTheArray(testFilterArray)).length,
        (functional.f_filterTheArray(testFilterArray)).length);
    });
  });
});
