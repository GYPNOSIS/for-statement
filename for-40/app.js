"use strict"

let A = parseInt(prompt("A butun sonini kiriting:"));

let B = parseInt(prompt("B butun sonini kiriting:"));

for (let i = A; i <= B; i++)
     {
  for (let j = A; j <= i; j++) 
    {
    for (let k = 1; k <= j; k++) 
        {
      console.log(j);
    }
  }
}