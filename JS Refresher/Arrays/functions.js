//passing function as value to another function

function greet(name) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  const name = "Alice";
  callback(name);
}

processUserInput(greet);

function handleTimeout() {
  console.log("Timeout occurred!");
}
setTimeout(handleTimeout, 2000); //calls handleTimeout after 2 seconds

//defining function inside another function

function outerFunction() {
  function innerFunction() {
    console.log("Inner function called");
  }
  innerFunction();
}

outerFunction();

//primitive vs reference types in functions

let num = 10;

function modifyPrimitive(value) {
  value += 5;
  console.log("Inside function:", value); // 15
}

modifyPrimitive(num);
console.log("Outside function:", num); // 10

const hobbies = ["Sports", "Cooking"];

hobbies.push("Reading");
console.log(hobbies); // ['Sports', 'Cooking', 'Reading']
