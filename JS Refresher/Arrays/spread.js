const hobbies = ["Sports", "Cooking"];

const user = { name: "Max", age: 30 };

//spread operator to copy arrays
const newHobbies = ["reading"];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies); // ['Sports', 'Cooking', 'reading']

//spread operator to copy objects
const extendedUser = { isAdmin: true, ...user };
console.log(extendedUser); // {isAdmin: true, name: 'Max', age: 30}
