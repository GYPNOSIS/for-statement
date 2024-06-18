"use strict"

let n = parseInt(prompt("n butun sonini kiriting:"));

let qwerty = [1, 2];

if (n > 2) {
  for (let k = 3; k <= n; k++) 
    {
    let Term = (qwerty[k - 3] + 2 * qwerty[k - 2]) / 3;
    qwerty.push(Term);
  }
}

console.log("Ketma-ketlik:", qwerty);