console.log('tamagotchi file is loaded');

class Tamagotchi {
    constructor(){
      this.foodInTummy = 10;
      this.restedness = 10;
      this.health = 10;
    }

cry() {
    foodInTummy -= 1,
    console.log(this.foodInTummy)
    console.log("Waahhh")


    }


//from stuck section
var p1 = new Tamagotchi();
var p2 = new Tamagotchi();
// end stuck

console.log(p1)
console.log(p2)

p1.cry()
p2.cry()



//test out your Tamagotchies below via console.logs
