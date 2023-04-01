const Warrior = require('./characters/warrior');
const Warlock = require('./characters/warlock');
const Shaman = require('./characters/shaman');
const Pet = require('./characters/pet');
const prompt = require('prompt-promise');
const config = require('./config/classNames');
const mobs = require('./mobs/mobs');

// BARE MINIMUM:
// - Choose a class, instantiate your character based on that class. Throw an error if that class is not available.
// - Select random mobs to fight, in a "turn based" fighting system.
// - Offer the ability to attack, equip weapon, summon pet, or cast a spell each turn.
// - Level up after a mob is defeated, or game over if you are defeated.
// - IF you defeat all mobs, you win!

async function gameLoop (){

  // stores classChoice as 'character'
  let character;

  // sets mob to the first element in the mobs array which is gangster[0], and slangster[1]
  let mob = mobs[0]; 

  // prompt in terminal to pick a character aka className 
  const classChoice = await prompt(`Pick your contender: shaman, warrior, warlock\n`);

  if(classChoice === config.classNames.shamanClassName) {
    character = new Shaman('Maty');
  } else if(classChoice === config.classNames.warlockClassName) {
    character = new Warlock('Chatty')
  } else if(classChoice === config.classNames.warriorClassName) {
    character = new Warrior('Patty')
  } else {
    throw Error('Please choose a valid character from the given choices')
  }
  console.log(`${classChoice} prepare to fight!`);

  // once character is chosen the game begins with an attack from an enemy
  const enemyChoice = await prompt('Choose your opponent: ')

}

gameLoop();
