// 3) The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirrorImage(str){
    let reversedStr = str.split('').reverse().join('');
    let mirroredStr = '';
    mirroredStr=str + reversedStr;
    return mirroredStr;
}

let inputStr = "Hello";
console.log(mirrorImage(inputStr));