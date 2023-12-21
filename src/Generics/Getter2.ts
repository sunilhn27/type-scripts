class Building {
    private _firstName: string = "";

    public get firstName(): string {
        return this._firstName;
    }

    // Directly set the property within the class
    public setFirstName(firstName: string): void {
        this._firstName = firstName;
    }
}

// Usage
const pe = new Building();
pe.setFirstName("Sunil"); // Use the setter method
console.log(pe.firstName); // Output: Sunil


class Building2 {
    private _firstName: string = "";

    public get firstName(): string {
        return this._firstName;
    }

    // Use a setter method instead of a setter property
    public set setFirstName(firstName: string) {
        this._firstName = firstName;
    }
}

// Usage
const p = new Building2();
p.setFirstName = "Sunil"; // Use the setter method
console.log(p.firstName); // Output: Sunil
