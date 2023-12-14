import Parent from "./Parent";

class Child extends Parent {
    smokes!: boolean;
    runs!: boolean;

    constructor(smokes: boolean, runs: boolean) {
        super();
        this.smokes = smokes;
        this.runs = runs;
    }

    doesHeSmokes(): boolean {
        return this.smokes;
    }

    doesHeRuns(): boolean {
        return this.runs;
    }

    setColor(newColor: string): void {
        this.color = newColor;
    }
    setWeight(newWeight:number):void{
        this.weight =newWeight;
    }
}

let c = new Child(true, false);
c.setColor("White")
c.setWeight(65);
console.log(c.getColor());
console.log(c.getWeight())
console.log(c.getHeight());
console.log(c.getWeight());
console.log(c.getColor())
console.log(c.doesHeRuns());
console.log(c.doesHeSmokes());
