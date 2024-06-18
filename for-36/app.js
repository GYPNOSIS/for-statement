"use strict"

let N = parseInt(prompt("N butun sonini kiriting:"));

let K = parseInt(prompt("K butun sonini kiriting:"));

let sum = 0;

for (let i = 1; i <= N; i++) 
  {
  let term = 1;

  for (let j = 1; j <= K; j++) 
    {
    term *= i;
  }

  sum += term;
}

console.log("Yig'indisi:", sum);