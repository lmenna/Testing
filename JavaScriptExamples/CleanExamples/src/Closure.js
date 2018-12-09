
function Person(pName) {

  // The _name variable is not accessible from outside the Person function
  var _name = pName;

  // The getName function provides access to the _name variable.
  // This function is available outside and can set access the values closed inside.
  // It is refered to as a Closure.
  // To say it another way, a closure is a function that has access to the parent scope,
  // even after the parant function has closed.
  this.getName = function() {
    return _name;
  };
}

export { Person }
