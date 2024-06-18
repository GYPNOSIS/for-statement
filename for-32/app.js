"use strict"

let n = parseInt(prompt("n butun sonini kiriting:"));

let qwerty = [1];

for (let k = 1; k < n; k++) 
    {
  let previous = qwerty[k - 1];
  
  let Term = (previous + 1) / k;
  sequence.push(Term);
}

console.log("Ketma-ketlik:", qwerty);