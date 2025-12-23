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
