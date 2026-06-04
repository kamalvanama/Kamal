// java For Loop

for (intializaion; Condition; incerement/decrement)

    for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// while loop

// while (Condition) {

// }

let i = 1;

while (i <= 5) {
    console.log("Count:", i);
    i++;

}


// Do While Loop
do {
    // code to execute
} while (condition);

do {
    console.log("Count:", i);
    i++;

}

do {
    console.log("Count:", i);
    i++;
} while (i <= 5);

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

// for in Loop

let student = {
    name: "Kamal",
    age: 25,
    course: "JavaScript"
};

for (let key in student) {
    console.log(key);
}

let student = {
    name: "Kamal",
    age: 25,
    course: "JavaScript"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}
let product = {
    name: "Laptop",
    price: 50000,
    stock: 10
};

for (let key in product) {
    if (key === "price") {
        console.log("Product Price:", product[key]);
    }
}
// For Of Loop

// loop though arrays

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

let name = "Kamal";

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}let numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    console.log(number);
}

let numbers = [10, 20, 30, 40];
let sum = 0;

for (let num of numbers) {
    sum += num;
}

console.log("Sum =", sum);

