// 1,find the sum of an array with reduce method


let number=[10,20,30,40,50,60];
let sum=0;
number.reduce((a,b)=>sum=a+b);
console.log(sum);

//,print even number from 1 to N

// function printEvenNumbers(N) {
//     for (let i = 1; i <= N; i++) {
//       if (i % 2 === 0) {
//         console.log(i);
//       }
//     }
//   }
  
//   // Example usage:
//   printEvenNumbers(10);

function printEven(N){
    for(let i=1;i<=N;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}

printEven(20);
