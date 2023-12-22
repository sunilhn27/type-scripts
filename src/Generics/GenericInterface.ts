interface Author<T ,U>{
    name:T;
    age:U
}
//let author1: Author<string, number> = { age: 29, name: "Sunil" };


let author:Author<string,number>= {name:"Sunil",age:19}


//console.log(author1.age);
console.log(author.name);


interface IUser {
    name: string;
}

interface Authors<T> {
    user: T;
    place: string;
}

let emp: Authors<IUser> = {
    user: { name: "Sunil" },
    place: "Nelamangala"
};
