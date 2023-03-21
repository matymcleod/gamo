const Warrior = require('./characters/warrior');
const Warlock = require('./characters/warlock');
const Shaman = require('./characters/shaman');
const Pet = require('./characters/pet');

const warrior = new Warrior('Oliver');
warrior.levelUp(warrior);
console.log(warrior);

const warlock = new Warlock('Maty');
warlock.levelUp();
console.log(warlock);

const shaman = new Shaman('Jeff');
shaman.levelUp();
shaman.summonPet('Fire Elemental');
console.log(shaman);
console.log(shaman.getDamage());

