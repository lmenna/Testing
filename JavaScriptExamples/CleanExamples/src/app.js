/* app.js
 * desc: Used to launch various JavaScript examples.  Each function in this file will run code
 *       that shows how a specific JavaScript feature works.  Feel free to add more examples
 *       and to run only those examples that are interesting to you.
 */

"use strict";
require("@babel/polyfill");

import { PersonClosure, createCounters } from "./Closure";
import { aBigOne, addOne, aBigOneBN, addOneBN } from "./BigNumbers";
import { defaultParametersMultiply, templateLiterals, multiLineStrings,
  scopeTestVar, scopeTestLet, PersonClass, Employee, forEachTest, forEachAnonymousTest,
  mapArray01, filterArray01, objectLiterals, multipleParameters, spreadTheArray } from "./ES6Features";
import { LexicalScoping, simpleHoistingExample } from "./lexicalScoping";
import { setTimeout01, setTimeout02 } from "./setTimeout";
import { whatIsThis, testObjectCreate, Animal_V1, Animal_V2, Animal_V3, AnimalWithNew, AnimalAsClass,
  leaveOutNew } from "./classesAndThis";
import { arrayNewTesting } from "./Arrays";
import { PersonAsClass, PersonAsFunction } from "./babelClassGen";
import { codeBlocker, codeNonBlocker, myPromiseStillBlocking, myPromiseInParallel, myPromiseError } from "./AsyncAwait.js";

// Utility to log with a timestamp.
const start = Date.now();
const log = (msg) => {console.log( `     -->> ${Date.now()-start} ${msg}` )}

/* runClosureExample()
 * desc: A closure is a function with an internal state that perisists after the function
 *       is called.  This function is not a closure, but it runs the function which are.
 *       The closure functions are located in Closure.js  
 */
function runClosureExample() {
  console.log("\n--->> runClosureExample");
  var p = new PersonClosure("Luigi");
  console.log("Person p:", p);
  console.log("Person p._name:", p._name);
  console.log("Person p.getName:", p.getName());
  console.log("Person p.functionIsVisibleOutside:", p.functionIsVisibleOutside());
  console.log("Person p.canYouSeeMe is undefined use p.nowICanSeeYou:", p.nowICanSeeYou());
}



function runClosureImplementingACounter() {

  console.log("\n--->> runClosureImplementingACounter - Another closure example.");
  console.log("Create one counter closure.");
  console.log("The counter closure has one variable in the PLSRD - Persistent Lexically Scoped Reference Data");
  console.log("This variable is internally called counter.");
  console.log("It can only be accessed using the functions returned by createCounters");
  let [incrementCounter, decrementCounter] = createCounters();
  incrementCounter();incrementCounter();incrementCounter();
  decrementCounter();

  console.log("Create another counter closure.");
  console.log("It is expected that this new closure will have its own counter, starting back at 0.");
  [incrementCounter, decrementCounter] = createCounters();
  incrementCounter();incrementCounter();incrementCounter();
  decrementCounter();
}

/* runBigNumberExample()
 * desc: 
 */
function runBigNumberExample() {
  console.log("\n--->> runBigNumberExample");
  console.log("BigNumber Example");
  let aNumber = aBigOne();
  outputBigNumber(aNumber);
  aNumber = addOne(aNumber);
  outputBigNumber(aNumber);
  let aBN = aBigOneBN();
  outputBN(aBN);
  aBN = addOneBN(aBN);
  outputBN(aBN);
}

/* outputBigNumber()
 * desc: 
 */
function outputBigNumber(aNumber) {
  console.log("BigNumber:", aNumber);
  console.log("BigNumber.toString():", aNumber.toString());
  console.log("BigNumber.toString(16):", aNumber.toString(16));
  console.log("BigNumber.valueOf():", aNumber.valueOf());
  console.log("BigNumber.toFormat(0):", aNumber.toFormat(0));
}

function outputBN(aNumber) {
  console.log("BN:", aNumber);
  console.log("BN.toString():", aNumber.toString());
}

/* runES6Features()
 * desc: 
 */
