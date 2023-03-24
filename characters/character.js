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
    this.activeSpell = null;
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
    // If a character has an activePet, we take the activePet's damage as starting value, and add it to the character's magic damage.
    // const magicDamage = this.magic;
    if(this.activePet) {
      const petDamage = this.activePet.damage;
      return this.magic += petDamage;
    } else if(this.activeSpell) {
      const spellDamage = this.activeSpell.power;
      return this.magic += spellDamage;
    } else if(this.equippedWeapon){
      const weaponDamage = this.equippedWeapon.damage;
      return this.attack += weaponDamage;
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
  
// If a character is casting a spell, we take the spell's damage and add it to the character's magic damage.
  castSpell(spellName) {
    console.log(`((((( Casting Spell ${spellName} )))))`);
    for(let i = 0; i < this.spells.length; i++) {
      const spell = this.spells[i];
      if(spell.name === spellName) {
        this.activeSpell = spell;
      }
    }
  }
// If a character has neither an activePet, nor a spell, we take their weapon's damage (if they have an equipped one, if not, use 0), and add it to the character's attack damage.

  addWeapon(weapon) {
    this.weapons.push(weapon);
  }

  // Set's equippedWeapon as a property of "this" Character class and set its value to whatever is passed into weaponName as an argument. 
  equipWeapon(weaponName) {
    console.log(`((((( Equipping Weapon ${weaponName} )))))`)
    for(let i = 0; i < this.weapons.length; i++) {
      const weapon = this.weapons[i];
      if(weapon.name === weaponName) {
        this.equippedWeapon = weapon;
      }
    }
  }

}

module.exports = Character;