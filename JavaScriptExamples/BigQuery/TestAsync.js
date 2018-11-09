/* TestAsnyc.js
 * desc: Simple example of how async and await work in JavaScript.  Uses setTiomeout() to provide the delay.
 *
 */


async function f() {

  var SampleData;

  console.log("In f()");
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Time Out Finished");
      SampleData = "Some sample data that took a while to load.";
      resolve(SampleData);
      // If you need to signal an error then reject instead of resolve
      // reject("Bad things happened")
    }, 4000);
  });

  let result = await promise; // wait till the promise resolves (*)

  console.log(result); // "done!"
  console.log("Exiting f()");
  return(SampleData);
}

/* Wrapper()
 * Wrapper method to call the async function.
 *
 */
async function Wrapper() {
  var result;
  try {
    result = await f();
  } catch(e) {
    console.log("Error:", e);
  }
  console.log("Wrapper result:", result);
}

// Call f() directly
// console.log("START: Calling f()");
// console.log(f());
// console.log("DONE: Calling f()");
// Call f() from wrapper
console.log("START: Calling f() from wrapper");
console.log(Wrapper());
console.log("DONE: Calling f() from wrapper");
