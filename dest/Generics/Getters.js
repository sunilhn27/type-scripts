"use strict";
class Persons {
    get firstName() {
        return this._firstName;
    }
    set setFirstName(_firstName) {
        this._firstName = _firstName;
    }
    constructor(firstName) {
        this._firstName = "";
        this._firstName = firstName;
    }
}
class AnotherClass {
    constructor(person) {
        this.person = person;
    }
    // Getter to access the firstName property
    getPersonFirstName() {
        return this.person.firstName;
    }
    // Setter to modify the firstName property
    setPersonFirstName(newName) {
        this.person.setFirstName = newName;
    }
}
// Usage
const personInstance = new Persons("John");
const anotherClassInstance = new AnotherClass(personInstance);
console.log(anotherClassInstance.getPersonFirstName()); // Output: John
anotherClassInstance.setPersonFirstName("Jane");
console.log(anotherClassInstance.getPersonFirstName()); // Output: Jane
