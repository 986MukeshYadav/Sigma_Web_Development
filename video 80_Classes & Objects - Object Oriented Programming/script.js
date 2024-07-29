// let obj={
//     a:1,
//     b:"Mukesh"
// }
// console.log(obj)

// let animal={
//     eats:true
// };
// let rabbit ={
//     jumps:true
// };

// rabbit.__proto__=animal; // sets rabbit.[[prototype]]=animal


class Animal{
    constructor(name){
        this.name=name;
        console.log("object is created...")
    }
    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log('Kood raha hoon');
        
    }
}
class Rabbit extends Animal{
    constructor(name){
        super(name);
        console.log("Rabbit object is created...")
    }
    eats(){
        super.eats()
        console.log('Kha raha hoon roar');
    }
    }
    let a=new Animal("Kumar");
    console.log(a)

    let l = new Lion("Shera")
    console.log(l)