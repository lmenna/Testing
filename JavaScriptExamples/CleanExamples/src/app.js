import { PersonClosure } from "./Closure";
import { aBigOne, addOne, aBigOneBN, addOneBN } from "./BigNumbers";
import { defaultParametersMultiply, templateLiterals, multiLineStrings,
  scopeTestVar, scopeTestLet, PersonClass, Employee, forEachTest, forEachAnonymousTest,
   mapArray01, filterArray01, objectLiterals } from "./ES6Features";

function runClosureExample() {
  console.log("Closure Example");
  var p = new PersonClosure("Luigi");
  console.log("Person p:", p);
  console.log("Person p._name:", p._name);
  console.log("Person p.getName:", p.getName());
  console.log("Person p.functionIsVisibleOutside:", p.functionIsVisibleOutside());
  console.log("Person p.canYouSeeMe is undefined use p.nowICanSeeYou:", p.nowICanSeeYou());
}


function runBigNumberExample() {

  console.log("BigNumber Example");
  let aNumber = aBigOne();
  outputBigNumber(aNumber);
  aNumber = addOne(aNumber);
  outputBigNumber(aNumber);
  let aBN = aBigOneBN();
  logBN(aBN);
  aBN = addOneBN(aBN);
  outputBN(aBN);
  let convertBN = convertBNtoBigNumber(aNumber);
}

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

function runES6Features() {

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
    console.log("forEachTest result:", result)
    let resultAnonymous = forEachAnonymousTest(aNumberArray);
    console.log("forEachAnonymousTest resultAnonymous:", resultAnonymous)
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
}

runES6Features();
