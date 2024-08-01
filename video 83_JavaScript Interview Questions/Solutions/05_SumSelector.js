// 5) The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumSelector(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] < 0){
            break;
        }
        sum+=arr[i];
    }
    return sum;
}

let arr=[1,2,3,2,4,-1,5]
console.log(sumSelector(arr))