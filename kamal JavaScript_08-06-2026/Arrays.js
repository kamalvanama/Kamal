// Arrays 
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);let marks = [85, 90, 78, 92, 88];

let total = 0;

for (let mark of marks) {
    total += mark;
}

let average = total / marks.length;

console.log("Total Marks:", total);
console.log("Average:", average);

// Multidimensional Array

let students = [
    ["india", 22],
    ["japan", 24],
    ["Londan", 21]
];

console.log(students);

// Adding Elements to an Array
// At the Beginning

let fruits = ["Apple", "Banana", "Orange"];

let removedItem = fruits.shift();

console.log(removedItem);
console.log(fruits);

// at the end 


let fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);

// At Any Position

let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 0, "Mango");

console.log(fruits);

let numbers = [1, 2, 5];

numbers.splice(2, 0, 3, 4);

console.log(numbers);

// Accessing Elements from an Array
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

let colors = ["Red", "Green", "Blue"];

console.log(colors[0]);

let colors = ["Red", "Green", "Blue"];

console.log(colors[colors.length - 1]);

// Removing Elements from an Array

// elements Remove from the End

let fruits = ["Apple", "Banana", "Orange"];

fruits.pop();

console.log(fruits);

// elements Remove from the End

let fruits = ["Apple", "Banana", "Orange"];

fruits.pop();

console.log(fruits);

// elemnts Remove from the Beginning

let fruits = ["Apple", "Banana", "Orange"];

fruits.shift();

console.log(fruits);