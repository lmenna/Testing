/* closureTimers
 * desc: A nice example of how to use a function closure to store counters for timers
 *       that are displayed on a webpage.
 */


/* makeClosureForTimer
 * desc: Uses the closure pattern to create a timer that can be bound to a DOM element.
 *       Note that both the counter, interval and element persist after the function excetion finishes.
 */
function makeClosureForTimer(element, interval) {

  var counter = 0;
  setInterval(timeIt, interval);
  function timeIt() {
    element.textContent = interval + " : " + counter;
    counter++;
  }
}

/* Modify the HTML page to include two p elements where we will display the timer counts. */
// Timer1
var para1 = document.createElement("p");
var timer1 = document.createTextNode("This is timer1.");
para1.setAttribute("id", "timer1");
para1.appendChild(timer1);
var element = document.getElementById("div1"); // Assume div1 was in index.html
element.appendChild(para1);
makeClosureForTimer(timer1, 500);
// Timer2
var para2 = document.createElement("p");
var timer2 = document.createTextNode("This is timer2.");
para2.setAttribute("id", "timer2");
para2.appendChild(timer2);
var element = document.getElementById("div1"); // Assume div1 was in index.html
element.appendChild(para2);
makeClosureForTimer(timer2, 600);
