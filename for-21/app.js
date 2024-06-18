"use strict"

let n = parseInt(prompt("n butun sonini kiriting:"));

let totalSum = 0;

let factaryal = 1;

for (let i = 1; i <= n; i++) 
    {
    factaryal *= i;
    totalSum += 1 / factaryal;
}

console.log("Yig'indisi:", totalSum);