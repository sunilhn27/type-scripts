interface IPerson{
    firstName:string;
    lastName:string;
    age:number;
    place:string;

    calculateArea(): number;

}



class Students implements IPerson{
    firstName: string = "Sunil";
    lastName: string = "H N";
    age: number = 0;
    place: string = "Bangalore";
    
    constructor(firstName: string, lastName: string, age: number, place: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.place = place;
    }

    calculateArea(): number {
        return this.age *2
    }

}   

let stu =new Students("Sunil", "H N", 29, "Bangalore")
console.log(stu)



interface Shape {
    calculateArea(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
 
