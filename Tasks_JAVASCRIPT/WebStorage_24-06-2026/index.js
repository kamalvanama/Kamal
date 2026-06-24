// web storage

// local Storage
// retrieve data using Local Storage.

function saveName() {
    const name = document.getElementById("nameInput").value;

    localStorage.setItem("username", name);

    alert("Name saved successfully!");
}

function showName() {
    const savedName = localStorage.getItem("username");

    document.getElementById("result").textContent =
        "Saved Name: " + savedName;
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
}
// retrieve data using Session Storage

function saveName() {
    const name = document.getElementById("name").value;

    // Store data in Session Storage
    sessionStorage.setItem("username", name);

    document.getElementById("message").innerText =
        "Name saved successfully!";
}

window.onload = function () {
    const storedName = sessionStorage.getItem("username");

    if (storedName) {
        document.getElementById("message").innerText =
            "Welcome back, " + storedName;
    }
};

// Implement try, catch, finally, and throw statements.

// Using try 

try {
    let num1 = 10;
    let num2 = 5;

    let result = num1 + num2;

    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log(userName); 
} catch (error) {
    console.log("An error occurred:", error.message);
}

// Using Catch

try {
    console.log(userName);
}catch (error) {
    console.log("Error caught");
    console.log(error.message);

}
 try {
    let daya = jarvise.parse("invalid jarvise");

 } catch (error) {
    console.log("invalid jarvise format");


 }

 // Using Finally 

 try {
    console.log("Game Started");
 } catch(error) {
    console.log("error:",error.message);
 } finally {
    console.log("Game Completed");
 }

 try{
    console.log(userName);
 }catch (error) {
    console.log("error caught:", error.message);

 }finally{
    console.log("closing application");
 }

 // Using Throw

 function checkValue(value) {
    if (value < 100) {
        throw new Error("value must be 100 or above");
    }
    console.log("Access Granted");
 }
 try {
    checkValue(100);
 }catch (error){
    console.log("erroe:", error.message);

 }

 function validateName(name) {
    if (name === "") {
        throw "Name cannot be empty";
    }
    console.log("Welcome,", name);
}

try {
    validateName("");
} catch (error) {
    console.log("Error:", error);
}

 // Using Examples of Demonstrating custom error Handling

// using age Validation

function checkage(age) {
    if (age < 25) {
        throw new error("age must be 25 or above");
    }
    return "access granted";
}

try {
    console.log(checkage(25));
}catch (error) {
    console.log("error:",error.message);
}

// using password Validation

function validatePassword(password) {
    if (password.length < 8) {
        throw new Error("Password must contain at least 8 characters");
    }
    return "Password is valid";
}

try {
    console.log(validatePassword("abc"));
} catch (error) {
    console.log("Error:", error.message);
}

// using withdrawal

function withdraw(balance, amount) {
    if (amount > balance) {
        throw new Error("Insufficient balance");
    }
    return balance - amount;
}

try {
    let remainingBalance = withdraw(5000, 7000);
    console.log("Remaining Balance:", remainingBalance);
} catch (error) {
    console.log("Transaction Failed:", error.message);
}

