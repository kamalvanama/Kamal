// Scopes

// Global scope
// functional scope
// block scope

// Global scope

var bat = "white"
let net = "green"
const apple = "Red"

function fruit(){
    document.write(bat)
    document.write(net)
    document.write(apple)

}
// by using var
var city = "vijayawada";

function showcity() {
    console.log(city)

}
showcity();

// by using let

let name = "kamalakar";

function greet() {
    console.log(name);
    console.log("Hello world")

}
greet();

// by using const
const company = "woodland"
    
function employee1() {
    console.log(company);

}

function employee2() {
    console.log(company);

}

employee1();
employee2();

// functional scope

function greet() {
    let massage = "hello Javascript";
    console.log(massage);


}

greet();

// function with var
function showyear() {
    var year = 2000;
    console.log(year);
}

showyear();

// Function Scope with let

function outer() {
    let name = "Kamal";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();

function firstFunction() {
    let name = "Kamal";
    console.log(name);
}

function secondFunction() {
    let name = "Ravi";
    console.log(name);
}

firstFunction();
secondFunction();

// Function Scope with const
function showCountry() {
    const country = "India";

    console.log(country);
}

showCountry();

// block scope
{
    let age = 22;

    console.log(age);
}
// Block Scope with const

{
    const country = "japan";

    console.log(country);
}

// Recursive function 


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }

    return n * factorial(n - 1); 
}

console.log(factorial(5));

// IIFE (Immediately Invoked Function Expression)

(function () {

    console.log("IIFE executed!");

}

)();

(function() {
    var connection = "sensitive"
    console.log(connection)
 })
 ()


 // Closure

 function outer() {
    let name = "Kamal";

    function inner() {
        console.log(name);
    }

    return inner;
}

const myFunction = outer();

myFunction();

function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const increment = counter();

increment();
increment();
increment();

// First Class Functions

function greet() {
    return "some where on earth";
}

const message = greet;

console.log(message());


function greet(name) {
    return "hi " + name;
}

function execute(callback) {
    console.log(callback("how are you"));
}

execute(greet);

const sayHi = greet;

console.log(sayHi("Ravi"));
