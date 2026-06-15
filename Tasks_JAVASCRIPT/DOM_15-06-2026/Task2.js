// DOM Traersing 

// Get the parent element

let child = document.getElementById("child");


console.log(child.parentElement);

console.log(child.parentElement.parentElement);

let child = document.getElementById("child");

console.log("Parent ID:", child.parentElement.id);
console.log("Grandparent ID:", child.parentElement.parentElement.id);


// getting child element by parent element
let parent = document.getElementById("parent");
let children = parent.children;

console.log(children);

let Kamalakar = document.getElementById("employee")
console.log(b)
let child=b.children
console.log(child)

const parent = document.getElementById("parent");
const firstChild = parent.firstElementChild;

console.log(firstChild);

// getting the first child by parent

const parent = document.getElementById("parent");
const firstChild = parent.firstElementChild;

console.log(firstChild);
console.log(firstChild.textContent);

let container = document.getElementById("container");


console.log(container.children);

console.log(container.firstElementChild);

console.log(container.lastElementChild);

console.log(container.children[1].textContent);


// by using sibling nodes

let item2 = document.getElementById("item2");

// Previous sibling element
console.log(item2.previousElementSibling);

// Next sibling element
console.log(item2.nextElementSibling);

let item1 = document.getElementById("item1");

item1.nextElementSibling.textContent = "CSS Updated";

// DOM elements dynamically using JavaScript.

let button = document.createElement("button");


button.textContent = "Click Me";


document.body.appendChild(button);

let para = document.createElement("p");
para.textContent = "This is a paragraph.";
para.setAttribute("class", "myClass");

document.body.appendChild(para);

// Adding Elements to the DOM

newElement.textContent = "Hello, World!";

const para = document.createElement("p");
para.textContent = "Hello, World!";

document.body.appendChild(para);

document.body.appendChild(newElement);

parentElement.insertBefore(newElement, existingElement);

// Remove Element from Dom

function removeElement() {
  const element = document.getElementById("message");
  element.remove();

}
const list = document.getElementById("list");
list.remove();

const parent = document.getElementById("list");
const child = parent.firstElementChild;

parent.removeChild(child);

// event listeners for button click
const button =
document.getElementById("kamal");

button.addEventListener("click")

document.getElementById("massage").innerText

// event listeners forinput event

const inputField = document.getElementById("nameInput");
const output = document.getElementById("output");

inputField.addEventListener("input", function () {
    output.textContent = "You typed: " + inputField.value;

});

// event listeners for mouse event
document.addEventListener("mousemove", (event) => {
    console.log(`X: {event.clientX}, Y: {event.clientY}`);

});