"use strict"

let n = parseInt(prompt("n butun sonini kiriting:"));

let qwerty = [1, 1];

if (n > 2) {
  for (let k = 3; k <= n; k++) 
    {
    let Term = qwerty[k - 3] + qwerty[k - 2];
    qwerty.push(Term);
  }
}

console.log("Ketma-ketlik:", qwerty);