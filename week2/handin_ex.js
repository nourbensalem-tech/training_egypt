"use strict";
async function getUserss() {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        data.users.forEach((user) => {
            console.log(`ID: ${user.id}`);
            console.log(`Name: ${user.firstName} ${user.lastName}`);
            console.log(`Email: ${user.email}`);
            console.log("----------------");
        });
    }
    catch (error) {
        console.error("Error:", error);
    }
}
getUserss();
