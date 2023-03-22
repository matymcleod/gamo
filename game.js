const Warrior = require('./characters/warrior');
const Warlock = require('./characters/warlock');
const Shaman = require('./characters/shaman');
const Pet = require('./characters/pet');

const warrior = new Warrior('Default');
warrior.levelUp(warrior);
console.log(warrior);

const warlock = new Warlock('Default');
warlock.levelUp();
console.log(warlock);

const shaman = new Shaman('Default');
console.log(shaman);
shaman.levelUp();
shaman.summonPet('Fire Elemental');
shaman.castSpell('lightheal');
shaman.equipWeapon('lazer');
console.log(shaman);
console.log(shaman.getDamage());

