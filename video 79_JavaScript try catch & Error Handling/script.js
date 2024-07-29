let a =prompt("Enter first number");
let b =prompt("Enter second number");
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("It is not allowed ")
}

let sum=parseInt(a) + parseInt(b);
function main(){
    let x=1;
try{
console.log("Sum is : " + sum *x);
}
catch(err){
    console.log("Error aa gaya bhai");
}
finally{
    console.log("Files are begin closed and db connection is begin closed");
}
}
let c =main()