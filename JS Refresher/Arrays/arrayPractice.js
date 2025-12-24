//Inventory management System

//You Just recived of two new products: a "Vision Pro" and a "Galaxy Fold". How would you add these to your existing inventory list so they appear at the end of your database?

//Push for new shipment

let inventory = ["iPhone 15", "MacBook M3", "Pixel 8"];

inventory.push("Vision Pro", "Galaxy Fold");

console.log(inventory);

//Challange 2: Price Hike(map)
//Inflation has hit. You've an array of prices, and you need to create a new array where every single price is increased by 10%

let prices = [100, 200, 400];

let newPrices = prices.map((price) => price * 1.1);
console.log(newPrices);

//filter method
//A customer enters your store and asks to see only the "premium" items.In your system, any item costing $1000 or more is considered premium. How do you extract these itmes from your list?

let products = [
  { name: "iPhone", price: 900 },
  { name: "MacBook", price: 2500 },
  { name: "AirPods", price: 200 },
  { name: "Monitor", price: 1200 },
];
let premiumItems = products.filter((item) => item.price >= 1000);

console.log(premiumItems);

//Serial number search(find)
//A customer brings a broken device with the serial number SN-998. You've a massive list of items sold. How do you quickly find the single object that matches that serial number?

let soldItems = [
  { id: "SN-102", owner: "Alice" },
  { id: "SN-998", owner: "Bob" },
  { id: "SN-555", owner: "Charlie" },
];

let foundItme = soldItems.find((item) => item.id === "SN-998");

console.log(foundItme.owner);

//The "Flash Sale" Removal(pop & shift)
//You've a "deal of the hour"list. you need to remove the
//  oldest deal (at the start of the array) to make room for new ones, and
// also remove the very last item becouse it just went of of the stock

let deals = [
  "50% off watch",
  "BOGO Cases",
  "Free screen protector",
  "10% off Mac",
];

//Remove the first item
let oldestDeal = deals.shift();

//remove the last item
let outOfStock = deals.pop();

console.log(deals);

//The "Ultimate" Method: reduce: used for calculating a single value from a whole list
//You want to calculate the total value of all items in a customer's shopping cart.
// Each item has a price and a quantity. How do you compute the total cost efficiently?

const cart = [
  { item: "Phone", price: 800 },
  { item: "Case", price: 90 },
  { itme: "Charger", price: 200 },
];
// "sum" starts at 0, 'product' is each itme in the array
const totalBill = cart.reduce((sum, product) => {
  return sum + product.price;
}, 0);
console.log(totalBill);

//Method Chaining (The "Boss level" Move)
//You can string these methods together like a factory assembly line eg
//you have a list of products, filter out itmes which are out of stock, map the remaining itmes to include
//a 15% tax, Find a specific on e to display

const shelve = [
  { name: "laptop", price: 1000, stock: true },
  { name: "phone", price: 700, stock: true },
  { name: "tablet", price: 500, stock: false },
];
const checkOutItem = shelve.filter((items) => items.stock === true);
//console.log(checkOutItem);
shelve.map((items) => items.price * 1.15);
shelve.find((price) => price > 500);

console.log(checkOutItem);

//.slice(): takes a slice of an array and reyturns it as a new array. it doesn't change the original
//You got a "Trending Products" list of 10 itmes, but your homepage only has a space
//to display top 3. how  do you grab them?

let trending = ["phone", "tesla", "vision pro", "ps5", "laptop"];

//slice (start, end)-> starts at index 0, stops before index 3
let topThree = trending.slice(0, 3);
console.log(topThree);

//.splice()->It can change the original array. it can remove items, add itmes
// or do both at the same time

//in your inventory, "monitor" (at index 1) is damaged. You need to remove it
//and insert two new items("Keyboard" and "mouse") in its place

let stock = ["laptop", "Monitor", "webcam"];
//splice(index, howManyToRemove, item1, item2...)
stock.splice(1, 1, "Keyboard", "Mouse");

console.log(stock);

//libray system:

const library = [
  { title: "The Great Gatsby", pages: 180 },
  { title: "1984", pages: 328 },
  { title: "Moby Dick", pages: 635 },
  { title: "The Hobbit", pages: 310 },
  { title: "The Alchemist", pages: 208 },
];
const loss = library.splice(2, 1);
//console.log(library);
const staffPicks = library.slice(0, 2);
//console.log(staffPicks);
const totalPages = library.reduce((sum, book) => {
  return sum + book.pages;
}, 0);
console.log("Remaining Libray:", library.length);
console.log("Staff Picks:", staffPicks);
console.log("Total Pages in Library:", totalPages);

const library2 = [
  { title: "The Great Gatsby", pages: 180 },
  { title: "1984", pages: 328 },
  { title: "The Hobbit", pages: 310 },
];

// findIndex returns the position (0, 1, 2...) of the first match
const indexToRemove = library2.findIndex((book) => book.title === "The Hobbit");

console.log(indexToRemove); // 2

// Now you can use that index in splice!
library2.splice(indexToRemove, 1);
