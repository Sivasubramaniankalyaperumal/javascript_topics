/*
Create → POST

Read → GET

Update → PUT / PATCH

Delete → DELETE
*/

async function getUsers() {   /// to get the data or Json.obj
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Network response failed");
        }

        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUsers();


async function createUser() {   ///to create the user data or Json.obj and send to server
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: "Siva",
                    email: "siva@gmail.com"
                })
            }
        );

        let data = await response.json();
        console.log("Created:", data);
    } catch (error) {
        console.log(error.message);
    }
}

createUser();


async function updateUser() {   /// ///to update the created user data or Json.obj and send to server
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: "Updated S`z"
                })
            }
        );

        let data = await response.json();
        console.log("Updated:", data);
    } catch (error) {
        console.log(error.message);
    }
}

updateUser();

async function deleteUser() {    /// ///to delete the user data or Json.obj
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "DELETE"
            }
        );

        if (response.ok) {
            console.log("User deleted successfully");
        }
    } catch (error) {
        console.log(error.message);
    }
}

deleteUser();
