
const { attack, _initAttacks } = require('./attacks.js');
const {  Battle } = require('./battles.js')

// Person class - - - - - - - - - - 

class Person {

  constructor (options) {
    this.name = options.name;
    this.sex =  options.sex;
    this.health = 100;
    this.abilities = ['Warrior', 'Wizard', 'Rogue', 'Politician', 'Merchant', 'Peasant'];
    this.ability = 'Peasant';
    this.poisoned = {
      status: false, 
      count: 0
    };
    this.stunned = {
      status: false, 
      count: 0
    };
  }

  drinkElixer() {
    const index = this.abilities[Math.floor(Math.random()*(this.abilities.length))];
    this.ability = index;
    this.abilities = [this.ability];
    console.log(`${this.name} has taken the elixer`);
  }

  initAttacks() {
    console.log('initAttacks this value: ', this);
    if (this.abilities.length > 1) {
      console.log(`${this.name} must first drink the elixer`);
      return;
    }
    if (Object.keys(this.attacks).length > 0) {
      console.log(`${this.name} already initialized attacks`);
      return;
    }
    this.attacks = _initAttacks(this.ability);
    console.log('attacks finalized');
    console.log('- - - - - - - - - - - - - - - - - - - - - -');
    console.log(`${this.name}'s updated instance: `, this);
  }

}

// Hero class - - - - - - - - - - - 

class Hero extends Person {
  constructor (options) {
    super(options)
    this.items = [];
    this.attacks = [];
  }
}

// Villain Class - - - - - - - - - 

class Villain extends Person {
  constructor(options) {
    super(options)
    this.items = [];
    this.attacks = [];
  }

}

// test cases - - - - - - - - - - -


const JD = new Hero({ name: 'JD', sex: 'male' });
console.log('JD is now a hero', JD);
JD.initAttacks(JD.ability);
JD.drinkElixer();
console.log('JD\'s new ability is: ', JD.ability);
console.log('JD\'s abilities have been forever reduced: ', JD.abilities);

console.log('setting attacks: ');
JD.initAttacks(JD.ability);
JD.initAttacks(JD.ability);

console.log('- - - - - - - - - - - - - - - - - - - - - -');

const Austin = new Villain({name: 'Austin', sex: 'Male'});
console.log('Austin is now a Villain: ', Austin);
Austin.drinkElixer();
console.log('Austin\'s new ability is: ', Austin.ability);
console.log('Austin\'s abilities have been forever reduced: ', Austin.abilities);

console.log('- - - - - - - - - - - - - - - - - - - - - -');

console.log('setting attacks: ');
Austin.initAttacks(Austin.ability);
Austin.initAttacks(Austin.ability);

const battle1 = new Battle(JD, Austin);
console.log('battle1 comenses: ', battle1);
for (let i = 1; i < 15; i++) {
  battle1.attack(JD, JD.attacks[Math.floor(Math.random() * 3)].type, Austin);
  battle1.attack(Austin, Austin.attacks[Math.floor(Math.random() * 3)].type, JD);
}






