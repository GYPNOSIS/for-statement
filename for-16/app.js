"use strict"

let a = +prompt("A kiriting", ""),
  n = +prompt("N kiriting", ""),
  c = a;

for (let i = 1; i < n+1; i++) 
    {
    a = c

    a = a**i
    
    alert(a)
}