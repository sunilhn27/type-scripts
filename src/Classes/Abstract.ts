abstract class Emp{
    name:string;
    place:string;

    constructor(name:string ,place:string){
        this.name =name;
        this.place=place;
    }

   abstract getSalary():number

   getDetails():string{
    return `${this.name} from ${this.place} salary is ${this.getSalary()}`
   }

}


class Sunil extends Emp{

    getSalary(): number {
       return 2500;
    }
}


class Raju extends Emp{

    getSalary(): number {
       return 2000;
    }
}

let empSunil =new Sunil("Sunil Shetty" ,"Bangalore");
let empRaju =new Sunil("Raju B V" ,"Mumbai");

console.log(empSunil.getDetails())
console.log(empSunil.getSalary())
console.log(empRaju.getDetails())
console.log(empRaju.getSalary())

