// 4) The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function validatorPassword(password){
    let islong=password.length > 8;
    let hasUppercase=/[A-Z]/.test(password);
    let hasLowercase=/[a-z]/.test(password);
    let todigit=/\d/.test(password);
    return islong,hasLowercase,hasUppercase;
}

let password1 = "Password123";
let password2 = "pass";
let password3 = "PASSWORD123";
let password4 = "Password";

console.log(validatorPassword(password1));
console.log(validatorPassword(password2));
console.log(validatorPassword(password3));
console.log(validatorPassword(password4));
