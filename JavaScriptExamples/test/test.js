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
      var testReduceArray = ["Ab","a","b"];
      assert.equal((functional.sumOfLengths(testReduceArray)), 4);
      assert.equal((functional.sumOfLengths(testReduceArray)),
        functional.f_sumOfLengths(testReduceArray));
    });
  });
});


describe('ScanArray', function() {
  describe('#scanTheArray()', function() {
    it('should scan the array', function() {
      var testScanArray = ["Ab","a","b"];
      assert.equal(functional.arrayOfLengths(testScanArray)[1], 2);
      assert.equal(functional.arrayOfLengths(testScanArray)[0],
        functional.f_arrayOfLengths(testScanArray)[0]);
      assert.equal(functional.arrayOfLengths(testScanArray)[1],
        functional.f_arrayOfLengths(testScanArray)[1]);
      assert.equal(functional.arrayOfLengths(testScanArray)[2],
        functional.f_arrayOfLengths(testScanArray)[2]);
    });
  });
});

describe('MashArray', function() {
  describe('#mashTheArray()', function() {
    it('should mash the array', function() {
      var testScanArray = ["Ab","a","b"];
      assert.equal(functional.arrayToMap(testScanArray)["Ab"], 2);
      assert.equal(functional.f_arrayToMap(testScanArray)["Ab"], 2);
      assert.equal(functional.arrayToMap(testScanArray)[testScanArray[1]],
        functional.f_arrayToMap(testScanArray)[testScanArray[1]]);
    });
  });
});