function runES6Features() {

  console.log("\n--->> runES6Features");
  console.log("ES6 Default parameters");
  console.log("Call multiply with no parameters:", defaultParametersMultiply());
  // Note: It is best to put undefined in for missing parameters
  console.log("Call multiply with first parameter:", defaultParametersMultiply(3,undefined));
  // For the next call the undefined for the missing first parameter is required
  console.log("Call multiply with second parameter:", defaultParametersMultiply(undefined,4));
  console.log("Call multiply with both parameters:", defaultParametersMultiply(3,4));
  // Template literals allow variables to be embedded into strings.  Use `backquotes` to set these.
  console.log(templateLiterals());
  // Multiline strings can now be defined.  Use `backquotes` to set these.
  console.log(multiLineStrings());
  // For var we expect all inner scopes in the function to just apply
  // at the level of the function.  All inner declarations using var don't reallocate the variable.
  console.log(scopeTestVar());
  // For let we expect the variables defined in the inner scopes to reallocate the variable.
  console.log(scopeTestLet());
  // Try a simple person class
  let p = new PersonClass("Luigi","Norfolk St", 21);
  console.log("Class Person instance p:", p);
  let pn = new PersonClass();
  console.log("Class Person instance, nothing set, pn:", pn);
  pn.setName("Named");
  console.log("     Set the name. pn:", pn);
  console.log("     Get the name. pn.getName:", pn.getName());
  console.log("     Get the name, accessing it directly. pn.name:", pn.name);
  pn.name = "I changed it directly. All members are public.";
  console.log("     Set the name, accessing it directly. pn.name:", pn.name);
  // Create and instance of Employee which is a PersonClass
  let e = new Employee("Luigi","Norfolk St", 21, "E-123456");
  console.log("Class Employee instance. e:", e );
  // Checkout new ES6 array functions
  let aNumberArray = [1,2,3,4,5];
  let result = forEachTest(aNumberArray);
  console.log("Input Array:", aNumberArray);
  console.log("forEachTest result:", result);
  let resultAnonymous = forEachAnonymousTest(aNumberArray);
  console.log("forEachAnonymousTest resultAnonymous:", resultAnonymous);
  console.log("Map across an array and double each element");
  console.log("Original array:", aNumberArray);
  console.log("Result from mapping that doubles each element:", mapArray01(aNumberArray));
  console.log("Filter array selecting out odd numbers");
  console.log("Original array:", aNumberArray);
  console.log("Filtered array showing only odd numbers:", filterArray01(aNumberArray));
  console.log("Object literals (name value pairs) now automatically set the names");
  console.log("Title, author, genre example:", objectLiterals("The Hobbit", "J.R.R. Tolkein", "Fantasy"));
  console.log("Destructuring is where you pull name value pairs out of an object.");
  let sampleObj = { a: "this is a",
    b: "this is b",
    c: "this is c"};
  console.log("Object is:", sampleObj);
  console.log("Pull out a and c.  a:", sampleObj.a, " c:", sampleObj.c);
  console.log("Call multipleParameters:", multipleParameters("required"
    , "optional1", "optional2", "optional3", 1, 2, Math.random()));
  let arrayToSpread = ["AryV0", "AryV1", "AryV2"];
  console.log("Call spreadTheArray:", spreadTheArray("requiredParam", ...arrayToSpread));
}

function runLexicalScope() {

  console.log("\n--->> runLexicalScope");
  console.log("simpleHoistingExample:", simpleHoistingExample());
  let l = new LexicalScoping();
  console.log("Instance of LexicalScoping:", l);
  console.log("l.getVar:", l.getVar());
  console.log("l.getVarArrow:", l.getVarArrow());
  console.log("l.getValHidden:", l.getVarFromHidden());
  console.log("getVarFromHiddenArrow:", l.getVarFromHiddenArrow());
}

/* runsetTimeout
 * desc: Example showing how executing code takes precendence over something placed immediately on the event
 *       queue (placed on the event queue with a timeout of 0).
 */
function runsetTimeout() {
  console.log("\n--->> runsetTimeout");
  setTimeout01();
  setTimeout02();
}

/* runclassesAndThis
 * desc: Examples showing how classes, this and prototypes work.
 */
function runclassesAndThis() {

  console.log("\n--->> runclassesAndThis");
  console.log("What is this?");
  whatIsThis(1);
  testObjectCreate();
  console.log("Create an animal where methods are set in the animal function body");
  const leo1 = Animal_V1("Leo the Lion", 100);
  console.log("leo v1:", leo1);
  console.log("leo.eat(5) v1:");
  leo1.eat(5);
  console.log("Create an animal where methods are picked up using Object.create()");
  const leo2 = Animal_V2("Leo the Lion", 100);
  console.log("leo v2:", leo2);
  console.log("leo.eat(5) v2:");
  leo2.eat(5);
  // Create an Animal with methods in the function's prototype object.
  console.log("Animal created with methods in the function's prototype object");
  console.log("Remeber that every function automatically has a prototype object contained within it.");
  const leo3 = Animal_V3("Leo V3", 300);
  console.log("leo3:", leo3);
  console.log("leo3.eat(5).  Note: Animal_V3 has a eat method in its prototype.");
  console.log("Since it was created using Object.create(Animal_V3.prototype) the eat() method will get picked up in the prototype.");
  leo3.eat(5);
  console.log("Animal_V3.prototype:", Animal_V3.prototype);
  // Create animals by calling the function using new.
  // new will call Object.create() automatically creating the "this" object which will
  // delegate to the object's prototype.
  console.log("Create Animals calling Animal function using new.");
  console.log("Calling with new will invoke Object.create() automatically creating the \"this\" object.");
  let leoNew = new AnimalWithNew("New Leo", 1000); // Put "new" in front of function invocation.
  console.log("leoNew:", leoNew);
  console.log("leoNew.eat(6)");
  leoNew.eat(6);
  // Note how this iterates over the prototype chain showing all of the functions
  // associated with the prototype.
  for (let key in leoNew) {
    console.log(`Key: ${key}.  Value: ${leoNew[key]}`);
  }
  // We will now use the class keyword to reproduce what was done above using a modern technique.
  console.log("We will now use the class keyword to reproduce what was done above using a modern technique.");
  let leoObj = new AnimalAsClass("Leo with Class", 2000);
  console.log("leoObj:", leoObj);
  console.log("leoObj.eat(7):");
  leoObj.eat(7);
  // When using a class the functions in the prototype are displayed when using for in.
  for (let key in leoObj) {
    console.log(`Key: ${key}.  Value: ${leoObj[key]}`);
  }
  console.log("anAry prototype:", Object.getPrototypeOf(leoObj));
  try {
    leaveOutNew();
  }
  catch(err) {
    console.log("Got an error because we called a class as a function without using new.\n", err);
  }
}

