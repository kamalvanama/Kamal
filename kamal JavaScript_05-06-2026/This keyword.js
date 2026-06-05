// this key word

function show() {
    console.log(this);
}

show();


function functionname(){

    console.log(this)

    console.log()}
    console.log(this === window); 

    const person = {
    name: "Kamal",
    age: 22,

    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet();

// this Inside an Object Method

const student = {
    name: "Kamalkar",
    age: 22,

    display() {
        console.log(this.name);
        console.log(this.age);
    }
};

student.display();

// this Inside a Constructor Function
function Student(name, age) {
    this.name = name;
    this.age = age;
}

const s1 = new Student("Kamal", 22);

console.log(s1.name);
console.log(s1.age);


person.greet();

const obj = {
    name: "JavaScript",

    regularFunction: function () {
        console.log("Regular:", this.name);
    },

    arrowFunction: () => {
        console.log("Arrow:", this.name);
    }
};

obj.regularFunction();
obj.arrowFunction();

// using call()

const student1 = {
    name: "Rahul",
    showName: function () {
        console.log(this.name);
    }
};

const student2 = {
    name: "Priya"
};

student1.showName.call(student2);

// using apply() Method

const employee = {
    name: "Ravi"
};

function introduce(age, job) {
    console.log(
        `Name: ${this.name}, Age: ${age}, Job: ${job}`
    );
}

introduce.apply(employee, [25, "Developer"]);

// using bind() Method

const user = {
    name: "Kamal"
};

function welcome() {
    console.log(`Welcome ${this.name}`);
}

const boundFunction = welcome.bind(user);

boundFunction();
