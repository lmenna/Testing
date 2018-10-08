/* ArrayDeepCopy.js
//
// Examples showing how to copy arrays in JavaScript
//
*/

/*
// Create a copy of a simple array
*/
console.log("Create a copy of a simple array.");
var ary = ["a", "b", "c"];
var cAry = ary.slice(0);
console.log("ary : ", ary);
console.log("cAry : ", cAry);
// Modify the copy and see if the original is modified
cAry.push("new item");
console.log("ary : ", ary);
console.log("cAry : ", cAry);


/*
// Create a copy of an array containing other arrays
*/
console.log("Create a copy of an array containing other arrays.");
var deepAry = [["e1","e2"],["e3"]];
var shallowCopy = deepAry.slice(0);
var deepCopy = [];
console.log("deepAry: ", deepAry);
console.log("shallowCopy: ", shallowCopy);
// Modify the copy and show how the original get changed
shallowCopy[0].push("new item");
console.log("shallowCopy: ", shallowCopy);
console.log("deepAry: ", deepAry);
// One method to make a deep copy is using the JSON stringify and parse methods.
var deepAry = [["e1","e2"],["e3"]];
var deepCopy = JSON.parse(JSON.stringify(deepAry));
console.log("deepAry: ", deepAry);
console.log("deepCopy: ", deepCopy);
deepCopy[0].push("new item");
console.log("deepAry: ", deepAry);
console.log("deepCopy (modified): ", deepCopy);

