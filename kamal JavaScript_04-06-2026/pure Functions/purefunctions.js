// pure function 

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
console.log(add(10, 20));

function calculateDiscount(price, discount) {
    return price - discount;
}

console.log(calculateDiscount(1000, 100));

console.log(calculateDiscount(1000, 100));

// impure functions

let count = 0;

function increment() {
    count++;
    return count;
}

console.log(increment());
console.log(increment());
console.log(increment());