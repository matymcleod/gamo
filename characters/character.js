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
    this.pets = [];
    this.activePet = null;
  }

  levelUp() {
    const levellingUp = `* * * LEVELLING UP ${this.className} * * *`;
    this.level += 1;
    if(this.className === 'Warrior') {
      console.log(levellingUp);
      this.attack += 1;
      this.health += 11;
      this.mana += 2;
    } else if(this.className === 'Warlock') {
      console.log(levellingUp);
      this.mana += 17;
      this.magic += 1;
    } else if(this.className === 'Shaman') {
      console.log(levellingUp);
      this.health += 29;
      this.mana += 11;
      this.speed += 1;
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

  castSpell(spellName) {
    console.log(`((((( Casting Spell ${spellName})))))`);
    for(let i = 0; i < this.spells.length; i++) {
      const spell = this.spells[i];
      if(spell.name === spellName) {
        
      }
    }
  }


}

module.exports = Character;