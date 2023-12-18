interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}


type Empp = BusinessPartner & Contact;
type Empp1 = BusinessPartner | Identity;
type Empp2 = Identity & BusinessPartner & Contact;


let empss: Empp = {
    name: "Sunil",
    credit: 2500,   
    email: "sunil@gmail.com",
    phone: "74691461469"

}

let empss1 :Empp1={
    id: 29,
    name: "Sunil"
}

let empss2: Empp2 = {
    name: "Sunil",
    credit: 2500,   
    id:29,
    email: "sunil@gmail.com",
    phone: "74691461469"

};

console.log(empss)
console.log(empss1)
console.log(empss2)