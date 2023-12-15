"use strict";
class Emps {
    constructor(name, department) {
        this.hourlyRate = 12;
        this.name = name;
        this.department = department;
    }
    calculateSalary(days) {
        return this.hourlyRate * days;
    }
}
let e = new Emps("Sunil", "Computer Science");
console.log(e);
console.log(e.calculateSalary(160));
