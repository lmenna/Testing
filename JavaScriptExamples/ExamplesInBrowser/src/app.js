console.log("Hello there!");
const elem = document.getElementById("elem1");
if (elem!==null) {
  elem.innerHTML = "Hello from JavaScript. ./src/app.js updated elem1's innerHTML to display this."
}
else {
  console.log("elem1 not found in the HTML");
}
