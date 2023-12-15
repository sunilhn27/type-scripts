class Emps implements Salary {
    name!: string;
    department!: string

    constructor(name: string,department: string) {
        this.name = name;
        this.department = department;
    }

    hourlyRate: number = 12;
    calculateSalary(days: number): number {
        return this.hourlyRate * days;
    }

}


let e = new Emps("Sunil", "Computer Science");

console.log(e);
console.log(e.calculateSalary(160))
