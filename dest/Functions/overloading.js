"use strict";
function addNumbers(a, b) {
    return a + b;
}
function addStrings(a, b) {
    return a + b;
}
console.log(addNumbers(1, 3));
console.log(addNumbers(1, 3));
// Implementation of the overloaded function
function greet(person, age, married) {
    if (age !== undefined && married !== undefined) {
        return `Hello, ${person}! You are ${age} years old. ${person} is married =${married}`;
    }
    else {
        return `Hello, ${person}!`;
    }
}
// Test cases
console.log(greet("Sunil")); // Output: Hello, John!
console.log(greet("Raju", 29, false)); // Output: Hello, Alice! You are 25 years old.
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