function runArrayTests() {

  console.log("\n--->> runArrayTests");
  arrayNewTesting();
}

function runBabelGenTest() {

  console.log("\n--->> runBabelGenTest");
  console.log("let p1 = new PersonAsFunction()");
  let p1 = new PersonAsFunction();
  console.log("let p2 = new PersonAsFunction(\"Luigi\", 21)");
  let p2 = new PersonAsFunction("Luigi", 21);
}

/* runAsyncAwaitBlocker
 * desc: Shows how promises can still result in calls that are blocking and run sequentially.
 */
async function runAsyncAwaitBlocker() {
  log("Start: runAsyncAwaitBlocker");

  log("Synchronous 1");
  codeBlocker("CB1").then(log);
  log("Synchronous 2");
  codeBlocker("CB2").then(log);
  log("Synchronous 3");

  // log("01 await await three tasks in sequence.");
  // let startTime = Date.now();
  // let task1 = await myPromiseStillBlocking("task1");
  // log(`02 First task is done.  Result: ${task1}`);
  // let task2 = await myPromiseStillBlocking("task2");
  // log(`03 Second task is done.  Result: ${task2}`);
  // let task3 = await myPromiseStillBlocking("task3");
  // log(`04 Third task is done.  Result: ${task3}`);
  // let task4 = await myPromiseStillBlocking("task4");
  // log(`05 Fourth task is done.  Result: ${task4}`);
  // let task5 = await myPromiseStillBlocking("task5");
  // let endTime = Date.now();
  // log(`06 Fifth task is done.  Result: ${task5}`);
  // console.log(`${endTime-startTime} msec. Total time for 5 tasks run synchronously.`);
  // console.log("Now run the tasks simultameously.");
  // startTime = Date.now();
  // const [task1p, task2p, task3p, task4p, task5p] = await Promise.all([
  //   myPromiseInParallel("task1p"),
  //   myPromiseInParallel("task2p"),
  //   myPromiseInParallel("task3p"),
  //   myPromiseInParallel("task4p"),
  //   myPromiseInParallel("task5p")
  // ]);
  // endTime = Date.now();
  // console.log(`${endTime-startTime} msec. Total time for 3 tasks run simultaneously.`); 
  log("End: runAsyncAwaitBlocker");
}

/* runAsyncAwaitNonBlocker
 * desc: Shows how promises can still result in calls that are blocking and run sequentially.
 */
async function runAsyncAwaitNonBlocker() {
  log("Start: runAsyncAwaitNonBlocker");

  log("Synchronous 1");
  const a = codeNonBlocker("CnB1");
  log("Synchronous 2");
  const b = codeNonBlocker("CnB2");
  log("Synchronous 3");
  await Promise.all([a,b]);
  log("End: runAsyncAwaitNonBlocker");
}


/* runAsyncAwaitPromiseError
 * desc: Shows the correct way to handle errors from functions that return promises.
 */ 
async function runAsyncAwaitPromiseError() {
  log("Start: runIt");
  log("01 await myPromiseError");
  try {
    console.log(`Result = ${await myPromiseError()}`);
  }
  catch(err) {
    console.log("Caught an error: ", err);
  }
  log("End: runAsyncAwaitPromiseError");
}


// Call the runner function here.  Uncomment the ones you'd like to test.
runClosureExample();
runClosureImplementingACounter();
//runES6Features();
//runLexicalScope();
//runES6Features();
//runsetTimeout();
//runBigNumberExample();
//runclassesAndThis();
//runArrayTests();
//runBabelGenTest();
//runAsyncAwaitBlocker();
//runAsyncAwaitNonBlocker();
//runAsyncAwaitPromiseError();
