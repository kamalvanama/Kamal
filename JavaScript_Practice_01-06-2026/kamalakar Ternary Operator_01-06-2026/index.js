et age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

let number = 7;

let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);
let number = -5;

let result = number > 0 ? "Positive" : "Negative";

console.log(result);
let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);

let name = "Kamal";
let age = 25;
let marks = 82;
let isLoggedIn = true;

console.log("Name:", name);

console.log(age >= 18 ? "Adult" : "Minor");

console.log(marks >= 35 ? "Pass" : "Fail");

console.log(
  marks >= 90 ? "A+" :
  marks >= 75 ? "A" :
  marks >= 60 ? "B" :
  marks >= 35 ? "C" :
  "Fail"
