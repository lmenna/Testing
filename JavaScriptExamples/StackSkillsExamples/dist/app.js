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
  (0, _sets.ecma6Iterate)();
}; // runLiskedList();


runSets();
//# sourceMappingURL=app.js.map