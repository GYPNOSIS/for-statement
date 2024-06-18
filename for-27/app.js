"use strict"

let n = parseInt(prompt("n butun sonini kiriting:"));

let x = parseFloat(prompt("x haqiqiy sonini kiriting:"));

let totalSum = x;

let factaryal = 1;

for (let i = 1; i <= n; i++) {
    factaryal *= (2 * i) * (2 * i + 1);
  totalSum += Math.pow(-1, i) * (factaryal / (2 * i + 1)) * Math.pow(x, 2 * i + 1);
}

console.log("Yig'indisi:", totalSum);