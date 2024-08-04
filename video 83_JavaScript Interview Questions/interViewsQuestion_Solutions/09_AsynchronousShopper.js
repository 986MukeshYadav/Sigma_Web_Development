// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function randomDelay(){
    const delay=Math.floor(Math.random() * 2000)+ 1000;
    return new Promise(resolve => setTimeout(resolve,delay));
}

async function placeOrder(orderDetails){
    await randomDelay();
    return `Order placed successfully for ${orderDetails}`;
}

let orderDetails = '2 items of product X';

placeOrder(orderDetails).then(confirmationMessage=>{
    console.log(confirmationMessage);
    
})