// 1]Write a JavaScript program to print each element of the following array to the console:
// const numbers = [1, 2, 3, 4, 5];

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((a)=>console.log(a));






// 2]Given the array of names below, write a program to append the text " is awesome! " to each name and log it to the console:
// const names = ["Ali,"Bob","Charlie"]

const names = ["Ali","Bob","Charlie"];
let newName=names.map((a)=>a+" is awsome");
console.log(newName);