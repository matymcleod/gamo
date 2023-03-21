const Character = require('./character');
const fireball = require('../spells/fireball');
const weapon = require('../weapons/weapon');

class Warrior extends Character {
  constructor(name){
    super(name, 'warrior', 2, 10, 4, 4, 100, 200);
    this.spells.push(fireball)
  }
}

module.exports = Warrior;