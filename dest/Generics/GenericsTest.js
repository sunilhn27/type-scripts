"use strict";
function schoolDetails(value) {
    return value;
}
console.log(schoolDetails({
    class: "8th",
    name: "VES",
    place: "Nelamangala"
}));
function schoolDetails1(data) {
    // Function implementation goes here
    return data;
}
// Example usage:
let result = schoolDetails1("School XYZ");
console.log(result); // Output: School XYZ
let anotherResult = schoolDetails1(42);
console.log(anotherResult); // Output: 42
// Generic arrow function
const schoolDetails2 = (data) => {
    // Function implementation goes here
    return data;
};
