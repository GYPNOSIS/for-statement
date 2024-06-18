"use strict"

let n = parseInt(prompt("n butun sonini kiriting:"));

let qwerty = [2];

for (let k = 1; k < n; k++) 
    {
  let previous = qwerty[k - 1];
  let Term = 2 + 1 / previous;
  sequence.push(Term);
}

console.log("Ketma-ketlik:", qwerty);