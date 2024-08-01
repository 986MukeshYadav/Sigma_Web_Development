// 10) The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay


function randomDelay() {
    const delay = Math.floor(Math.random() * 3000) + 2000;
    return new Promise(resolve => setTimeout(resolve, delay));
}

async function brewCoffee(coffeeType) {
    await randomDelay();
    return `Your ${coffeeType} is ready!`;
}

let coffeeType = 'Latte';
brewCoffee(coffeeType).then(message => {
    console.log(message); 
});
