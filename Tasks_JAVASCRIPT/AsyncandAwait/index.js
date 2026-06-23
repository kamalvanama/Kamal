// async and await 
// it is used to handele asynchronous operation in a cleaner and more readable

// async keyboard 

async function myfunction() {
    return "Hello";
}

async function greet() {
  return "Hello World";
}

greet().then((message) => {
  console.log(message);
});

function greet() {
    return Promise.resolve("Hello world");
}

// Returning a promise

async function getData() {
    return Promise.resolve("Data Recevied");
    
}
getData().then((data) => {
    console.log(data);
});

async function greet() {
    return "Hello, kamalakar";
}

greet().then((message) => {
    console.log(message);
});

// Await Keyboard

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });
}

async function getData() {
  const result = await fetchData();
  console.log(result);
}

getData();

function task(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(message), delay);
  });
}

async function runTasks() {
  const result1 = await task("Task 1", 1000);
  console.log(result1);

  const result2 = await task("Task 2", 1000);
  console.log(result2);
}

runTasks();

// Error Handling with Async/Await

async function fetchData() {
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchData();

function getUser() {
  return new Promise((resolve, reject) => {
    reject("User not found");
  });
}

async function displayUser() {
  try {
    const user = await getUser();
    console.log(user);
  } catch (error) {
    console.log("Failed:", error);
  }
}

displayUser();

async function handleLogin() {
  try {
    const result = await loginUser("admin", "1234");
    console.log(result);
  } catch (error) {
    console.log("Login Failed:", error);
  }
}

handleLogin();

// Desttucturing

// Examples using Arrar Destructuring

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const [firstDay, , , , lastDay] = days;

console.log(firstDay);
console.log(lastDay);  

const numbers = [10, 20, 30, 40, 50];

const [first, second, ...rest] = numbers;

console.log(first);  
console.log(second); 
console.log(rest);   


const fruits = ["tiger", "lion", "Elephant"];

const [first1, second2, third3] = fruits;

console.log(first1);  
console.log(second2); 
console.log(third3);  

// Examples using Object Destructuring

const {property1, property2 } = Object;

const person = {
  name: "Kamal",
  age: 22,
  city: "Vijayawada"
};

const { name, age, city } = person;

console.log(name); 
console.log(age);  
console.log(city); 

const person1 = {
  name: "Kamal",
  age: 22
};


const { name: userName, age: userAge } = person1;

console.log(userName); 
console.log(userAge);  


const user = {
  person: "Kamal",
  age: 22,
  city: "Vijayawada",
  country: "India"
};

const { member, ...otherDetails } = user;

console.log(name);         
console.log(otherDetails);


// Iterators

const vegtables = ["brinjal", "cucumbar", "onion"];

const iterator = vegtables[Symbol.iterator]();

console.log(iterator.next());

console.log(iterator.next());


console.log(iterator.next());


console.log(iterator.next());

for (const num of numbers) {
    console.log(num);
}

// using next() 

const iterators = numbers[Symbol.iterator]();

console.log(iterators.next());

console.log(iterators.next());

console.log(iterators.next());

const colors = ["Red", "Green", "Blue"];

const iterator1 = colors[Symbol.iterator]();

console.log(iterator1.next());

console.log(iterator1.next());

console.log(iterator1.next());

console.log(iterator1.next());

// Generator Function 

function* numbers0() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers0();

console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 

function* getNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen1 = getNumbers();

console.log(gen1.next().value); 
console.log(gen1.next().value); 
console.log(gen1.next().value)

