// var a = [10, 11, 12, 13, 14];
// function print(b,...a) {
//     console.log(a);

// }
// print(8, 9, 10, 11, 12);
//! important !! type of array is object


//? map
// let a = [12, 13, 14, 15];
// let b = a.map((item) => {
//     return item = 8;
// })
// console.log(b)

//! object  tp array
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
    
// }

// console.log(Object.entries(obj))


// const arr = [100, "q", "ashar", 99, "game"];
// const num = []
// const str = []
// const ch = []


// arr.forEach((item) => {
//     if (typeof item === "number") {
//         num.push(item);
//     }
//     else if (typeof item === "string") {
//         if (item.length === 1) {
//             ch.push(item);
//         } else {
//             str.push(item);
//         }
//     }
// });

// console.log(num); // [100, 99]
// console.log(str); // ["ashar", "game"]
// console.log(ch);  // ["q"]


//! slice vs splice

// function sum(a, b) {
//     if (a && b) return a + b;
//     return function (b) {
//         return a + b;
//     }
// }

// console.log(sum(8, 9));
// console.log(sum(8)(9));

//! type of NaN - Number

// console.log([] == []) // false
// console.log([] === []) // false


//! what is type cohersion 