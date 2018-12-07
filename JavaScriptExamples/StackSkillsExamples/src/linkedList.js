/* Coding examples from the Stackskill JavaScript online course
* https://stackskills.com/courses/179647/lectures/2700083
*/

//  LinkedList example

/**
 * @param data
 * @consturctor
 */
function Node(data) {
  this.data = data;
  this.next = null;
}

/**
 * @consturctor
 */
function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.add = function(data) {
  var node = new Node(data);

  if(this.head === null) {
    this.head = node;
    this.tail = node;
  }
  this.tail.next = node;
  this.tail = node;

  this.length++;
  return node;
}

LinkedList.prototype.delete = function(node) {

    if(this.length === 1) {
      return false;
    }

    if(node instanceof Node) {
      for(var _node=this.head; _node !== null; _node=_node.next) {
        if(_node.next === node) {
          _node.next = node.next;
          this.length -= 1;
          return true;
        }
      }
    }
    else {
      for(var _node=this.head; _node !== null; _node=_node.next) {
        if(_node.next === this.tail) {
          _node.next = null;
          this.tail = _node;
          this.length -= 1;
          return true;
        }
      }
    }
    return false;
}

LinkedList.prototype.traverse = function() {

  console.log("head:", this.head);
  console.log("tail:", this.tail);
  if (this.length===1) {
    return;
  }
  for(var _node = this.head; _node!==null; _node = _node.next) {
    console.log(_node);
  }
}

export {LinkedList};
