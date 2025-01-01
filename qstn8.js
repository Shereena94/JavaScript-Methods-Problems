// 1. Filter students who passed

// const students = [
//   { name: "alice", score: 85 },
//   { name: "Bob", score: 45 },
//   { name: "Charlie", score: 75 },
// ];

const students = [
  { name: "alice", score: 85 },
  { name: "Bob", score: 45 },
  { name: "Charlie", score: 75 },
];

let passedStudents= students.filter((pass)=>pass.score>45);
console.log(passedStudents);

// 2)  Convert numbers to boolean

// Const numbers= [ 0, 1,-2, 3,-4,5].

let numbers= [ 0, 1,-2, 3,-4,5];
numbers.map((a)=>console.log(a>0));
