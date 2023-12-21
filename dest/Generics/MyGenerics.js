"use strict";
function identity(arg) {
    return arg;
}
// Usage
let res = identity(123); // T is inferred as number
let value = identity("abc"); // T is inferred as string
