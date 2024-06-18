"use strict"

let a = prompt('A kiriting', ''),

  n = prompt('N kiriting', ''),
  b = 0,
  d = 1;

for (let i = 0; i <= n; i++) 
    {
  b += d;
  d = -d * a;
  alert(b + `va` + d)
}

alert("Yig\'indisi: " + b);