//funciton without return type
function logError(msg: string) {
    return msg;
}

//funciton with return type
function add(a: number, b: number): number {
    let sum: number = a + b;
    return sum;
}


//funciton with return type
function upper(value: string): string {
    let str: string =value.toUpperCase();
    return str;
}

function isEven(a: number): boolean {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

//arrow function
const addition:()=> number =()=>{
    return 4;
}

const arr:Array<string> =["sunil","Raju" ,"Kushal"];
        
function getnames(arr:Array<string>):number[]{
    return arr.map((element) => {
        return element.length;
    });
    
}


console.log(logError("Hi"))
console.log(add(1, 3))
console.log(isEven(61));
console.log(upper("sunil"))

console.log(getnames(arr)); //[5,4,6]
