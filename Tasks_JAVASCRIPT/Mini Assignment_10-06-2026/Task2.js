// Using array literal
let vegatables= ["brinjal", "onion", "beens"];

// Using Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

let vegatables0= ["brinjal", "onion", "beens"];

console.log(vegatables[0]); 
console.log(vegatables[2]); 

// Array Searching Techniques

// lastIndexOf()
let arrange = [10, 20, 30, 40];

console.log(arrange.indexOf(30)); 
console.log(arrange.indexOf(50)); 

// lastIndexOf()
let arr = [10, 20, 30, 20];

console.log(arrange.lastIndexOf(20)); 

// includes()

let arrange1 = [10, 20, 30];

console.log(arrange1.includes(20)); 
console.log(arrange1.includes(50)); 

// find()
let Count = [6, 18, 80, 200];

let result = Count.find(num => num > 10);

console.log(result); 

// Array Transformation Methods

// map()

const count1 = [1, 2, 3, 4];

const doubled = count1.map(num => num * 2);

console.log(doubled);

// reduce()
const count2 = [1, 2, 3, 4];

const sum = count2.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// Array Iteration Methods

// forEach()
const numbers7= [1, 2, 3];

numbers7.forEach(num => {
    console.log(num);
}

);

// every()
const numbers8 = [2, 4, 6];

console.log(numbers8.every(num => num % 2 === 0));


// Built-in sort() Method
let numbers9 = [5, 2, 8, 1, 9];

numbers9.sort((a, b) => a - b);

console.log(numbers9);

// Selection Sort

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

console.log(selectionSort([5, 2, 8, 1, 9]));

