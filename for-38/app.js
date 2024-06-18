"use strict"

let N = parseInt(prompt("N butun sonini kiriting:"));
let sum = 0;

for (let i = 1; i <= N; i++) {
  let term = 0;
  let multiplayer = 1;

  for (let j = N; j >= 1; j--) {
    term += multiplayer * (j % 10);
    multiplayer *= 10;
  }

  sum += term;
}

console.log("Yig'indisi:", sum);