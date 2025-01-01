//1. Filter Even numbers in an Array

let array=[21,32,45,65,98,100,17,19,18];

let nArray=array.filter((e)=>e%2==0);
console.log(nArray);

//2. Find index of the largest number

let array1=[21,32,45,65,98,100,17,19,18];
let largest=array1.reduce((a,b)=>a>b?a:b);
// console.log(largest);
console.log(array1.indexOf(largest));