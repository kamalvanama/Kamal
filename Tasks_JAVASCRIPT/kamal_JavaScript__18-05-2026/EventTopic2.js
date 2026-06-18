// Normal Event 

// Click event


document.getElementById("btn").addEventListener("click", function() {

    document.getElementById("Massage").textContent = "Keep learning Keep Building";

});

document.getElementById("colorBtn").addEventListener("click", function() {

    document.body.style.backgroundColor = "lightblue";
});

// Change Event

const input = document.getElementById("name");

input.addEventListener("change", function() {
    alert("Value changed to: " + input.value);
});

// Submit Event

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Login form submitted!");
});

// Input Event

 const textarea = document.getElementById("message");

        const count = document.getElementById("count");

        textarea.addEventListener("input", function() {

            count.textContent = textarea.value.length;
        });

        // Throttling
  // Scroll event throttling
    function throttle(func, delay) {
  let lastCall = 0;

  return function () {
    let now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func();
    }
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scroll Position:", window.scrollY);
  }, 300)
);


// Debouncing

let action = "bullying";

if (action === "bullying") {
    console.log("The school denounces bullying and promotes kindness.");
} else {
    console.log("The action is acceptable.");
}

// CallBack Function
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Kamal", sayBye);

// Compare normal event handling with throttled and debounced events.

// Normal Event Handling

window.addEventListener("scroll", () => {
    console.log("Scroll event");
});

// Throttling Event Handling

function throttle(func, delay) {
    let lastCall = 0;

    return function () {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func();
        }
    };
}

window.addEventListener(
    "scroll",
    throttle(() => {
        console.log("Scrolling...");
    }, 500)
);

// Debouncing Event Handling

function debounce(func, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

window.addEventListener(
    "keyup",
    debounce(() => {
        console.log("Searching...");
    }, 500)
);


