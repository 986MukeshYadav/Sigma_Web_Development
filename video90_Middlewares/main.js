const express = require("express");
const app = express();
const port = 3000;
const birds = require('./routes/birds')
const fs=require("fs")

//app.use(express.static("public"))

app.use('/birds',birds)

//Middelware 1 - Logger for our application
app.use((req,res,next)=>{
    console.log(req.headers)
    req.mukesh="I am Mukesh ";
    fs.appendFileSync("log.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    //res.send("Hacked by Middlware 1")
    next()
})

//Middelware 2 

app.use(( req, res, next) => {
    console.log("M2");
    next();
});

app.get("/", (req, res) =>{
     res.send("Hello World!")
});

app.get("/about", (req, res) =>{
    res.send("Hello about!")
});


app.get("/contact", (req, res) =>{
    res.send("Hello contact!")
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`));
