const Warrior = require('./characters/warrior');
const Warlock = require('./characters/warlock');
const Shaman = require('./characters/shaman');
const Pet = require('./characters/pet');

const shaman = new Shaman('Default');
console.log(shaman);
shaman.levelUp();
shaman.summonPet('Fire Elemental');
shaman.castSpell('lightheal');
shaman.getDamage();
console.log(shaman);

