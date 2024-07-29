console.log('Mukesh is hacker');
console.log("Rohan is hecker");

setTimeout(()=>{
    console.log("After 0 seconds Mukesh is hacker")
},0)

console.log('The End');

const fn=()=>{
    console.log("Nothing")
}
const callback=(arg,fn)=>{
    console.log(arg)
    fn()
}
const loadScript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("Mukesh",fn);
    document.body.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)