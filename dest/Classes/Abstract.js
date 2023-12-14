"use strict";
class Emp {
    constructor(name, place) {
        this.name = name;
        this.place = place;
    }
    getDetails() {
        return `${this.name} from ${this.place} salary is ${this.getSalary()}`;
    }
}
class Sunil extends Emp {
    getSalary() {
        return 2500;
    }
}
class Raju extends Emp {
    getSalary() {
        return 2000;
    }
}
let empSunil = new Sunil("Sunil Shetty", "Bangalore");
let empRaju = new Sunil("Raju B V", "Mumbai");
console.log(empSunil.getDetails());
console.log(empSunil.getSalary());
console.log(empRaju.getDetails());
console.log(empRaju.getSalary());
