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
      const attackPoison = attackObj.poison;
      const attackStun = attackObj.stun;
    
      console.log('attackObj: ', attackObj);

      // inflicting DAMAGE!!!
      const randomMultiplier = (1 + Math.random()/2.85);
      victim.health -= Math.ceil(attackDamage * randomMultiplier);

      // Applying poision if not poisoned already, 66% of the time
      if (attackPoison === true) {
        if (Math.random() >= 0.33 && victim.poisoned.status === false) {  
          victim.poisoned.status = true;
        } else {
        console.log(`${victim.name} AVOIDED POISON!!!!!!!!@@@@@@`);
        }
      }
       
      // Applying stun if not stunned already, 66% of the time
      if (attackStun === true) {
        if (Math.random() >= 0.33 && victim.stunned.status === false) {  
          victim.stunned.status = true;
        } else {
        console.log(`${victim.name} AVOIDED STUN!!!!!!!!!@@@@@@@`);
        }
      }

      // Incrementing count of poisoned if they are currently afflicted
      if (victim.poisoned.status === true) {
        if (victim.poisoned.count < 6) {
          victim.poisoned.count++;
        } else {
          victim.poisoned.count = 0;
        }
      }
      // Incrementing count of stunned if they are currently afflicted
      if (victim.stunned.status === true) {
        if (victim.stunned.count < 3) {
          victim.stunned.count++;
        } else {
          victim.stunned.count = 0;
        }
      }

      // Make sure poisoned status reverts to false if stunned count is zeroed out
      if (victim.poisoned.count === 0) {
        victim.poisoned.status = false;
      }

      // Make sure stunned status reverts to false if stunned count is zeroed out
      if (victim.stunned.count === 0) {
        victim.stunned.status = false;
      }
      console.log('- - - - - - - - - - - - - - - - - - - - - -');
      console.log(`${aggressor.name} attacks ${victim.name}. His health is now at ${victim.health}`);
      console.log('- - - - - - - - - - - - - - - - - - - - - -'); 
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