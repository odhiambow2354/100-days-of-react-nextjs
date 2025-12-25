//Task 1: Basic Filtering

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
    inStock: true,
  },
  {
    id: 2,
    name: "Phone",
    price: 500,
    inStock: false,
  },
  {
    id: 3,
    name: "Headphones",
    price: 150,
    inStock: true,
  },
  {
    id: 4,
    name: "Monitor",
    price: 300,
    inStock: true,
  },
];
//finding products which are in stock

const productsInStock = products.filter((products) => {
  return products.inStock === true;
});
console.log(productsInStock);

//Task 2: Transforming Data
const productsName = products.map((products) => {
  return products.name.toUpperCase();
});
console.log(productsName);

//task 3: Finding & conditional Logic
const product = products.find((p) => p.name === "Phone");
if (product) console.log("Product found");
else {
  console.log("Product not found");
}
//task 4: calculation with Reduce
const cart = [
  { product1: "Laptop", price: 800, quantity: 1 },
  { product2: "Phone", price: 500, quantity: 2 },
  { product3: "Headphones", price: 150, quantity: 3 },
];
const totalBill = cart.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);
console.log(totalBill);

//task 5: inventory update(mutation vs immutability
const inventory = [
  { id: 1, itm: "Pen", quantity: 20 },
  { id: 2, itm: "Notebook", quantity: 5 },
  { id: 3, itm: "Eraser", quantity: 15 },
];
const newInventoryArray = inventory.map((item) =>
  item.itm === "Notebook" ? { ...item, quantity: item.quantity - 3 } : item
);
console.log(inventory);

//Task 6: Sorting
const sortedProducts = products.sort((a, b) => {
  return b.price - a.price;
});
console.log(sortedProducts);

//task 7: Real-World logic

const orders = [
  { user: "Alice", total: 250, status: "completed" },
  { user: "Bob", total: 120, status: "pending" },
  { user: "Charlie", total: 300, status: "completed" },
  { user: "Diana", total: 90, status: "cancelled" },
];

const completedOrders = orders.filter((order) => {
  return order.status === "completed";
});
console.log(completedOrders);

const totalRevenue = completedOrders.reduce((sum, order) => {
  return sum + orders.total;
}, 0);

const result = {
  completedOrders: completedOrders.length,
  totalRevenue: totalRevenue,
};
console.log(result);
