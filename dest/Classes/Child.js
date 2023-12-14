"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Parent_1 = __importDefault(require("./Parent"));
class Child extends Parent_1.default {
    constructor(smokes, runs) {
        super();
        this.smokes = smokes;
        this.runs = runs;
    }
    doesHeSmokes() {
        return this.smokes;
    }
    doesHeRuns() {
        return this.runs;
    }
    setColor(newColor) {
        this.color = newColor;
    }
    setWeight(newWeight) {
        this.weight = newWeight;
    }
}
let c = new Child(true, false);
c.setColor("White");
c.setWeight(65);
console.log(c.getColor());
console.log(c.getWeight());
console.log(c.getHeight());
console.log(c.getWeight());
console.log(c.getColor());
console.log(c.doesHeRuns());
console.log(c.doesHeSmokes());
