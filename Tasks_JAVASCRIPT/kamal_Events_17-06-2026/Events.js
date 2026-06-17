// execution flow of bubbling and capturing

// Event bubbling Flow

document.getElementById("grandparent").addEventListener("click", () => {

    console.log("Grandparent");
});

document.getElementById("parent").addEventListener("click", () => {

    console.log("Parent");
});

document.getElementById("child").addEventListener("click", () => {

    console.log("Child");
});

// Event Capturing Flow

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent");
}, true);

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent");
}, true);

document.getElementById("child").addEventListener("click", () => {
    console.log("Child");
}, true);