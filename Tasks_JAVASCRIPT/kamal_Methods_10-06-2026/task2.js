// methods

const person = {
    name: "Kamal",

    greet: function () {
        console.log("Hello!");
    }
};

const calculator = {
    add: function (a, b) {
        return a + b;
    },

    multiply: function (a, b) {
        return a * b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.multiply(10, 5));

const car = {
    brand: "Toyota",

    start() {
        console.log(this.brand + " is starting...");
    },

    stop() {
        console.log(this.brand + " has stopped.");
    }
};

car.start();
car.stop();

// forEach() Method

const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});

const numbers = [10, 20, 30, 40];

numbers.forEach(num => {
    console.log(num);
});

// Object Properties and Methods

const persons1 = {
    name: "Kamal",
    age: 22,
    city: "Guntur"
};

console.log(persons1.name);
console.log(persons1.age);
console.log(persons1.city);

const persons2 = {
    name: "Kamal",
    age: 22,

    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
};

persons2.introduce();

const employee = {
    id: 101,
    name: "rambabu",
    salary: 60000,

    displayInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
    },

    increaseSalary(amount) {
        this.salary += amount;
    }
};

employee.displayInfo();

employee.increaseSalary(5000);

console.log("Updated Salary:", employee.salary);