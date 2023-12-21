"use strict";
class Building {
    constructor() {
        this._firstName = "";
    }
    get firstName() {
        return this._firstName;
    }
    // Directly set the property within the class
    setFirstName(firstName) {
        this._firstName = firstName;
    }
}
// Usage
const pe = new Building();
pe.setFirstName("Sunil"); // Use the setter method
console.log(pe.firstName); // Output: Sunil
class Building2 {
    constructor() {
        this._firstName = "";
    }
    get firstName() {
        return this._firstName;
    }
    // Use a setter method instead of a setter property
    set setFirstName(firstName) {
        this._firstName = firstName;
    }
}
// Usage
const p = new Building2();
p.setFirstName = "Sunil"; // Use the setter method
console.log(p.firstName); // Output: Sunil
