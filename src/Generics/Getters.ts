class Persons {
    private _firstName: string = "";


    public get firstName(): string {
        return this._firstName;
    }

    public set setFirstName(_firstName: string) {
        this._firstName = _firstName;
    }

    constructor(firstName: string) {
        this._firstName = firstName;
    }


}


class AnotherClass {
    private person: Persons;


    constructor(person: Persons) {
        this.person = person;
    }

    // Getter to access the firstName property
    getPersonFirstName(): string {
        return this.person.firstName;
    }

    // Setter to modify the firstName property
    setPersonFirstName(newName: string): void {
        this.person.setFirstName = newName;
    }
}

// Usage
const personInstance = new Persons("John");
const anotherClassInstance = new AnotherClass(personInstance);

console.log(anotherClassInstance.getPersonFirstName());  // Output: John

anotherClassInstance.setPersonFirstName("Jane");
console.log(anotherClassInstance.getPersonFirstName());  // Output: Jane
