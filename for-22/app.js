"use strict"

let n = parseInt(prompt("n butun sonini kiriting:"));

let x = parseFloat(prompt("x haqiqiy sonini kiriting:"));

let totalSum = 1;

let factaryal = 1;

let power = 1;

for (let i = 1; i <= n; i++) {
  factaryal *= i;
  power *= x;
  totalSum += power / (factaryal * Math.pow(2, i));
}

console.log("Yig'indisi:", totalSum);