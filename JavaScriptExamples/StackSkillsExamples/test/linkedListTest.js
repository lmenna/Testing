import {assert, expect} from "chai";
import {LinkedList} from "../src/linkedList";

describe("Perform basic operations on the LinkedList", function() {

  it("should create an empty list", () => {
    var l = new LinkedList;
    assert.equal(0, l.length);
  });

  it("should add one element to the empty list", () => {
    var l = new LinkedList;
    l.add("some data");
    assert.equal(1, l.length);
  });

  it("should add one element to an existing list", () => {
    var existingList = new LinkedList;
    existingList.add("some data");
    existingList.add("some data");
    const existingLength = existingList.length;
    existingList.add("more data");
    assert.equal(existingLength+1, existingList.length);
  });

  it("should delete one element from the end of the list", () => {
    var l = new LinkedList;
    l.add("some data1");
    l.add("some data2");
    l.add("some data3");
    const length = l.length;
    l.delete();
    assert.equal(length, l.length+1);
  });


});
