const Character = require('./character');
const fireball = require('../spells/fireball');
const lazer = require('../weapons/lazer');
const config = require('../config/classNames');

class Warrior extends Character {
  constructor(name){
    super(name, config.warriorClassName, 2, 10, 4, 4, 100, 200);
    this.spells.push(fireball);
    this.weapons.push(lazer);
  
  }
}

module.exports = Warrior;