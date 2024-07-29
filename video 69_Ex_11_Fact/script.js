let a=5;
fact=1;
function fab(num){
    for(let i=1;i<=num;i++){
        fact *=i;
    }
    return fact;
}

function factorial(num){
    let arr=Array.from(Array(num+1).keys())
    let c= arr.slice(1,).reduce((a,b)=> a*b)
    return c
}
console.log(factorial(a));
console.log(fab(a));