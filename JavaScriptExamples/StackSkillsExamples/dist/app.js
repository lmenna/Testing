"use strict";

var _linkedList = require("./linkedList");

var _sets = require("./sets");

var runLiskedList = function runLiskedList() {
  var l = new _linkedList.LinkedList(); //l.traverse();

  l.add("Item1");
  console.log(l.length);
  l.traverse();
  l.add("Item2");
  console.log(l.length);
  l.traverse();
  l.add("Item3");
  console.log(l.length);
  l.traverse();
  console.log("delete from the list");
  l.delete("");
  l.traverse();
  l.delete("");
  l.traverse();
  l.delete("");
  l.traverse();
  l.delete("");
  l.traverse();
};

var runSets = function runSets() {
  (0, _sets.runSetCategories)();
  (0, _sets.runSetDelete)();
  (0, _sets.manualIterate)();
  (0, _sets.ecma6Iterate)(); //let arrayWithDups = [1,2,3,4,4,5,6,1,2,3,7,8,9];
  //let arrayWithDups = [];

  var arrayWithDups = new Array(20);
  console.log("Input Array:", arrayWithDups);
  console.log("removeDuplicatesFromArray:", (0, _sets.removeDuplicatesFromArray)(arrayWithDups));
}; // runLiskedList();


runSets();
//# sourceMappingURL=app.js.map