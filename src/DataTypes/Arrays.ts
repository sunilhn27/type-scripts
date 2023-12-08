const employees: string[] = ["Sunil", "Raju", "Arjun"];
let skills: string[] = [];
let series = [1, 2, 3];
skills[0] = "Problem Solving";
skills[1] = "Programming";

for (const emp of employees) {
    if (emp === "Raju") {
        console.log("Raju is Present");
        break;
    } else {
        console.log("not Present")
    }
}

for (let i = 0; i < employees.length; i++) {
    console.log("From Loop" + employees[i])
}


//define multipule types

let randomData: (string | number | boolean)[];
randomData = ["sunil", 29, false]


console.log("skill" + typeof (skills))
console.log(series.length);
console.log(employees.push("Lora"))
console.log(employees.find((emp) => emp === "Raju"));
console.log(employees.forEach(emp => {
    if (emp === "Arjun") {
        console.log("Arjun is Present");
    }
}))

console.log(randomData)