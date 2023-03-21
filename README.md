GAMO

In this game, you choose a character(class), level up, use spells and attack mobs until you die.

# Day 1 of gamo

I want characters to be able to level up and increase their stats.

Character stats:
Level
Attack
Magic
Defense
Speed
Health
Mana

Stat boundries:
1 - 10 = low - high

Health and Mana boundries:
1 - 200

Character Defaults:
Warrior = high mana, high magic, low hp and attack. Starts with Fireball spell

Warlock = high hp, weak stats and does most of it's damage via summons. Starts with an Imp.

Shaman = mid range allrounder. Starts with Fire Elemental and the Weapon Thunder Feury.

Game Logic

- If a character has an activePet, the activePet's damage as starting value, and add it to the character's magic damage.
- If a character is casting a spell, we take the spell's damage and add  it to the character's magic damage.
- If a character has neither an activePet, or a spell, we take their weapon's damage, and add it to the character's attack damage.

# gamo
