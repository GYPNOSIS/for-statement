"use strict"

let n = parseInt(prompt("n butun sonini kiriting:"));

let x = parseFloat(prompt("x haqiqiy sonini kiriting:"));

let totalSum = 1;

let dell = 2;


for (let i = 1; i <= n; i++) {
  let num = 1;
  for (let j = 1; j <= 2 * i - 1; j += 2) {
    num *= j;
  }
  totalSum += Math.pow(-1, i) * (num * Math.pow(x, i)) / dell;
  dell *= (2 * i) * (2 * i + 1);
}

console.log("Yig'indisi:", totalSum);