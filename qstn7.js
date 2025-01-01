//Filter  the  odd numbers in the array

let arr=[45,65,69,82,32,72,73,84,99];
let newArr=arr.filter((odd)=>odd%2==1);
console.log(newArr);








//Find the average of the number array

let num=[2,4,6,8,12,15];
let sum=0;
num.forEach((s)=>sum+=s);
let avg=sum/num.length;
console.log(avg);