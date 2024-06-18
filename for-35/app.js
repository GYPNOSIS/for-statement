"use strict"

let n = parseInt(prompt("n butun sonini kiriting:"));

let qwerty = [1, 2, 3];

if (n > 3) {
  for (let k = 4; k <= n; k++) 
    {
    let Term = qwerty[k - 2] + qwerty[k - 3] - 2 * qwerty[k - 4];
    qwerty.push(Term);
  }
}

console.log("Ketma-ketlik:", qwerty);