class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    
}

let data: Person = new Person("Sunil", "H N", 29);

let data1 = new Person("Sunil", "H N", 29);

console.log(data.age);

console.log(data1.firstName);


class Student {
    readonly birthDate: Date; //cannot edit the values

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let student = new Student(new Date(1990, 12, 25));
//student.birthDate = new Date(1991, 12, 25); // Compile error



