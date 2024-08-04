import path from "path"

let mypath  = "C:\\Users\\iitia\\Downloads\\Sigma Web Development Course\\Sigma-Web-Dev-Course\\Video 87\\harry.txt"
console.log(path.extname(mypath))

console.log(path.dirname(mypath))
console.log(path.basename(mypath))

console.log(path.join("c:/", "programs\\harry.txt"))