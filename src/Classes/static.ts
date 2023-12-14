class Employees {
    static headCount: number = 0;
    firstName: string;
    lastName: string


    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        Employees.headCount++;
    }


    public getHeadCount(): number {
        return Employees.headCount;
    }

    getDetails(): string {
        return this.firstName + this.lastName;
    }

}


let sunil = new Employees("Sunil", "H N");
let raju = new Employees("Raju", "B V");

console.log(sunil.getHeadCount());
console.log(raju);
console.log(Employees.headCount);  