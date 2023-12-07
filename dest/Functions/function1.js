"use strict";
//funciton without return type
function logError(msg) {
    return msg;
}
//funciton with return type
function add(a, b) {
    let sum = a + b;
    return sum;
}
function isEven(a) {
    if (a % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(logError("Hi"));
console.log(add(1, 3));
console.log(isEven(61));
