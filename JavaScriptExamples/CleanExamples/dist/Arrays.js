"use strict";
/* arrayNewTesting
 * desc: Explore some strage behaviors associated with JavaScript array creation.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayNewTesting = arrayNewTesting;

function arrayNewTesting() {
  // The next line will create an array with 10 elements with all of the values empty.
  var newAry = new Array(10); // The next line will create an array with a single element set to the value 10.

  var ary = [10];
  console.log("Result from let newAry = new Array(10)");
  console.log("newAry:", newAry);
  console.log("Result from let ary = [10]");
  console.log("ary:", ary);
  console.log("Do a loop over newAry");

  for (var i = 0; i < newAry.length; i++) {
    console.log("newAry[", i, "]=", newAry[i]);
  } // The next line will create a sparse array from ary


  ary[5] = 50;
  console.log("ary[5] = 50");
  console.log("ary:", ary);

  for (var _i = 0; _i < ary.length; _i++) {
    console.log("ary[", _i, "]=", ary[_i]);
  } // Try to put a sparse array into a set


  var aSet = new Set(ary);
  console.log("aSet:", aSet); // Clean an array of duplicates and undefined values.
  // Ensure returned array is packed.

  var arrayWithDups = [1, 2, 3, 2, 3, 4, 5, 4, 5, 4];
  arrayWithDups[15] = 6;
  console.log("arrayWithDups:", arrayWithDups);
  var cleanArray = uniqueCleanArray(arrayWithDups);
  console.log("cleanArray:", cleanArray);
}
/* uniqueCleanArray
 * desc: Takes an array and strips out the duplicates and remove undefined values.
 */


function uniqueCleanArray(anAry) {
  if (!(anAry instanceof Array)) return [];
  var aSet = new Set(anAry);
  var uniqueArray = Array.from(aSet);
  console.log("uniqueArray:", uniqueArray);
  uniqueArray = uniqueArray.filter(function (item) {
    return item != undefined;
  });
  return uniqueArray;
}
//# sourceMappingURL=Arrays.js.map