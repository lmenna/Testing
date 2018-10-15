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

// Take an array and filter out elements that match a condition.
// Return an array containing the elements filtered out.
// Doesn't modify the original array.
exports.filterTheArray = function(theArrayToFilter) {

  var elementsFilteredOut = [];
  for(let elem of theArrayToFilter) {
    if (elem.length === 4) {
      elementsFilteredOut.push(elem);
    }
  }
  return(elementsFilteredOut);
}

//
// Functional version of filterTheArray
exports.f_filterTheArray = function(theArrayToFilter) {

  var elementsFilteredOut = theArrayToFilter.filter(elem => elem.length === 4);
  return(elementsFilteredOut);
}


// Run the various tests and output the results.
// Run the uppercase code.
var testUppercaseArray = ["name1", "name2", "AbCd"];
var uppercaseArray = exports.uppercaseTheArray(testUppercaseArray);
var f_uppercaseArray = exports.f_uppercaseTheArray(testUppercaseArray);
console.log("Original Array:", testUppercaseArray);
console.log("Uppercase version imperative:", uppercaseArray);
console.log("Uppercase version functional:", f_uppercaseArray);

// Run the filter
var testFilterArray = ["name1", "name2", "AbCd"];
var filteredArray = exports.filterTheArray(testFilterArray);
var f_filteredArray = exports.f_filterTheArray(testFilterArray);
console.log("Original Array:", testFilterArray);
console.log("Filtered Array imperative:", filteredArray);
console.log("Filtered Array functional:", f_filteredArray);
