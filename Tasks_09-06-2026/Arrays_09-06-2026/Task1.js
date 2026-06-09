// Array.some()

const numbers = [1, 3, 5, 8, 9];

const hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven);

const marks = [35, 28, 40, 22];

const passed = marks.some(mark => mark >= 35);

console.log(passed);

const ages = [12, 15, 17];

const isAdult = ages.some(age => age >= 18);

console.log(isAdult);

// Array.every()

const persons = [18, 22, 25, 30];

const canVote = persons.every(age => age >= 18);

console.log(canVote);

const names = ["Ravi", "Kiran", "John"];

const result = names.every(name => name.length > 3);

console.log(result);

const number1 = [2, 4, 6, 8];

const result1 = number1.every(function(num) {
    return num % 2 === 0;
});

console.log(result1

);
const points = [75, 82, 90, 65];

const allPassed = points.every(mark => mark >= 35);

console.log(allPassed);

// Looping Through Arrays

const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const fruits2 = ["Apple", "Banana", "Mango", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}


// join ()
const letters = ["J", "S"];

console.log(letters.join(""));

const words = ["I", "love", "JavaScript"];

const sentence = words.join(" ");

console.log(sentence);

const numbers2 = [1, 2, 3, 4];

console.log(numbers2.join(" | "));

// sort() Method

let numbers1 = [100, 25, 5, 70];

numbers1.sort();

console.log(numbers1

);

let students = [
  { name: "Ravi", age: 22 },
  { name: "Kiran", age: 20 },
  { name: "Anu", age: 24 }
];

students.sort((a, b) => a.age - b.age);

console.log(students);

let employees = ["Ravi", "Anu", "Kiran"];

students.sort();

console.log(employees);

let marks1 = [85, 45, 95, 60, 75];

// Ascending
console.log(marks1.sort((a, b) => a - b));

// Descending
console.log(marks1.sort((a, b) => b - a));

// Array Flattening

const arr = [1, [2, 3], [4, [5, 6]]];

console.log(arr.flat());

function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatten([1, [2, 3], [4, [5, 6]]]));

// Removing Duplicates
// Using Set

const numbers3 = [1, 2, 3, 2, 4, 1, 5];

const uniqueNumbers = [...new Set(numbers3)];

console.log(uniqueNumbers);

// Using filter()
const numbers0 = [1, 2, 3, 2, 4, 1, 5];

const uniqueNumbers1 = numbers0.filter((value, index, array) => {
    return array.indexOf(value) === index;
});

console.log(uniqueNumbers1

);

// indexOf()

let text = "Hello world";

let pos = text.indexOf("world");

console.log(pos); 

// lastIndexOf()

let colors = ["red", "blue", "green", "blue", "yellow"];

console.log(colors.lastIndexOf("blue", 2));

let points1 = [85, 90, 75, 90, 95];

let lastPosition = marks.lastIndexOf(90);

console.log("Last occurrence of 90:", lastPosition);

// map() Method

const numbers5 = [1, 2, 3, 4, 5];

const doubled = numbers5.map(num => num * 2);

console.log(doubled);

const identity = ["kamal", "ravi", "suresh"];

const upperNames = identity.map(name => name.toUpperCase());

console.log(upperNames);

const users = [
    { name1: "Kamal", age: 22 },
    { name2: "Ravi", age: 25 },
    { name3: "Suresh", age: 28 }
];

const names0 = users.map(user => user.name);

console.log(names0);

// filter()
const memebers = [
    { name: "John", age: 25 },
    { name: "Sara", age: 18 },
    { name: "Mike", age: 30 }
];

const adults = memebers.filter(emp => emp.age >= 21);

console.log(adults);

const Count = [1, 2, 3, 4];

const outcome = numbers.filter(num => num > 2);

console.log(Count); 
console.log(outcome);  

// reduce()

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((acc, curr) => {
    return acc.concat(curr);
}, []);

console.log(flatArray);

const cart = [
    { item: "Laptop", price: 80000 },
    { item: "Mouse", price: 5000 },
    { item: "Keyboard", price: 6000 }
];

const total = cart.reduce((acc, product) => {
    return acc + product.price;
}, 0);

console.log(total);