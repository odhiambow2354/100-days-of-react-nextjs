const fruits = [];
fruits.push("banana", "apple", "orange");
console.log(fruits.length); // ['banana', 'apple', 'orange']

const colors = ["red", "green", "blue", "yellow"];
colors[5] = "purple";

colors.forEach((item, index) => {
  console.log(index, item);
});
colors.reverse();
console.log(colors); // ['purple', 'yellow', 'blue', 'green', 'red']
