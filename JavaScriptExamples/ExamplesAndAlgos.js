/* ExamplesAndAlgos.js
 *
 * A collection of examples of key concepts and algorithms implemented in JavaScript
 *
 */

// Some helper methods
Array.prototype.myFlatMap = function(lambda) {
  return Array.prototype.concat.apply([], this.map(lambda))
}

console.log("\n\n\nBEGIN: -----------------------------------\n");
// Simple map example
const ary = [1,2,3];
var resultMap = ary.map(x => 2*x);
console.log(">EXAMPLE1 - Mapping f(x) over an array");
console.log("   Array map.  Usage result = ary.map(x => f(x)).  Will iterate over all elements x, apply f(x) and return a new Array.");
console.log("   In this case f(x)=2*x")
console.log("   ary:", ary," maps to:", resultMap);

// Double map example
const resultMap2 = ary.map(x => 2*x).map(x => x/2);
console.log("\n>EXAMPLE2 - Composite fucntion f() o g()");
console.log("   Array map applied twice. Will apply f(x) then g(x).  This is the composite function f() o g()");
console.log("   In this case f(x)=2*x and g(x)=x/2, so result should be the original array.")
console.log("   ary:", ary," maps to:", resultMap2);

// Functor / Monad example
// Thing is a Functor known as the identity function (or functor)
// A functor is something that is Mappable, it can be mapped between categories
// A monad is a type of functor that has a flat mapping
const Thing = value => ({
  value,
  map: morphism => Thing(morphism(value))
});
const thing1 = Thing(1);
const thing2 = thing1.map(x => x+1);
console.log("\n>EXAMPLE3 - Functor");
console.log("   Create a functor in JavaScript.  A functor is something that is Mappable.  It can be mapped between categories.");
console.log("   thing1:", thing1, " thing2=thing1.map(x => x+1):", thing2);

// Here is the version that is a Monad
const ThingM = value => ({
  value,
  map: morphism => ThingM(morphism(value)),
  flatMap: morphism => morphism(value)
});
const thingM1 = ThingM(1);
const thingM2 = thingM1.map(x => x+1);
const thingFM2 = thingM1.flatMap(x => x+1);
console.log("\n>EXAMPLE4 - Monad");
console.log("   Create a Monand in JavaScript.  A monad is a Functor that has a Flat Mapping.");
console.log("   thingM1:", thingM1);
console.log("   thingM2=thingM1.map(x => x+1):", thingM2);
console.log("   thingFM2=thingM1.flatMap(x => x+1):", thingFM2, "  Flat means value is not wrapped in the object.");

// Another example of a flat mapping.  This time using an array operation.
const aryFunction = x => [x, x+100];
const list = [1,2,3];
console.log("\n>EXAMPLE5 - Flat Map for Array");
console.log("   list:", list);
console.log("   list.map(aryFunction):", list.map(aryFunction));
try {
  console.log("   list.flatMap(aryFunction):", list.flatMap(aryFunction));
}
catch(err) {
  console.log("   JavaScript flatMap() not working.  Lets use our own.")
  console.log("   list.flatMap(aryFunction):", list.myFlatMap(aryFunction));
}

// Using Array.apply to an Array
const applyArray1 = [1,2,3];
function stringIt(...args) {
  // "this" will refer to the array passed into apply
  return(this.join(", "));
}
console.log("\n>EXAMPLE6 - Using func.apply(array) to apply a function to an array.");
console.log("   stringIt.apply(applyArray1):", stringIt.apply(applyArray1));

// Iterating through name value pairs
const someData = {
                    anArray: [1,2,3],
                    aString: "Hello",
                    aValue:   1,
                    moreData: {
                      aInnerAry:    [4,5,6],
                      aInnerString: "Inner Hello",
                      aInnerValue:  2
                    },
                    aSimpleObject: x => ({
                      x,
                      multiply: y => x*y
                    }),
                    aObject:  value => ({
                      value,
                      map: morphism => ThingM(morphism(value)),
                      flatMap: morphism => morphism(value)
                    }),
                    person: {
                      firstName: "John",
                      lastName: "Doe",
                      id:       12345,
                      fullName: function() {
                        return this.firstName + " " + this.lastName;
                      }
                    }
                  }
console.log("\n>EXAMPLE7 - Objects, access data and data manipulation.");
console.log("someData:", someData);
console.log("   Show all keys and values:");
for (var key in someData) {
  console.log("   key:", key, " value:", someData[key]);
}
console.log("   Direct access:");
console.log("   someData[aValue]:", someData["aValue"]);
console.log("   someData.aValue:", someData.aValue);
console.log("   someData[moreData][aInnerAry]:", someData["moreData"]["aInnerAry"]);
console.log("   someData[aSimpleObject](6):", someData["aSimpleObject"](6));
console.log("   someData.aSimpleObject(6).multiply(5):", someData.aSimpleObject(6).multiply(5));
console.log("   someData[person]:", someData["person"]);
console.log("   someData[person].fullName():", someData["person"].fullName());

console.log("\nEND: -----------------------------------------\n\n\n\n");
