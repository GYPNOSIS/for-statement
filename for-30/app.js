"use strict"

let n = parseInt(prompt("n butun sonini kiriting:"));

let A = parseFloat(prompt("A sonini kiriting:"));

let B = parseFloat(prompt("B sonini kiriting:"));

let step = (B - A) / (n + 1);

let Point = A;

for (let i = 0; i < n; i++)
     {
  Point += step;
  let functionValue = 1 - Math.sin(Point);
  console.log("Nuqta:", Point, "F(X):", functionValue);
}