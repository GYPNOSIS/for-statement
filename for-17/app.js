"use strict"

let a = prompt('A kiriting', '');

let n = prompt('N kiriting', '');

let b = 0;

let d;

for (let i = 0; i <= n; i++) 
    {
  d = Math.pow(a, i);

  alert(d);
  
  b += d;
}

alert(b);