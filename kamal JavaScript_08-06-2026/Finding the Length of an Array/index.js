
// Basic Array Length
let fruits = ["Apple", "Banana", "Orange", "Mango"];

console.log(fruits.length);
// Array of Numbers

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.length);

// Empty Array

let emptyArray = [];

console.log(emptyArray.length);

let colors = ["Red", "Green", "Blue"];

console.log("Array Length:", colors.length);

// elements using includes()

let fruits = ["Apple", "Banana", "Orange", "Mango"];

console.log(fruits.includes("Banana"));

// Using includes() in an if Statement

let colors = ["Red", "Green", "Blue"];

if (colors.includes("Green")) {
    console.log("Green color is available.");
} else {
    console.log("Green color is not available.");
}

// using indexOf() and lastIndexOf()

let fruits = ["Apple", "Banana", "Orange", "Banana", "Mango"];

console.log(fruits.indexOf("Banana"));

let fruits = ["Apple", "Banana", "Orange", "Banana", "Mango"];

console.log(fruits.lastIndexOf("Banana"));


let items = ["A", "B", "C", "B", "D"];

console.log(items.indexOf("B"));      
console.log(items.lastIndexOf("B"));  

// Comparison of call(), apply(), and bind() 

// call() Example

function greet(city, country) {
    console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
}

const person = {
    name: "Kamal"
};

greet.call(person, "Guntur", "India");

// apply() example

function greet(city, country) {
    console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
}

const person = {
    name: "Kamal"
};

greet.apply(person, ["Guntur", "India"]);

// bind() Example

function greet(city, country) {
    console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
}

const person = {
    name: "Kamal"
};

const boundGreet = greet.bind(person, "Guntur", "India");

boundGreet();