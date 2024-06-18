"use strict"

let N = parseInt(prompt("N butun sonini kiriting:"));
let sum = 0;

for (let i = 1; i <= N; i++) {
  let term = 0;

  for (let j = 1; j <= i; j++) {
    term = term * 10 + i;
  }

  sum += term;
}

console.log("Yig'indisi:", sum);