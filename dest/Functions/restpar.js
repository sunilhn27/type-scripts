"use strict";
//condtions
// A function has only one rest parameter.
// The rest parameter appears last in the parameter list.
// The type of the rest parameter is an array type.
function getTotal(...numbers) {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal(1, 2, 6, 4, 89, 8));
