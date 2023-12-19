class Iphone {
    private model: number = 123;
    private year: number = 2012;
    private color: string = "";
    private screenSize: number = 0;


    public getModel(): number {
        return this.model;
    }

    public setModel(model: number): void {
        this.model = model;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number): void {
        this.year = year;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getScreenSize(): number {
        return this.screenSize;
    }

    public setScreenSize(screenSize: number): void {
        this.screenSize = screenSize;
    }


}

let col = new Iphone();

console.log(col.setColor("Red"))