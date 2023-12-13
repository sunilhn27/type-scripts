"use strict";
class Car {
    constructor(name, year, color) {
        this.name = name;
        this.year = year;
        this.color = color;
    }
    getCarName() {
        return this.name;
    }
    getCarYear() {
        return this.year;
    }
    getCarColor() {
        return this.color;
    }
}
let d = new Car("Vm", 2013, "White");
console.log(d);
console.log(d.getCarName());
class Vechile extends Car {
    callProtectedMethod() {
        return this.getCarColor();
    }
}
let childInstance = new Vechile("car", 256, "white");
console.log(childInstance.callProtectedMethod());
