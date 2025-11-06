// let arr = ["ashar", "ak"];

// function findWord(arr) {
//   let arr1 = arr[0].split("");
//   let arr2 = arr[1].split("");
//   let flag = true;

//   for (let i = 0; i < arr2.length; i++) {
//     if (!arr1.includes(arr2[i])) {
//       flag = false;
//       break;
//     }
//   }

//   return flag;
// }

// console.log(findWord(arr)); // true


//! array methods - Map , Every , Find , filter, Reduce ,

//? unshift - delete first elem of array
//? shift - add elem on first index of the array

//! - Fabocacci series
// function generateFibonacciIterative(n) {
//   if (n <= 0) {
//     return [];
//   } else if (n === 1) {
//     return [0];
//   }

//   let fibSeries = [0, 1];
//   for (let i = 2; i < n; i++) {
//     let nextFib = fibSeries[i - 1] + fibSeries[i - 2];
//     fibSeries.push(nextFib);
//   }
//   return fibSeries;
// }

// // Example usage:
// console.log(generateFibonacciIterative(10));

//! array of object

// let arr = [{ name: "ashar", age: 22 }, { name: "luffy", age: 19 }, { name: "naruto", age: 21 }]

// let less = arr.filter((item) => {
//     return item.age <22
// })
// console.log(less)

//! interesting

// function abc(a,...b) {
//      console.log(b, typeof b) //! type is Object
// }
 
// abc(10,8,7)

//? Call apply bind


//--------------------------------------------------------------------------------------

//! React

//* useState and useReduce  with example
//* higher order component
//* What are incepters
//* API intregration
//* use state is sync or aysnc
//* What is JSX
//* real DOM vs virtual DOM
//* progress tag
//* Image Map
//* figure tag vs Image Tag
//* 