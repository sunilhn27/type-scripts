"use strict";
class Employees {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        Employees.headCount++;
    }
    getHeadCount() {
        return Employees.headCount;
    }
    getDetails() {
        return this.firstName + this.lastName;
    }
}
Employees.headCount = 0;
let sunil = new Employees("Sunil", "H N");
let raju = new Employees("Raju", "B V");
console.log(sunil.getHeadCount());
console.log(raju);
console.log(Employees.headCount);
