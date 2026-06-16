// Asynchronous JavaScript


// Asynchronous Example with setTimeout()

console.log("First Code");
console.log("Second Code");


setTimeout(()=>{
    console.log("Third code")

},1000)

console.log("Fourth Code");
console.log("Fifth Code");


console.log("User logged in");

setTimeout(() => {
    console.log("Welcome to the website!");
}, 2000);


// Asynchronous Example with setInterval()

let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log("Count:", count);

    if (count === 2) {
        clearInterval(intervalId);
    }
}, 1000);

console.log("Start");

setInterval(() => {
    console.log("Running every 1 seconds");
}, 1000);

console.log("End");

// Asynchronous Example with clearTimeout()

let timer = setTimeout(() => {
    console.log("Message sent");
}, 5000);


clearTimeout(timer);

console.log("Message cancelled");

function greet() {
    console.log("Hello!");
}

let Timer= setTimeout(greet, 3000); 

// Asynchronous Javascript using clearInterval()

let count1 = 0;

let timer1 = setInterval(() => {
    count1++;
    console.log("Count1:", count1);

    if (count1 === 5) {
        clearInterval(timer1);
        console.log("Interval stopped");
    }
}, 1000);




 function startTimer() {
    let timeLeft = 10;

    const timerDisplay = document.getElementById("timer");

    const countdown = setInterval(() => {
        timerDisplay.textContent = timeLeft;

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's Up!";
        }
    }, 1000);
}