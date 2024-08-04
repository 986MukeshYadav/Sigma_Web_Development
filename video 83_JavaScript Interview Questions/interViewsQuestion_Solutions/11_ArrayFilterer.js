// 11) The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products,criterion){
    return products.filter(product=>{
        return Object.keys(criterion).every(key =>{
            return product[key] === criterion[key];
        });
    });
}

const products =[
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 699 },
    { id: 3, name: 'Coffee Maker', category: 'Home Appliances', price: 89 },
    { id: 4, name: 'Blender', category: 'Home Appliances', price: 45 },
    { id: 5, name: 'Headphones', category: 'Electronics', price: 150 }
];

const criterion = { category: 'Electronics', price: 699 };

const filteredProducts = filterProducts(products,criterion)
console.log(filteredProducts)