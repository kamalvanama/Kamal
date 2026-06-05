const person = {
    name: "Kamal",
    showName() {
        console.log(this.name);
    }
};

person.showName();

// Changing this with call()

function greet() {
    console.log("Hello " + this.name);
}

const person1 = { name: "Kamal" };
const person2 = { name: "Ravi" };

greet.call(person1); 
greet.call(person2); 


// Using apply()

function introduce(city, country) {
    console.log(
        `I am ${this.name} from ${city}, ${country}`
    );
}

