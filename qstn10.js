// 1.  Let array =[1,2,3,4,5,6,7,8,9,10]

// Find the square of the numbers greater than 5 and cube of other numbers using map?





let array =[1,2,3,4,5,6,7,8,9,10];
let newArray=array.map((a)=>a>5?a**2:a**3);
console.log(newArray);





// 2.  Let array = [11,16,24,27,44,51,79,95,100,144,185,204]

// Filter the numbers completely divisible by 4?

let arrays = [11,16,24,27,44,51,79,95,100,144,185,204];
let nArrays=arrays.filter((a)=>a%4==0);
console.log(nArrays);


