console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchis {
    constructor(name, creatureType){
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry () {
        this.foodInTummy--;
        console.log('WAHH!!!');
    }
}
var beepBop = new Tamagotchis();
var fartKnocker = new Tamagotchis();

console.log(beepBop);
console.log(fartKnocker);

beepBop.cry();
fartKnocker.cry();

//create new Tamagotchis


//test out your Tamagotchies below via console.logs
