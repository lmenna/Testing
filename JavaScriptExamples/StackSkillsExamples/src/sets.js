/* Coding examples from the Stackskill JavaScript online course
 * https://stackskills.com/courses/179647/lectures/2700083
 */

//  Set examples

var runSetCategories = ()  => {
  console.log("var runSetCategories = ()");
  var categories = new Set();
  categories.add('Sports');
  categories.add('Weather');
  categories.add('Sports'); // Sets will only store unique values

  console.log("categories:", categories);
  // > categories: Set { 'Sports', 'Weather' }
}

var runSetDelete = () => {

  console.log("var runSetDelete = ()");
  var aSet = new Set();
  aSet.add({name1: "value1"});
  aSet.add({name2: "value2"});
  var obj = {name3: "value3"};
  aSet.add(obj);
  console.log("Original:", aSet);
  aSet.delete({name3: "value3"});
  console.log("After delete using values:", aSet);
  aSet.delete(obj);
  console.log("After delete using object:", aSet);
}

var manualIterate = () => {

  console.log("var manualIterate = ()");
  var colors = new Set();
  colors.add("red");
  colors.add("green");
  colors.add("blue");
  var itr = colors.values();
  for(var c = itr.next(); !c.done; c = itr.next()) {
    console.log(c.value);
  }
}

var ecma6Iterate = () => {

  console.log("var ecma6Iterate = ()");
  var colors = new Set();
  colors.add("red");
  colors.add("green");
  colors.add("blue");
  for (let key of colors.values()) { // insertion order
    console.log(key);
  }
}

export {runSetCategories, runSetDelete, manualIterate, ecma6Iterate};
