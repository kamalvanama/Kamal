// API calls using Fetch API.

// by using creat data
async function addUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",
    headers: {
        "Content-Type": "application/json"
           },
    body: JSON.stringify({
         name: "Kamal",
        email: "kamal@example.com"
          })
        }
    );

    const data = await response.json();
    console.log(data);
}

addUser();

// put Requestupdate data
async function updateUser() {
    const response = await fetch(
  "https://jsonplaceholder.typicode.com/users/1",
        {
    method: "PUT",
      headers: {
      "Content-Type": "application/json"
          },
body: JSON.stringify({
         id: 1,
        name: "Updated User",
         email: "updated@example.com"
           })
        }
    );

    const data = await response.json();
    console.log(data);
}

updateUser()

// by using multiple users using Fetch
async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    users.forEach(user => {
        console.log(user.name);
    });
}

getUsers();


// API responses dynamically on a webpage.

async function loadPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await response.json();

    let output = "";

    posts.forEach(post => {
        output += `
      <h3>${post.title}</h3>
    <p>${post.body}</p>
      <hr>
      `;
    });

    document.getElementById("posts").innerHTML = output;
}