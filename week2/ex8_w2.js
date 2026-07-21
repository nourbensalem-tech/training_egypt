//version 1 
fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(data => console.log(data))

.catch(error => console.log(error));

//version 2
async function getUsers() {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const users = await response.json();

        console.log(users);

    } catch(error){

        console.log(error);

    }

}

getUsers();