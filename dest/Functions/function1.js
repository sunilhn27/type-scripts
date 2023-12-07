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
//funciton with return type
function upper(value) {
    let str = value.toUpperCase();
    return str;
}
function isEven(a) {
    if (a % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
//arrow function
const addition = () => {
    return 4;
};
const arr = ["sunil", "Raju", "Kushal"];
function getnames(arr) {
    return arr.map((element) => {
        return element.length;
    });
}
console.log(logError("Hi"));
console.log(add(1, 3));
console.log(isEven(61));
console.log(upper("sunil"));
console.log(getnames(arr)); //[5,4,6]
