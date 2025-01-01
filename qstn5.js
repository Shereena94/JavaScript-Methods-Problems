//1. Use filter() to remove null or undefined values

let array=[15,21,null,25,36,undefined,56,81,null];
let arr=array.filter((a)=>a!==null && a!==undefined);
console.log(arr);





//2.double every element of an array using map?

let a=[2,6,9,8,23];
a.map((d)=>console.log(d*2));