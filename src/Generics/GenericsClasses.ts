interface Quiz {
    name: string
}

interface Courses {
    name: string,
    author: string
}


class SellCourses<T>{
    public cart: T[] = [];


    addToCarts(produc: T) {
        this.cart.push(produc);
    }

    getCart(): T[] {
        return this.cart;
    }
}


let a = new SellCourses<string>();

a.addToCarts("sunil")
a.addToCarts("Raju")

console.log(a.getCart())

