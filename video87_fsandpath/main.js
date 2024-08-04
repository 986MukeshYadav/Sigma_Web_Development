const fs =require('fs')
// const fs = require("fs/promises")
console.log('Starting');

//fs.writeFileSync("Mukesh.txt","Mukesh is good boy")

fs.writeFile("Mukesh2.txt","Mukesh is good Boy2",()=>{
    console.log('Done');
    fs.readFile("Mukesh2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
    fs.appendFile("Mukesh.txt","MukeshRobo",(e,d)=>{
        console.log(d);
        
    })
})

console.log('File Written');
