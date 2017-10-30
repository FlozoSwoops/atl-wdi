console.log('tamagotchi file is loaded');

class Tamagotchi {
    constructor(name, creatureType){
      this.foodInTummy = 10;
      this.restedness = 10;
      this.health = 10;
      this.name = name;
      this.creatureType = creatureType;
    }

cry() {
    foodInTummy -= 1,
    console.log(this.name + this.foodInTummy)
    console.log("Waahhh")


    }


//from stuck section
var p1 = new Tamagotchi('Mark, shmoo');
var p2 = new Tamagotchi('Georgie, dog');
// end stuck

console.log(p1)
console.log(p2)

p1.cry()
p2.cry()


//test out your Tamagotchies below via console.logs
