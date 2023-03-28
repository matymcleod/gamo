const Warrior = require('./characters/warrior');
const Warlock = require('./characters/warlock');
const Shaman = require('./characters/shaman');
const Pet = require('./characters/pet');
const prompt = require('prompt-promise');
const classNames = require('./config/classNames');

const shaman = new Shaman('Default');
console.log(shaman);
shaman.levelUp();
shaman.summonPet('Fire Elemental');
shaman.castSpell('lightheal');
shaman.getDamage();
console.log(shaman);

// BARE MINIMUM:
// - Choose a class, instantiate your character based on that class. Throw an error if that class is not available.
// - Select random mobs to fight, in a "turn based" fighting system.
// - Offer the ability to attack, equip weapon, summon pet, or cast a spell each turn.
// - Level up after a mob is defeated, or game over if you are defeated.
// - IF you defeat all mobs, you win!

async function gameLoop (){
const classChoice = await prompt(`Pick your contender ${classNames}`);
  console.log(classChoice);
}

gameLoop();
