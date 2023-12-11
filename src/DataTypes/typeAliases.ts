
type sunil = string;  //sunil is consider as string now 

let strValue: sunil;

strValue ="data";

console.log(strValue.charAt(0));



type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
//input = false; // Compiler error


console.log(input);