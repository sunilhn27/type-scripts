"use strict";
class SellCourses {
    constructor() {
        this.cart = [];
    }
    addToCarts(produc) {
        this.cart.push(produc);
    }
    getCart() {
        return this.cart;
    }
}
let a = new SellCourses();
a.addToCarts("sunil");
a.addToCarts("Raju");
console.log(a.getCart());
