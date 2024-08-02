// 13) The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(products){
    return products.reduce((total,product)=>{
       return total + (product.price * product.quantity);
    },0)
}
const cart = [
    { price: 29.99, quantity: 2 },
    { price: 9.99, quantity: 1 },
    { price: 4.99, quantity: 4 }
];

console.log(calculateTotal(cart)); 