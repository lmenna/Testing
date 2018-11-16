/* Object01.js
 * desc: Code to test object oriented coding in JavaScript.  JavaScript allows for
 *       many different coding styles, imperative, functional and object oriented.
 *
 */

// Some test code to see how object behave in JavaScript
var p1 = new Product("p1", 100.00);
var p2 = new Product("p2", 100.00);
var book = new Book("b1", 5.00, "author1");
var b = new Basket();
// Add one p1 to the basket
b.addProduct(1, p1);
// Add two p2's to the basket
b.addProduct(2, p2);
b.addProduct(1, book);
b.printShoppingInfo();

/* Product(_name, _price)
 * desc: One way to create a class in JavaScript is to use functions.  In this
 *       case we create a function called Product to represent a class.
 */
function Product(_name, _price) {

  // Member variable are scoped to the Product function.
  // Note: All varables and methods are public.
  const name = _name;
  const price = _price;

  // Getter method for name
  this.getName = function() {
    return name;
  };

  // Getter method for price
  this.getPrice = function() {
    return price;
  };
}

/* Book(_name, _price, _author)
 * desc: This is what inheritance looks like using functions as classes
 */
function Book(_name, _price, _author) {
  Product.call(this, _name, _price);

  const author = _author;

  this.getAuthor = function() {
    return author;
  }
}

/* Basket()
 * desc: Similar to Product we define the class Basket as a function.  Basket will
 *       manage an array of Products
 */
function Basket() {

  const products = [];

  // Add a product to the bakset list
  this.addProduct = function(amount, product) {
    products.push(...Array(amount).fill(product));
  };

  // Sum over all products in the list and return the total price
  this.calcTotal = function() {
    return products
      .map(product => product.getPrice())
      .reduce((a, b) => a + b, 0);
  };

  // Print the list of all products to the console.
  this.printShoppingInfo = function() {
    console.log('You have to pay a total of: $' + this.calcTotal());
  };
};
