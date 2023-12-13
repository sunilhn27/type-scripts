"use strict";
class Animal {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }
    eat() {
        return "eats";
    }
    runs() {
        return "Runs";
    }
}
class Dog extends Animal {
    soundMakes() {
        return "Bark";
    }
    eat() {
        return "Non Veg";
    }
    Color() {
        return "Brown";
    }
}
let dg = new Dog("Jackie", 4);
console.log(dg);
console.log(dg.soundMakes());
console.log(dg.eat());
