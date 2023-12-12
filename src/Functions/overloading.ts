function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}


console.log(addNumbers(1, 3))
console.log(addNumbers(1, 3))

// Function signature with multiple overloads
function greet(person: string): string;
function greet(person: string, age: number): string;
function greet(person: string, age: number ,married :boolean): string;


// Implementation of the overloaded function
function greet(person: string, age?: number ,married? :boolean): string {
    if (age !== undefined &&married!==undefined ) {
        return `Hello, ${person}! You are ${age} years old. ${person} is married =${married}`;
    } else {
        return `Hello, ${person}!`;
    }
}

// Test cases
console.log(greet("Sunil"));            // Output: Hello, John!
console.log(greet("Raju" ,29,false));       // Output: Hello, Alice! You are 25 years old.


function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}