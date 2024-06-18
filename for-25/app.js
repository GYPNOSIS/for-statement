"use strict"

let n = parseInt(prompt("n butun sonini kiriting:"));

let x = parseFloat(prompt("x haqiqiy sonini kiriting:"));

let totalSum = 0;

let sign = -1;

for (let i = 1; i <= n; i++) 
    {
  totalSum += sign * Math.pow(x, i) / i;
  sign *= -1;
}

console.log("Yig'indisi:", totalSum);