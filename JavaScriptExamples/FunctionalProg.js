/*! FunctionalProg.js
 *
 * Some examples of functional programming techniques in JavaScript.
 *
 * Shows the procedural way to do things followed by the functional approach.
 *
 */

var exports = module.exports = {};

// Convert text in an array to Uppercase.
// Return the uppercase array.
// Doesn't modify the original array.
exports.uppercaseTheArray = function(theArrayToUppercase) {

  var uppercaseArray = [];
  for(var elem of theArrayToUppercase) {
    uppercaseArray.push(elem.toUpperCase());
  }
  return(uppercaseArray);
}
//
// Functional version of uppercaseTheArray
exports.f_uppercaseTheArray = function(theArrayToUppercase) {

  var uppercaseArray = theArrayToUppercase.map(elem => elem.toUpperCase());
  return(uppercaseArray);
}

// Take an array of strings and filter out elements of length n.
// Return an array containing the elements filtered out.
// Doesn't modify the original array.
exports.filterTheArray = function(theArrayToFilter, n) {

  var elementsFilteredOut = [];
  for(let elem of theArrayToFilter) {
    if (elem.length === n) {
      elementsFilteredOut.push(elem);
    }
  }
  return(elementsFilteredOut);
}
//
// Functional version of filterTheArray (Filter example)
exports.f_filterTheArray = function(theArrayToFilter, n) {

  var elementsFilteredOut = theArrayToFilter.filter(elem => elem.length === n);
  return(elementsFilteredOut);
}

// Take an array of strings and return the sum of the lengths of all strings in the array
// Return the sum of string lengths
// Doesn't modify the original array.
exports.sumOfLengths = function(theArrayToSum) {

    var sumOfLengths = 0;
    for(var item of theArrayToSum) {
      sumOfLengths += item.length;
    }
    return(sumOfLengths);
}
//
// Functional version of sumOfLengths (Reduce example)
exports.f_sumOfLengths = function(theArrayToSum) {
  const total = (acc, len) => len + acc;

  var sumOfLengths = theArrayToSum.map(item => item.length).reduce(total, 0);
  return(sumOfLengths);
}

console.log("\nRuns several array operations using procedural and functional implementations.\n");

// Run the various tests and output the results.
// Run the uppercase code.
console.log("->> Example 1: Turn all strings in an array to uppercase.")
var testUppercaseArray = ["name1", "name2", "AbCd"];
var uppercaseArray = exports.uppercaseTheArray(testUppercaseArray);
var f_uppercaseArray = exports.f_uppercaseTheArray(testUppercaseArray);
console.log("Original Array:", testUppercaseArray);
console.log("Uppercase version imperative:", uppercaseArray);
console.log("Uppercase version functional:", f_uppercaseArray);
console.log("-------------------------------------------------\n")

// Run the filter
console.log("->> Example 2: Filter out strings of a certain size from and array.")
var testFilterArray = ["name1", "name2", "AbCd"];
var filteredArray = exports.filterTheArray(testFilterArray, 4);
var f_filteredArray = exports.f_filterTheArray(testFilterArray, 4);
console.log("Original Array:", testFilterArray);
console.log("Filtered Array imperative:", filteredArray);
console.log("Filtered Array functional:", f_filteredArray);
console.log("-------------------------------------------------\n")

// Run the map, Reduce to get sum of lengths
console.log("->> Example 3: Sum the lengths of all strings in an array.")
var testLengthsArray = ["name1", "name2", "AbCd"];
var totalOfLengths = exports.sumOfLengths(testFilterArray);
var f_totalOfLengths = exports.f_sumOfLengths(testFilterArray);
console.log("Original Array:", testFilterArray);
console.log("Total of all string lengths imperative:", totalOfLengths);
console.log("Total of all string lengths functional:", f_totalOfLengths);
