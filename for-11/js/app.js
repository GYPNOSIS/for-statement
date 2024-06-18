"use strict"

let n = +prompt('N ni kiriting', ''), S = 0, n2 = 0;

for (let i = 1; i <= n; i++) 
    {
    n2 = (n2 + ((n + i)**2));
}

S = n**2 + n2 + (2*n)**2;

alert(`${S}`);