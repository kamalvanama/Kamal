// objects

// in objects data wi;; be stored in key value pairs
// keys will be of strings
// value can be of any data type
// keys and valus will be seperated by ,
// Each key value plair will beseperated by ,
// { }

// Related data

const person = {
    name: "Kamal",
    age: 25,
    city: "Vijayawada"
};

console.log(person);

const student = {
    name: "Kamal",
    age: 25
};

console.log(student.name);
console.log(student.age);

const teacher = {
    name: "srinuvasRao",

    subject: "Mathrmatics",

    experience: 5

};

console.log(teacher.subject);

// Creating Objects

 function person2(name, age) {

    this .name = name;

    this .age = age;

 }

 const person1 = new person2 ("kamal",25);

 console.log(person2 .name); 

 const employee = {};

employee.name = "Ravi";
employee.age = 20;
employee.course = "COPA";

console.log(student);

const car = new Object();

car.brand = "Toyota";
car.model = "Innova";
car.year = 2024;

console.log(car);

const product = new Object();

product.name = "Laptop";
product.price = 45000;
product.inStock = true;

console.log(product);

const student2 = new Object();

student2.id = 101;
student2.name = "Kamal";
student2.marks = 85;

student2.display = function() {
    console.log("ID:", this.id);
    console.log("Name:", this.name);
    console.log("Marks:", this.marks);
};

student2.display();

const bike = new Object();

bike.brand = "Royalenfield";
bike.model = "clasic350";
bike.price = 200000;

bike.showDetails = function() {
    console.log(this.brand, this.model, this.price);
};

bike.showDetails();

// Access Object Properties

const memeber = {
    name: "Kamal",
    age: 25
};

console.log(memeber.name);
console.log(memeber.age);

console.log(person["name"]);
console.log(person["age"]);

// Update Object Properties

const person3 = {
    name: "Kamal",
    age: 25,
    city: "Guntur"
};

console.log("Before Update:");
console.log(person3);

person3.age = 26;

console.log("After Update:");
console.log(person3);

const employee1 = {
    name: "Suresh",
    salary: 30000
};

employee1["salary"] = 40000;

console.log(employee1);

// Add New Properties

const person0 = {
    name: "Kamal",
    age: 25
};

console.log("Before Adding Property:");
console.log(person0);


person.city = "Guntur";

console.log("After Adding Property:");
console.log(person);

const employee0= {
    name: "Suresh"
};

employee0["salary"] = 50000;
employee0["department"] = "IT";

console.log(employee0


);
const mobile = {
    brand: "Samsung",
    model: "Galaxy S24"
};

console.log("Original Object:");
console.log(mobile);

// Delete Object Properties

const lorry = new Object();

lorry.brand = "volvo";
lorry.model = "volvo vnl";
lorry.year = 2025;

console.log("Before Delete:");
console.log(lorry);


delete lorry.year;

console.log("After Delete:");
console.log(lorry);
