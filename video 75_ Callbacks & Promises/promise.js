console.log('This is Promises');

let prom1 = new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was not supporting you")
    }
    else{
        setTimeout(()=>{
            console.log('Yes i am done')
            resolve("Mukesh")
        },3000)
    }
})

let prom2 = new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was not supporting you 2")
    }
    else{
        setTimeout(()=>{
            console.log('Yes i am done 2')
            resolve("Mukesh 2")
        },3000)
    }
})

//Promise API=>.all , .allSettled , .race , .any , .resolve , .reject 
let p3 = Promise.all([prom1,prom2])
p3.then(a=>{
    console.log(a);
}).catch(err=>{
    console.log(err);
})
