function identity<T>(arg: T): T {
    return arg;
}

// Usage
let res: number = identity(123);   // T is inferred as number
let value: string = identity("abc");  // T is inferred as string


function newGenerics<T, U>(first: T, sec: U): { first: T, sec: U } {
    return { first, sec };
}


let n = newGenerics<number, string>(5, "sunil");
let b = newGenerics<boolean, Date>(true, new Date());


console.log(n)
console.log(b)

function newGenerics1<T, U>(first: T, sec: U): U {
    return sec;
}

let k = newGenerics1<number, string>(5, "sunil");
console.log(k)
