let myvar:any ="hello world";
let strlength :number =(myvar as string).length;

console.log(strlength); //11

let myVariable: any = "Hello, TypeScript!";
let strLength: number = (<string>myVariable).length;

console.log(strLength); // 18
