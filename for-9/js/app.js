"use strict"

let a = +prompt('A ni kiriting', ''), b = +prompt('B ni kiriting', '');

if (a > b)
    {
    alert('A dan B katta bulishi kerak');
}

let c = 0;

for (let i = a; i <= b; i++) 
    {
  c = i * i + c;
}

alert(`A dan B gacha bo\'lgsn sonlar kvadratlari yig\'indisi:  ${c}`);