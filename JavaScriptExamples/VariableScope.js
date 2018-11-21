/* VariableScope.js
 * desc: Simple examples of how variable scoping works in JavaScript
 *
 */

// The value variable will be local to this function.  Global value unaffected.
function a() {
  // Inner function defined in a() should refer to the local var value not the global value
  function innerA() {
    console.log("In body innerA(): ", value);
  }
  innerA();
  var value = "Value in function a()";
  console.log("In body a(): ", value);
  innerA();
}

// The value variable will be local to this function.  Global value not used and unaffected.
function b() {

  var value;
  console.log("In body b(): ", value);
  value = "Value in function b()";
}

// Didn't use var to define the value.  This function is accessing and changing the global variable value.
function c() {

  value = "Value in function c()";
  console.log("In body c(): ", value);
}


var value = "Global value";
console.log("Global: ", value);
a();
console.log("Global after a(): ", value);
b();
console.log("Global: after b(): ", value);
c();
console.log("Global: after c(): ", value);
