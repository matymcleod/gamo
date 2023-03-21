const Character = require('./character');
const Pet = require('./pet');
const thunderFeury = require('../weapons/thunderFeury');
const lightHeal = require('../spells/lightheal');

class Shaman extends Character {
  constructor(name){
    super(name, 'shaman', 5, 5, 5, 5, 100, 100);
    this.pets = [];
    const fireElemental = new Pet('Fire Elemental', 4);
    this.pets.push(fireElemental);
    this.weapons.push(thunderFeury);
    this.spells.push(lightHeal);
  }
}

console.log(Shaman);
module.exports = Shaman;