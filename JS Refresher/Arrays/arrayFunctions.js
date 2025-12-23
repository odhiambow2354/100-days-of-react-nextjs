//using a task manager app as an example

let tasks = ["Clean Room", "Buy Groceries", "Read a book"];
tasks.push("Study JavaScript");

console.log(tasks);
//removing the first task
tasks.shift();
console.log(tasks);

//search for a task
let myTask = tasks.find((t) => t === "Read a book");
console.log(myTask);
