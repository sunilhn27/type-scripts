//funciton without return type
function logError(msg: string) {
    return msg;
}

//funciton with return type
function add(a: number, b: number): number {
    let sum: number = a + b;
    return sum;
}

function isEven(a: number): boolean {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }

}

console.log(logError("Hi"))
console.log(add(1, 3))
console.log(isEven(61));

