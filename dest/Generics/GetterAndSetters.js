"use strict";
class Iphone {
    constructor() {
        this.model = 123;
        this.year = 2012;
        this.color = "";
        this.screenSize = 0;
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.model = model;
    }
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getScreenSize() {
        return this.screenSize;
    }
    setScreenSize(screenSize) {
        this.screenSize = screenSize;
    }
}
let col = new Iphone();
console.log(col.setColor("Red"));
console.log(col.getColor());
