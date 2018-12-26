import {LinkedList} from "./linkedList";
import {runSetCategories, runSetDelete, manualIterate, ecma6Iterate, removeDuplicatesFromArray} from "./sets";

var runLiskedList = () => {
  var l = new LinkedList;
  //l.traverse();
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
}

var runSets = () => {
  runSetCategories();
  runSetDelete();
  manualIterate();
  ecma6Iterate();
  //let arrayWithDups = [1,2,3,4,4,5,6,1,2,3,7,8,9];
  //let arrayWithDups = [];
  let arrayWithDups = new Array(20);
  console.log("Input Array:", arrayWithDups);
  console.log("removeDuplicatesFromArray:", removeDuplicatesFromArray(arrayWithDups));
}

// runLiskedList();
runSets();
