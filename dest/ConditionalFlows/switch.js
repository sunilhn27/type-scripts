"use strict";
let products1 = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];
let dis = 0;
let product = products1[1];
switch (product.name) {
    case 'phone':
        dis = 5;
        break;
    case 'tablet':
        dis = 10;
        break;
    case 'laptop':
        dis = 15;
        break;
}
console.log(`There is a ${dis}% on ${product.name}.`);
