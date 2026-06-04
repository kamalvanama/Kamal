let person = {
    name: "Kamal",
    age: 25,
    city: "Vijayawada"
};

console.log(person);
console.log(person.name);
console.log(person.age);

let student = {
    name: "Ravi",
    course: "JavaScript"
};

console.log(student.name);
console.log(student.course);

let employee = {
    id: 101,
    company: "TCS"
};

console.log(employee["id"]);
console.log(employee["company"]);

let car = {
    brand: "Toyota"
};

car.color = "Black";
car.model = "Innova";

console.log(car);

let mobile = {
    brand: "Samsung",
    price: 20000
};

mobile.price = 25000;

console.log(mobile);

let user = {
    username: "kamal",
    password: "12345"
};

delete user.password;

console.log(user);

let person = {
    name: "Kamal";

    greet: function () {
        console.log("Hello Welcome");
    }
};