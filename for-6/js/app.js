"use strict"

let price = +prompt('Narxni kiriting', ''), count = 11, num = price;

for (let i = 1; i < 11; i++) 
    {

    num = price * count / 10
    count++;
    
    alert(num + 'so`m')
}