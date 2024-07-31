//Question:1 To print the follwing after 2 second dalay
// setTimeout(() => {
//     console.log("Hello");
//     console.log("world");
//   }, 2000);

//Question 2: find average of numbers in an array using spread syntax

// const numbers = [10, 20, 30, 40, 50];
// const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
// const average = sum(...numbers) / numbers.length;
// console.log(`The average is: ${average}`);

//Question 3: write js function which resolve a promise after n seconds .the function takes n as the parameter.use an iife to execute the function with different values of n
  
// function resolveAfterNSeconds(n) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`Resolved after ${n} seconds`);
//       }, n * 1000);
//     });
//   }
  
  // IIFE to execute the function with different values of n
//   (async function() {
//     try {
//       const result1 = await resolveAfterNSeconds(1);
//       console.log(result1); 
  
//       const result2 = await resolveAfterNSeconds(2);
//       console.log(result2); 
  
//       const result3 = await resolveAfterNSeconds(3);
//       console.log(result3); 
//     } catch (error) {
//       console.error(error);
//     }
//   })();
  

//Question 4: Write a simple interest calculator using javascript

let p=parseInt(prompt("Enter a Princpal amount:"));
let r=parseInt(prompt("Enter a Rate of interest:"));
let t=parseInt(prompt("Enter the Time in years:"));

let i=(p*t*r)/100;

console.log("Simple Interest is: "+i);