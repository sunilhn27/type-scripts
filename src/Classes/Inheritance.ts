class Animal {
    name: string;
    legs: number;

    constructor(name: string, legs: number) {
        this.name = name;
        this.legs = legs;
    }
      
    eat():string{
        return "eats";
    }

    runs():string{
        return "Runs";
    } 

}

class Dog extends Animal {

    public soundMakes(): string {
        return "Bark";
    }

    eat(): string {
        return "Non Veg";
    }

    private Color(): string {
        return "Brown";
    }

}

let dg = new Dog("Jackie", 4);

console.log(dg);
console.log(dg.soundMakes())
console.log(dg.eat())
