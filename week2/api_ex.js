// api content fake user 

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {

        console.log(users);

    })
    .catch(error => {

        console.log(error);

    });

// author solution with async await
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        users.forEach(user => {
            console.log(`Name: ${user.name}`);
            console.log(`Email: ${user.email}`);
            console.log("----------------");
        });
    } catch (error) {
        console.error(error);
    }
}

getUsers();