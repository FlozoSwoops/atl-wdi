console.log('tamagotchi file is loaded');

class Tamagotchi {
    constructor(name, creatureType) {
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
    puke() {
        foodInTummy--
        console.log("food: " + this.foodInTummy = "Wah")
    }

    yawn() {
        restedness--
        console.log(this.name + "has current restedness of:" + this.restedness)
    }

    start() {
        this.timerOne = setInterval(function () {
            this.cry();
        }, 6000);
        this.timerTwo = setInterval(function () {
            this.yawn();
        }, 10000);
        this.timerThree = setInterval(function () {
            this.puke();
        }, 20000);
    };
    stop() {
        clearInterval(this.timerOne)
        clearInterval(this.timerTwo)
        clearInterval(this.timerThree)
    }
}

//from stuck section
var p1 = new Tamagotchi('Mark, shmoo');
var p2 = new Tamagotchi('Georgie, dog');
// end stuck

console.log(p1)
console.log(p2)

p1.cry()
p2.cry()
p1.puke()
p2.yawn()


//test out your Tamagotchies below via console.logs
