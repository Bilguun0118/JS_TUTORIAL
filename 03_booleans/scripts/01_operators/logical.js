//Logical Operators
console.log("Logical Operators");

// && ampersand operator example (and)
const andCheck = 4 > 3 && 10 > 5;
console.log('andCheck =', andCheck);
const andChick = 4 > 3 && 10 < 5;
console.log('andChick =', andChick);
const andChack = 4 < 3 && 10 < 5;
console.log('andChack =', andChack);

// || pipe or operator, example (or)
const orCheck = 4 > 3 || 10 > 5;
console.log('orCheck =', orCheck);
const orChick = 4 > 3 || 10 < 5;
console.log('orChick =', orChick);
const orChack = 4 < 3 || 10 < 5;
console.log('orChack =', orChack);

//! Negation examples

let notCheck = 4 > 3
let notcheck = !(4 > 3)                  
console.log('notcheck =', notcheck);
let isLightOn = true
let isLightOff = !isLightOn           
console.log("isLightOff =", isLightOff);
let isMarried = !false   