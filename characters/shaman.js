const Character = require('./character');
const Pet = require('./pet');
const Weapon = require('../weapons/weapon');
const thunderFeury = require('../weapons/thunderFeury');
const lightHeal = require('../spells/lightheal');
const lazer = require('../weapons/lazer');

class Shaman extends Character {
  constructor(name){
    super(name, 'Shaman', 1, 1, 1, 1, 100, 100);
    const fireElemental = new Pet('Fire Elemental', 4);
    const stick = new Weapon('stick', 1);
    this.pets.push(fireElemental);
    this.weapons.push(thunderFeury, lazer, stick);
    this.spells.push(lightHeal);
  }
}
module.exports = Shaman;