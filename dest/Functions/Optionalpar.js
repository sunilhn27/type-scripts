"use strict";
function mul(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    else {
        return a * b;
    }
}
console.log(mul(1, 2, 6));
//console.log(mul(1,2))
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95
