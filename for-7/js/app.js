"use strict"

let a = +prompt('A ni kiriting', ''), b = +prompt('B ni kiriting', '');

if (a > b)
    {
    alert('A dan B katta bo\'lishi kerak');
}

let c = 0;

for (let i = a; i <= b; i++) 
    {
  c += i;
}

alert(`A dan B sonlar yig\'indisi:  ${c}`);