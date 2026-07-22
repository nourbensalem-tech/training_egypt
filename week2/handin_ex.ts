interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

async function getUserss(): Promise<void> {

    try {

        const response = await fetch("https://dummyjson.com/users");

        const data = await response.json();

        data.users.forEach((user: User) => {

            console.log(`ID: ${user.id}`);
            console.log(`Name: ${user.firstName} ${user.lastName}`);
            console.log(`Email: ${user.email}`);
            console.log("----------------");

        });

    } catch (error) {

        console.error("Error:", error);

    }

}

getUserss();