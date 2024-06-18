"use strict"

let n = parseInt(prompt("n butun sonini kiriting:"));

let x = parseFloat(prompt("x haqiqiy sonini kiriting:"));

let totalSum = 0;

for (let i = 0; i <= n; i++) {
  let koeffsient = (i % 2 === 0) ? 1 : -1;
  let power = 2 * i + 1;
  totalSum += koeffsient * Math.pow(x, power) / power;
}

console.log("Yig'indisi:", totalSum);