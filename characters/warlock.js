const Character = require('./character');

 class Warlock extends Character {
  constructor(name){
    super(name, 'warlock', 4, 5, 4, 4, 200, 90);
  }
}

module.exports = Warlock;