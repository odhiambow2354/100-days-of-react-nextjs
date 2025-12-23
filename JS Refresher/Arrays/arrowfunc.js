//arrow functions

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// using arrow function with map
console.log(materials.map((material) => material.length));

//destructuring

const array = [1, 2, 3];
const [a, b, c] = array;
console.log(a, b, c); // 1 2 3
