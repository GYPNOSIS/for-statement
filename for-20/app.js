"use strict"

let n = +prompt('N kiriting', '');

let b = 0;

let f;

for (let i = 1; i <= n; i++) 
    {
  f = 1;
  
  for (let j = 1; j <= i; j++) 
    {
    f *= j;
  }
  b += f;
}

alert("Yig\'indi: " + b);