/* Object01.js
 * desc: Code to test object oriented coding in JavaScript.  JavaScript allows for
 *       many different coding styles, imperative, functional and object oriented.
 *
 */

// ES6 version
// If you are using classes then they need to be defined first.
class Product {
 constructor(name, price) {
   this.name = name;
   this.price = price;
 }
}

class Book extends Product {
 constructor(name, price, author) {
   super(name, price);
   this.author = author;
 }
}

class Basket {
 constructor() {
   this.products = [];
 }

 addProduct(amount, product) {
   this.products.push(...Array(amount).fill(product));
 }

 calcTotal() {
   return this.products
     .map(product => product.price)
     .reduce((a, b) => a + b, 0);
 }

 printShoppingInfo() {
   console.log('one has to pay in total: ' + this.calcTotal());
 }
 
}

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
