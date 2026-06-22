// Promises

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});


// using .then()

function getMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 2000);
  });
}

getMessage()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

 // using .catch()

 function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Cannot divide by zero");
        } else {
            resolve(a / b);
        }
    });
}

divide(10, 0)
    .then(result => {
        console.log("Result:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });

    let promise = Promise.resolve(10);

promise
  .then((num) => {
    return num * 2;
  })
  .then((result) => {
    console.log(result);
  });

  // Compare callbacks and Promises with examples.

  // Callback Example

  function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData(function(result) {
    console.log(result);
});


// Promise.all() in JavaScript

// Promises Example

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

fetchData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

const p1 = Promise.resolve("Apple");
const p2 = Promise.resolve("Banana");
const p3 = Promise.resolve("Mango");

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });


  const promise1 = Promise.resolve("HTML Completed");
const promise2 = Promise.resolve("CSS Completed");
const promise3 = Promise.resolve("JavaScript Completed");

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise.race() 

// Using Promise.race()

const deliveryBoy1 = new Promise((resolve) => {
  setTimeout(() => resolve("Delivery Boy 1 arrived"), 5000);
});

const deliveryBoy2 = new Promise((resolve) => {
  setTimeout(() => resolve("Delivery Boy 2 arrived"), 3000);
});

Promise.race([deliveryBoy1, deliveryBoy2])
  .then(result => console.log(result))
  .catch(error => console.log(error));

  // Promise.allSettled()

  const p5 = Promise.resolve("Data loaded");
const p6 = Promise.reject("Network error");
const p7 = Promise.resolve("User found");

Promise.allSettled([p5, p6, p7])
  .then(results => {
    console.log(results);
  });

  // using settimeout

  const task1 = new Promise(resolve =>
  setTimeout(() => resolve("Task 1 Complete"), 1000)
);

const task2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Task 2 Failed"), 2000)
);

Promise.allSettled([task1, task2,])
  .then(results => console.log(results));

  // Promise.any()

  const server1 = new Promise((resolve) => {
  setTimeout(() => resolve("Data from Server 1"), 3000);
});

const server2 = new Promise((resolve) => {
  setTimeout(() => resolve("Data from Server 2"), 1000);
});

const server3 = new Promise((resolve) => {
  setTimeout(() => resolve("Data from Server 3"), 2000);
});

Promise.any([server1, server2, server3])
  .then((data) => {
    console.log(data);
  });

  // Promise states...
  const promise8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 2000);
});

console.log(promise);

// When resolve() was called
const promise9= new Promise((resolve) => {
  resolve("Data received");
});

promise.then((result) => {
  console.log(result); // Data received
});

// Promise execution flow

const promise00 = new Promise((resolve, reject) => {
  console.log("1. Promise started");

  setTimeout(() => {
    resolve("2. Promise resolved");
  }, 2000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("3. End of script");