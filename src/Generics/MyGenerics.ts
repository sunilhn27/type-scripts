function identity<T>(arg: T): T {
    return arg;
}

// Usage
let res: number = identity(123);   // T is inferred as number
let value: string = identity("abc");  // T is inferred as string