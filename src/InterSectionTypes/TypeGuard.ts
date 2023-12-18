//Summary: in this tutorial, you will learn about the Type Guard in TypeScript to narrow down the type of a variable.

type alphanumericc = string | number;

function add(a: alphanumericc, b: alphanumericc) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}

console.log(add("1","3"))



///

