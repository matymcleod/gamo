class Character {
  constructor(name, className, attack, magic, defense, speed, health, mana){
    this.name = name;
    this.className = className;
    this.level = 1;
    this.attack = attack;
    this.magic = magic;
    this.defense = defense;
    this.speed = speed;
    this.health = health;
    this.mana = mana;
    this.spells = [];
    this.weapons = [];
    this.activePet = null;
  }

  levelUp() {
    this.level += 1;
    if(this.className === 'warrior') {
      console.log(`***** Leveling up ${this.className} *****`);
      this.attack = this.attack + 1;
      this.health = this.health + 11;
      this.mana = this.mana + 2;
    } else if(this.className === 'warlock') {
      console.log(`***** Leveling up ${this.className} *****`);
      this.mana = this.mana + 17;
      this.magic = this.magic = 1;
    } else if(this.className === 'shaman') {
      console.log(`***** Leveling up ${this.className} *****`);
      this.health = this.health + 29;
      this.mana = this.mana + 11;
      this.speed = this.speed + 1;
    }
  }

  getDamage() {
    // I need a way to keep track of a character's activePet if they have a pet then we get the pets damage.
    if(this.activePet) {
      const petDamage = this.activePet.damage;
      const magicDamage = this.magic;
      return petDamage + magicDamage;
    }

  }

  summonPet(petName) {
    // if we havae a pet in our this.pets array that matches the name passed in as an argument to this fuction, let's summon it.
    // we can loop over the pets we have to find it.
    console.log(`((((( Summoning ${petName} )))))`)
    for(let i = 0; i < this.pets.length; i++) {
      const pet = this.pets[i];
      if(pet.name === petName) {
        this.activePet = pet;
      }
    }
  }
}

module.exports = Character;