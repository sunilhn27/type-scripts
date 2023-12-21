"use strict";
function identity(arg) {
    return arg;
}
// Usage
let res = identity(123); // T is inferred as number
let value = identity("abc"); // T is inferred as string
function newGenerics(first, sec) {
    return { first, sec };
}
let n = newGenerics(5, "sunil");
let b = newGenerics(true, new Date());
console.log(n);
console.log(b);
function newGenerics1(first, sec) {
    return sec;
}
let k = newGenerics1(5, "sunil");
console.log(k);
