import fs from "fs/promises"

let a = await fs.readFile("Mukesh.txt")

let b= await fs.appendFile("Mukesh.txt", "\n\n\n\n\n this is amazing promise")
console.log(a.toString(),b)