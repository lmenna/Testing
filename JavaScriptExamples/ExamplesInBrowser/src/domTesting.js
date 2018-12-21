/* domTesting
 * desc: Examples illustrating how to query and manipulate the DOM
 */

function findTheLists() {

  let lists = document.querySelectorAll("li");
  console.log("lists:", lists);
  lists.forEach((listItem) => {
    listItem.innerHTML = "grrr...";
  });
}

function traverseNodes(id) {

  let elem = document.getElementById(id);
  console.log("The element is:", elem);
  // Parents
  console.log("The parent Node is:", elem.parentNode);  // Nodes include text and line breaks
  console.log("The parent Element is:", elem.parentElement); // Elements only include HTML elements
  console.log("The parent's parent Element is:", elem.parentElement.parentElement); // Elements only include HTML elements
  console.log("The parent's parent parent Element is:", elem.parentElement.parentElement.parentElement ); // Elements only include HTML elements
  // Traverse upward in a loop showing Nodes
  for(var curNode=elem; curNode!=null; curNode=curNode.parentNode) {
    console.log("curNode:", curNode);
  }
  // Traverse upward in a loop showing Elements
  for(var curElem=elem; curElem!=null; curElem=curElem.parentElement) {
    console.log("curElem:", curElem);
  }
  // Children
  console.log("The children are:", elem.children);
  // Sibling
  console.log("The next sibling Node is:", elem.nextSibling);
  console.log("The next sibling Element is:", elem.nextElementSibling);
  console.log("The previous sibling Node is:", elem.previousSibling);
  console.log("The previous sibling Element is:", elem.previousElementSibling);
}

function deleteliFromList() {

  let li1 = document.getElementById("li1");
  console.log("Removing li1:", li1);
  li1.parentNode.removeChild(li1);
}


function setDeleteCallback() {

  const list = document.querySelector("#ul1");

  list.addEventListener("click", function(e) {
    if(e.target.className==="delete") {
      const li = e.target.parentElement;
      list.removeChild(li);
    }
  })
}

function tryAdding() {

  let elem = document.getElementById("elem2");
  let x = "1";
  let y = 2;
  console.log("x=", x, " y=", y);
  console.log("What is x+y?")
  elem.innerHTML = x + y;
}

// findTheLists();
traverseNodes("ul1");
setDeleteCallback();
tryAdding();
