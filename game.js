const Warrior = require('./characters/warrior');
const Warlock = require('./characters/warlock');
const Shaman = require('./characters/shaman');
const Pet = require('./characters/pet');


const warrior = new Warrior('Oliver');
console.log(warrior);
warrior.levelUp(warrior);
console.log(warrior);

const warlock = new Warlock('Maty');
console.log(warlock);
warlock.levelUp();
console.log(warlock);

const shaman = new Shaman('Jeff');
console.log(shaman);
shaman.levelUp();
shaman.summonPet('Fire Elemental');
console.log(shaman);
console.log(shaman.getDamage());

const pet = new Pet('Dusty');
console.log(pet);