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
  
  let weapon;

  // sets mob to the first element in the mobs array which is badGuyOne[0], and then badGuyTwo[1] and badGuyThree[2]
  let mob = mobs[0]; 

  // prompt in terminal to pick a character aka className 
  const classChoice = await prompt(`Pick your contender: shaman, warrior, warlock\n`);

  if(classChoice === config.classNames.shamanClassName) {
    character = new Shaman('Shaman');
    character.health -= mob.damage;
  } else if(classChoice === config.classNames.warlockClassName) {
    character = new Warlock('Warlock')
  } else if(classChoice === config.classNames.warriorClassName) {
    character = new Warrior('Warrior')
  } else {
    throw Error('Please choose a valid character from the given choices');
    
  }

  console.log(`${character.name} you are hit by Level One Bad Guy and you loose 10 Health! your health level is: ${character.health}. \nWhat will you use to fight back with? Choose your weapon, spell, or pet: `);

  // once character is chosen the game begins with an attack from an enemy

  const weaponChoice = await prompt(`What will you fight back with?\n`)
  
    console.log(mob);
    console.log(weaponChoice)
    mob.health = mob.health + weaponChoice.damage;
    console.log(mob);
  

}

gameLoop();
