"use strict"

let n = prompt('N kiriting');

let S = 1;

for (let i = 1.1; i <= 1.3 + (0.1 * (n - 1)); i += 0.1) 
    {
  S *= i;
}

alert(S);