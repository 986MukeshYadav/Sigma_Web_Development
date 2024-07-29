let button = document.getElementById("btn")


button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b> Content is Changed <b> hey!!!"
})

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="<b> Content is Changed <b> hey!!!"
})

button.addEventListener("contextmenu",()=>{
   alert("Donot click right")
})

button.addEventListener("keydown",(e)=>{
   console.log(e.key , e.keyCode)
})