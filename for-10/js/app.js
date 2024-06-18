"use strict"

let n = +prompt('N ni kiriting', ''), S = 0;

for (let i = 1; i <= n; i++)
     {

    S = 1/i + S;
}

alert(`${S}`);