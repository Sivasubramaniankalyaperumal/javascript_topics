// 1.nornally try catch finnally
try {
    let result = JSON.parse("{name: 'Siva'}"); // invalid JSON
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Execution completed");
}

// 2 . we can use promises

// 3. we can use async /await

// 4. throw custom exception
function withdraw(amount) {
    if (amount <= 0) {
        throw new Error("Invalid amount");
    }
    return amount;
}

try {
    withdraw(-500);
} catch (err) {
    console.log(err.message);
}
