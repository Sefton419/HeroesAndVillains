// ['Warrior', 'Wizard', 'Rogue', 'Politician', 'Merchant', 'Peasant'];

const attack = () => {
  const attackIndex  = [
    {
      ability: 'Warrior',
      type: 'Bash',
      damage: 12,
      poison: false,
      stun: true
    },
    {
      ability: 'Warrior',
      type: 'Miss Tackle',
      damage: 0,
      poison: false,
      stun: false
    },
    {
      ability: 'Warrior',
      type: 'Rabid Bite',
      damage: 12,
      poison: true,
      stun: false
    },
    {
      ability: 'Wizard',
      type: 'Stun Spell',
      damage: 5,
      poison: false,
      stun: true
    },
    {
      ability: 'Wizard',
      type: 'Empty Spell',
      damage: 0,
      poison: false,
      stun: false
    },
    {
      ability: 'Wizard',
      type: 'Poison Spell',
      damage: 12,
      poison: true,
      stun: false
    },
    {
      ability: 'Rogue',
      type: 'Choke Hold',
      damage: 5,
      poison: false,
      stun: true
    },
    {
      ability: 'Rogue',
      type: 'Hide in Shadows',
      damage: 0,
      poison: false,
      stun: false
    },
    {
      ability: 'Rogue',
      type: 'Poison Dart',
      damage: 12,
      poison: true,
      stun: false
    },
    {
      ability: 'Politician',
      type: 'Filibuster',
      damage: 5,
      poison: false,
      stun: true
    },
    {
      ability: 'Politician',
      type: 'Smile',
      damage: 0,
      poison: false,
      stun: false
    },
    {
      ability: 'Politician',
      type: 'Lie',
      damage: 12,
      poison: true,
      stun: false
    },
    {
      ability: 'Merchant',
      type: 'Haggle',
      damage: 5,
      poison: false,
      stun: true
    },
    {
      ability: 'Merchant',
      type: 'Negotiate',
      damage: 0,
      poison: false,
      stun: false
    },
    {
      ability: 'Merchant',
      type: 'Handshake',
      damage: 12,
      poison: true,
      stun: false
    },
    {
      ability: 'Peasant',
      type: 'Throw Fruit',
      damage: 5,
      poison: false,
      stun: true
    },
    {
      ability: 'Peasant',
      type: 'Shovel Mud',
      damage: 0,
      poison: false,
      stun: false
    },
    {
      ability: 'Peasant',
      type: 'The Black Plague',
      damage: 12,
      poison: true,
      stun: false
    }
  ]

  class Attack {
    constructor({ type, damage, poison, stun }) {
      this.type = type;
      this.damage = damage;
      this.poison = poison;
      this.stun = stun;
    }
  }

  const _initAttacks = (ability) => { 
    return attackIndex
    .filter(attack => attack.ability === ability)
    .map(attack => {
      return new Attack(attack);
    });
  }

  return { 
    _initAttacks
  }

}

module.exports = attack();
