class Human {
  constructor({ firstName, lastName, age, gender }) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._gender = gender;
    this._energy = 20;
  }

  get energy() {
    return this._energy;
  }

  set energy(newEnergy) {
    this._energy += newEnergy;
  }

  get name() {
    return `${this._firstName} ${this._lastName}`;
  }

  talk(sentence) {
    if (this._energy >= 5) {
      console.log(`${this._firstName} says ${sentence}`);
      this._energy -= 5;
    } else {
      console.log("Low Energy");
    }
  }

  walk(distance) {
    if (this._energy >= distance * 10) {
      console.log("Walked - " + distance);
      this._energy -= 10 * distance;
    } else {
      console.log("Low Energy");
    }
  }
}

const amit = new Human({
  firstName: "Amit",
  lastName: "Lastname",
  age: 21,
  gender: "male"
});

const dani = new Human({
  firstName: "Dani",
  lastName: "Akash",
  age: 25,
  gender: "male"
});

console.log("Character name - " + dani.name);
console.log(dani.energy);
dani.talk("How are you doing)?");
dani.talk("How are you doing)?");
dani.talk("How are you doing)?");
dani.talk("How are you doing)?");
dani.talk("How are you doing)?");
dani.talk("How are you doing)?");
dani.talk("How are you doing)?");
console.log(dani.energy);
dani.walk(1);
console.log(dani.energy);
dani.energy = 10;
console.log(dani.energy);
dani.talk("How are you doing)?");
dani.talk("How are you doing)?");
