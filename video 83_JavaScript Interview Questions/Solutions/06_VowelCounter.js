// 6) The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowelCounter(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

console.log("Number of vowel letter are:"+vowelCounter("Hello World"));