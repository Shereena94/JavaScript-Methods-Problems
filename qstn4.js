//Find average of elements in an array

let avg=[10,20,30,40,50,20];
let sum=0;
avg.forEach((a)=>sum+=a); 
let average=sum/avg.length;
console.log(average);





//2) filter the multiples of 5 in the given array Let array=[111,125,170,46,79,445,780]

let array=[111,125,170,46,79,445,780];
let newArray=array.filter((a)=>a%5==0);
console.log(newArray);
