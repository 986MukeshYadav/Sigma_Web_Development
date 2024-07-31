//IIFE =>Immediately invoked function Expression

console.log(a1);

async function sleep() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("I have slept");
    }, 1000);
  });
}

function sum(a,b,c){
    return a+b+c;
}


(async function main() {
//   let a = await sleep();
//   console.log(a);
//   let b = await sleep();
//   console.log(b);


//Destructuring

// let[x,y,...rest]=[1,2,3,4,5,6,7,8,10]
// console.log(x,y,rest)

// let obj={
//     a:1,
//     b:2,
//     c:3
// }

// let {a,b,c}=obj
// console.log(a,b,c)

//Spread Syntax

let arr=[1,4,6]
console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr));

})()
var a1 = 6;
