// 8) AsyncArrayMapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.


// Function to create a delay for a given number of milliseconds
function delay(ms) {
    // Return a new Promise that resolves after 'ms' milliseconds
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Asynchronous function that takes an array of numbers and returns a new array of Promises
async function asyncArrayMapping(numbers) {
    // Use the map function to transform each number into a Promise
    return numbers.map(async (number) => {
        // Wait for 500 milliseconds before proceeding
        await delay(500);
        // Return the number multiplied by 2
        return number * 2;
    });
}

// Example array of numbers
let numbers = [1, 2, 3, 4, 5];

// Call the asyncArrayMapping function with the numbers array
asyncArrayMapping(numbers).then(promises => {
    // Wait for all the Promises in the array to resolve
    Promise.all(promises).then(results => {
        // Log the results to the console
        console.log(results); // Output: [2, 4, 6, 8, 10] after 500 milliseconds
    });
});
