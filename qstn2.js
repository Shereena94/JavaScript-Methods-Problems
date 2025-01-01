//1. Write a program that uses forEach() to print all elements in the array [1, 2, 3, 4, 5].

let array=[1,2,3,4,5];
array.forEach((a)=>console.log(a));
 

//2. Use forEach() to calculate the sum of all numbers in an array [10, 20, 30, 40].

let num=[10,20,30,40];
let sum=0;
num.forEach((s)=>sum+=s);
console.log(sum);