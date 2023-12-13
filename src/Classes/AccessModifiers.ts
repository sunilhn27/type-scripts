class Car {
    name: string;
    year: number;
    color: string;


    constructor(name: string, year: number, color: string) {
        this.name = name;
        this.year = year;
        this.color = color
    }

    public getCarName(): string {
        return this.name;
    }

    private getCarYear(): number {
        return this.year;
    }

    protected getCarColor(): string {
        return this.color;
    }
}


let d = new Car("Vm", 2013, "White");

console.log(d)
console.log(d.getCarName())


class Vechile extends Car {

    callProtectedMethod(): string {
        return this.getCarColor();
    }

    //private method not able to access

}

let childInstance = new Vechile("car",256,"white");
console.log(childInstance.callProtectedMethod()); 