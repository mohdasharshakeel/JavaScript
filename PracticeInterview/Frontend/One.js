//! what is callback function in javascript?
// function data(fn) {
//     fn()
// }
 
// function fn() {
//     console.log('i am call back function')
// }
// data(fn);

// let arr = [1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 3, 4];

// let seen = new Set();
// let duplicates = new Set();

// arr.forEach(num => {
//   if (seen.has(num)) duplicates.add(num);
//   else seen.add(num);
// });

// console.log([...duplicates]);
// 👉 Output: [3, 4]


// function findDuplicate(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 res.push(arr[i]);
//             }
//         }
//     }
//     return res
// }

// console.log(findDuplicate(arr))

// arr.sort((a, b) => a - b);
// console.log(arr)
// let res = [];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === arr[i + 1]) {
//         res.push(arr[i]);
//     }
// }

// console.log(res)
// let arr = [1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 3, 4];

// arr.sort((a, b) => a - b); // sorting for grouping duplicates
// let res = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[i + 1]) {
    // duplicate mila to push karna hai
    // lekin ensure karo ki res me pehle se na ho
//     if (!res.includes(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
// }

// console.log(res);
// 👉 Output: [3, 4]


// let str = "i am is ashar"




// const str1 = "sk"
// const str2 = "badshah"
// const str3 = str1 && str2
// console.log(str3) //! badshah

// [a] = [1, 2, 3]
// console.log(a) //! 1

let a = 100
const b = ++a + a++
console.log(b)