const Mob = require('./mobs');

class Gangster extends Mob {
  constructor(name){
    this.name = name;
  }
}

module.exports = Gangster;
