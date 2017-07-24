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
        console.log(this.name + 'WAHH!!!');
    }
}

//create new Tamagotchis
var creature1 = new Tamagotchis('BeepBop', 'Water Monkey');
var creature2 = new Tamagotchis('FartKnocker', 'Gas Monster');

//test out your Tamagotchies below via console.logs
console.log(creature1);
console.log(creature2);

creature1.cry();
creature2.cry();