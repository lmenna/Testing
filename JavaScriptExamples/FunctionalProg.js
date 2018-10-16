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

// Take an array of strings and return an array with a running total of lengths of all strings in the array
// Return an array with running totals of lengths
// Doesn't modify the original array.
exports.arrayOfLengths = function(theArrayToSum) {

    var lengths = [0];
    var totalLength = 0;
    for(var item of theArrayToSum) {
      totalLength += item.length;
      lengths.push(totalLength);
    }
    return(lengths);
}
//
// Functional version of sumOfLengths (Reduce example)
exports.f_arrayOfLengths = function(theArrayToSum) {

  const total = (acc, item) => acc + item.length;

  const lengths = theArrayToSum.scan(total, 0);
  return(lengths);
}
// Create an array scan method. (Like Haskell's scanl function)
Array.prototype.scan = function(callback, initialValue) {
  const appendAggregate = (acc, item) => {
console.log("acc:", acc, " item:", item);
    const aggregate = acc.slice(-1)[0] // get last item
    const newAggregate = callback(aggregate, item);
    return [...acc, newAggregate];
  }
  const accumulator = [initialValue];
  return(this.reduce(appendAggregate, accumulator));
}

// Convert an array to a map of key value pairs.  For each item the key will be
// the string and the value will be a function run on that string
// Return the map of key value pairs
// Doesn't modify the original array.
const process = item => item.length;

exports.arrayToMap = function(theArrayToMap) {

  var hash = {};
  for (var item of theArrayToMap) {
    hash[item] = process(item);
  }
  return(hash);
}
//
// Functional version of arrayToMap
exports.f_arrayToMap = function(theArrayToMap) {

  var hash = theArrayToMap.mash(item => [item, process(item)]);
  return(hash);
}
// Create an Array mash function
Array.prototype.mash = function(callback) {
  const addKeyValuePair = (acc, item) => {
    const [key, value] = callback ? callback(item) : item;
    return {...acc, [key]: value}
  }
  return this.reduce(addKeyValuePair, {});
}


// Run the various tests and output the results.
console.log("\nRuns several array operations using procedural and functional implementations.\n");
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

// Run the scan example to get running total of sum of lengths
console.log("->> Example 4: Running total of sum the lengths of all strings in an array.")
var testLengthsArray = ["name1", "name2", "AbCd"];
var arrayOfLengths = exports.arrayOfLengths(testFilterArray);
var f_arrayOfLengths = exports.f_arrayOfLengths(testFilterArray);
console.log("Original Array:", testFilterArray);
console.log("Total of all string lengths imperative:", arrayOfLengths);
console.log("Total of all string lengths functional:", f_arrayOfLengths);

// Run the mash example to convert a string array to a map, with the strings
// as keys and the value being a function like "length" applied to the key
console.log("->> Example 5: Running mash to convert an array to a hashmap")
var testMapArray = ["name1", "name2", "AbCd"];
var hashMapFromArray = exports.arrayToMap(testMapArray);
var f_hashMapFromArray = exports.f_arrayToMap(testMapArray);
console.log("Original Array:", testMapArray);
console.log("Hashmap from the array imperative:", hashMapFromArray);
console.log("Hashmap from the array functional:", f_hashMapFromArray);

// These are some extra examples showing how map, reduce and filter work in JavaScript
console.log("->> Appendix: Running map")
var testArray = [ {key: 1, name: "name1"},
                  {key: 2, name: "name2"},
                  {key: 3, name: "name3"},
                  {key: 4, name: "name3 is a much longer string...."}];
// map(callback, optional_context)
// Callback here is the arrow => function
// map will go through each element in the array (aryElement here which is key value pairs) and call
// a function on it that extracts the .key element.
const keys = testArray.map(aryElement => aryElement.key );
console.log("testArray: ", testArray);
console.log("keys in testArray: ", keys);
// We could also do something very simple like have the callback just return a const value of 1
// This results in 1 being returned for each element in the Array
const justOnes = testArray.map(aryElement => 1 );
console.log("justOnes: ", justOnes);
// Instead of key we can also return the names in the elements
const allNames = testArray.map(aryElement => aryElement.name );
console.log("The Names: ", allNames);
// Now lets get the length of the names
const allNamesLen = testArray.map(aryElement => aryElement.name.length );
console.log("The Name Lengths: ", allNamesLen);
