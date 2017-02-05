const battle = () => {

  let battleIndex = [];

  class Battle {
    constructor(hero, villain) {
      this.hero = hero;
      this.villain = villain;
      this.round = 0;
    }

    attack(aggressor, attackType, victim) {
      const attackObj = aggressor.attacks.find((attack) => {
        return attackType === attack.type;
      });
      const attackDamage = attackObj.damage;
      console.log('attackObj: ', attackObj);

      // inflicting DAMAGE!!!
      victim.health -= attackDamage;

      // // Applying poision and stun
      // if (attackPoision)  
      //   this.victim.poisoned = !this.victim.poisoned;
       
      // if (attackStun)  
      //   this.victim.stunned = !this.victim.stunned; 

      console.log(`${aggressor.name} attacks ${victim.name}. His health is now at ${victim.health}`); 
    }

    eat() {

    }

    rest() {

    }

    defend() {

    }

  }



  return {
    Battle
  }
}

module.exports = battle();