/* ES6Features.js
 * desc: Several examples showing new features released in JavaScript ES6.
 */

 /* defaultParametersMultiply
  * desc: Default parameters can be set in the function signature.
  *       When calling this if you want the default for the first parameter
  *       then pass in undefined.  Like this defaultParametersMultiply(undefined, 5)
  */
function defaultParametersMultiply(x=1, y=1) {
  return(x*y);
}

/* templateLiterals
 * desc: Allows you to plug variables directly into strings
 *       Note the use of the back ticks when defining the string ``
 */
function templateLiterals() {

  var first = "John";
  var last = "Doe";
  var greeting = `Hello to ${first} ${last}.  Using embedded variables in this string. \${first} and \${last} should be replaced with names in the first sentence.`;
  return(greeting);
}

/* multiLineStrings
 * desc: Can have a string spanning multiple lines
 *       Note the use of the back ticks when defining the string ``
 */
function multiLineStrings() {

  var multiLine = `This is line 1 of a multi-line string
  and line2
  and line3
  ...
  use \`backquotes\` to define these
  ...
  end`;
  return(multiLine);
}

/* scopeTestVar
 * desc: This shows how var is scoped in a function.  It is not ES6 specific, JavaScript always
 *       worked this way.
 */
function scopeTestVar() {
  // For var all inner declarations don't reallocate the variable.
  var x = 1;
  {
    // This var definition refers back to the origin definiton of x and changes it's value
    var x = 2;
  }
  {
    // This var definition refers back to the origin definiton of x and changes it's value
    var x = 3;
  }
  // At this point x=3
  return(x);
}

/* scopeTestLet
 * desc: This shows how 'let' has different scoping behavior from 'var'
 */
function scopeTestLet() {
  // For let we expect the variables defined in the inner scopes to reallocate the variable.
  let x = 1;
  {
    // This reallocates the variable and puts 2 in it.  Original x is unaffectd.
    let x = 2;
  }
  {
    let x = 3;
  }
  // At this point only x=1 remains.
  return(x);
}

class PersonClass {
  // Note there are no member variable here.  They are created in the constructor.
  constructor(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
  }

  // Getters and setters, but all member variables are public so these
  // are not really protecting anything.
  getName() {
    // Memeber variables are always accesed using this.
    return( this.name );
  }

  getAddress() {
    return( this.address );
  }

  getAge() {
    return( this.age );
  }

  setName(aName) {
    this.name = aName;
  }
}

class Employee extends PersonClass {

  constructor(name, address, age, id) {
    super(name, address, age);
    this.empId = id;
  }

  getEmpId() {
    return(this,empId);
  }
}

/* forEachTest
 * desc: Shows how to iterate over and array using forEach calling a function on each element in the array
 */
function forEachTest(aNumbersArray) {

  let result = [];
  function timesTwo(number) {
    result.push(2*number);
  }
  aNumbersArray.forEach(timesTwo);
  return(result);
}

/* forEachAnonymousTest
 * desc: Shows how to iterate over and array using forEach calling a function on each element in the array
 *       This version uses an anonymous function
 */
function forEachAnonymousTest(aNumbersArray) {

  let result = [];
  aNumbersArray.forEach( (number) => { result.push(2*number) } );
  return(result);
}

/* mapArray01
 * desc: A simple example of how to map across an array, perform and operation on each element and return a new array
 */
 function mapArray01(anArrayOfNumbers) {
   return(anArrayOfNumbers.map( (element) => {
     return(2*element);
   }));
 }

 /* filterArray01
  * desc: A simple example of how to filter an array, select elements based on a condition and return a new array
  */
  function filterArray01(anArrayOfNumbers) {
    return(anArrayOfNumbers.filter( (element) => {
      if(element%2 != 0) {
        return(element);
      }
    }));
  }

/* objectLiterals
 * desc: Can now return name value pairs where the names are filled in automatically.
 */
 function objectLiterals(title, author, genre) {
   return({
     title,
     author,
     genre
   });
 }

 /* multipleParameter
  * desc: Use the ... ellipsis notation to handle an arbitrary number of parameters in a function.
  */
  function multipleParameters(requiredParam, ...manyParams) {
    let returnAry = [ requiredParam ];
    return(returnAry.concat(manyParams));
  }

/* spreadTheArray
 * desc: Another use for the ... ellipsis notation is to take an array and spread it out definiton
 *       its individual values.
 */
function spreadTheArray(paramFromValue, p0, p1, p2, p3) {

    return({
      paramFromValue,
      p0,
      p1,
      p2,
      p3
    });
}


export { defaultParametersMultiply, templateLiterals, multiLineStrings,
  scopeTestVar, scopeTestLet, PersonClass, Employee, forEachTest, forEachAnonymousTest,
  mapArray01, filterArray01, objectLiterals, multipleParameters, spreadTheArray }
