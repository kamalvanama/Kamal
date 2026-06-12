// Dom 

// Document Object Model

// it will attach the document in the form of a tree structue



// getElementById
const heading = document.getElementById("title");
console.log(heading);



document.getElementById("demo");

function changeText() {
    document.getElementById("demo").innerHTML = "Text clr Changed!";
}

function changeColor() {
    document.getElementById("title").style.color = "green";
}
let hi=document.getElementsByClassName('info');
hi[0].innerHTML='Kamalakar';


// getElementsByClassName

let elements = document.getElementsByClassName("demo");

console.log(elements.length); // 3

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].textContent);
}

// querySelector

const element = document.querySelector("#demo");
console.log(element.textContent);

// querySelectorAll

<ul>
  <li class="fruit">Apple</li>
  <li class="fruit">Banana</li>
  <li class="fruit">Mango</li>
</ul>

