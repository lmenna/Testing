import {LinkedList} from "./linkedList";
import {runSetCategories, runSetDelete, manualIterate, ecma6Iterate} from "./sets";

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
}

// runLiskedList();
runSets();
