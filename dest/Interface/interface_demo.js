"use strict";
class Students {
    constructor(firstName, lastName, age, place) {
        this.firstName = "Sunil";
        this.lastName = "H N";
        this.age = 0;
        this.place = "Bangalore";
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.place = place;
    }
    calculateArea() {
        return this.age * 2;
    }
}
let stu = new Students("Sunil", "H N", 29, "Bangalore");
console.log(stu);
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
