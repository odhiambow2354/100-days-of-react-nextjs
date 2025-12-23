const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your password: ", (password) => {
  if (password === "Hello") {
    console.log("Access granted");
  } else if (password === "hello") {
    console.log("lower case hello detected");
  } else {
    console.log("Access denied");
  }
  rl.close();
});

//for loop for arrays
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//for...of loop for arrays
for (const fruit of fruits) {
  console.log(fruit);
}
