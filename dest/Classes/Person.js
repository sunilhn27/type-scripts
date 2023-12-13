"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
let data = new Person("Sunil", "H N", 29);
let data1 = new Person("Sunil", "H N", 29);
console.log(data.age);
console.log(data1.firstName);
class Student {
    constructor(birthDate) {
        this.birthDate = birthDate;
    }
}
let student = new Student(new Date(1990, 12, 25));
//student.birthDate = new Date(1991, 12, 25); // Compile error
