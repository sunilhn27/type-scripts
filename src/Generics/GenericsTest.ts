interface School {
    class: string;
    name: string;
    place: string;
}


function schoolDetails<School>(value: School): School {
    return value;
}


console.log(schoolDetails({
    class: "8th",
    name: "VES",
    place: "Nelamangala"
}))


function schoolDetails1<T>(data: T): T {
    // Function implementation goes here
    return data;
}

// Example usage:
let result: string = schoolDetails1<string>("School XYZ");
console.log(result);  // Output: School XYZ

let anotherResult: number = schoolDetails1<number>(42);
console.log(anotherResult);  // Output: 42


// Generic arrow function
const schoolDetails2 = <T>(data: T): T => {
    // Function implementation goes here
    return data;
};
