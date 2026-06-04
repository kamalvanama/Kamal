// Function Decleration

function functionname(){

}
function greet() {
    console.log("Hello, Welcome to JavaScript!");
}

// function expression 
// 3 ways

// Named Function Expression
// Anonymous Function Expression
// Arrow Functions  

// var or let or const

// named function 

let a= function functionname(){

}

a()

// anonomus function

let b = function (){


}

// Arrow function

let c = ()=>{

}

// Function Declaration

function calculateArea(length, width) {
    return length * width;
}

console.log(calculateArea(10, 5));

// Function Expression 

const calculateArea = function(length, width) {
    return length * width;
};

console.log(calculateArea(10, 5));


// Function Declaration

function welcome(name) {
    return `Welcome ${name}`;
}

console.log(welcome("Kamal"));

// Function Expression

const farewell = function(name) {
    return `Goodbye ${name}`;
};

console.log(farewell("Kamal"));

// named function 

function functionName() {
    // code
}

function studentDetails(name, course) {
    return `${name} is learning ${course}`;
}

console.log(studentDetails("Kamal", "JavaScript"));

console.log(studentDetails("Ravi", "React"));


// anonomus function

const variableName = function() {
    // code
};

const greet = function() {
    console.log("Hello, JavaScript!");
};

greet();

// Anonymous Function with Parameters

const add = function(a, b) {
    return a + b;
};

console.log(add(10, 20));

const studentInfo = function(name, course) {
    return `${name} is learning ${course}`;
};

console.log(studentInfo("Kamal", "JavaScript"));

console.log(studentInfo("Ravi", "React"));

// Arrow function

const greet = () => {
    console.log("Hello");
};

const greet = () => {
    console.log("Hello, JavaScript!");
};

greet();

const studentInfo = (name, course) => {
    return `${name} is learning ${course}`;
};

console.log(studentInfo("Kamal", "JavaScript"));

console.log(studentInfo("Ravi", "React"));


// Recursive Functions

function factorial(n) {
    // Base Case
    if (n === 0 || n === 1) {
        return 1;
    }

    // Recursive Call
    return n * factorial(n - 1);
}

console.log("Factorial of 5 =", factorial(5));

function fibonacci(n) {
    // Base Cases
    if (n <= 1) {
        return n;
      }

    // Recursive Call
   " return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("6th Fibonacci Number =", fibonacci(6));

// var or let or const


var a = 10;
let b = "kamalakar"
const country = "London"
console.log(a);
console.log(b);
console.log(country);

var name = "kholi";

var name = "dhoni"; 

name = "John"; 

console.log(name);


let age = 22;

age = 23; 

console.log(age);

const country = "India";

console.log(country);


var studentName = "Kamal";

let age = 22;

const course = "JavaScript";

age = 23;

console.log(studentName);
console.log(age);
console.log(course);

// Hoisting with var

console.log(name);

var name = "clock";

console.log(name);

// Hoisting with let

console.log(age);

let age = 22;

// Hoisting with const

console.log(country);

const country = "america";

console.log(student); 

var student = "Kamal";

showMessage();

function showMessage() {
    console.log("Welcome to JavaScript");
}