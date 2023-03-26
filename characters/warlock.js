const Character = require('./character');
const config = require('../config/classNames');

 class Warlock extends Character {
  constructor(name){
    super(name, config.warlockClassName, 4, 5, 4, 4, 200, 90);
  }
}

module.exports = Warlock;