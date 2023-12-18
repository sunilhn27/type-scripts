let myvar:any ="hello world";
let strlength :number =(myvar as string).length;

console.log(strlength); 

let myVariable: any = "Hello, TypeScript!";
let strLength: number = (<string>myVariable).length;

console.log(strLength); // 
