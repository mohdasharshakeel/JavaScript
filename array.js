// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.slice(0, 3);
// console.log(newarr)


//! Reverse \\ main array ko change krta hai
//! Sort \\ hmesha ek fun accept krta hai

// let arr = [5, 3, 8, 1, 2];
// arr.sort((a, b) => a - b); // Ascending order
// console.log(arr); // Output: [1, 2, 3, 5, 8]

// arr.sort((a, b) => b - a); // Descending order
// console.log(arr); // Output: [8, 5, 3, 2, 1]

//! Map

let arr = [1, 2, 3, 4, 5];
let newarr = arr.map((value, index, array) => {
    return value < 1;
}
);
console.log(newarr); // [ 2, 4, 6, 8, 10 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

//! filter 
let filterArray = arr.filter((value, index, array) => {
    return value > 2;
});
console.log(filterArray); // [ 3, 4, 5 ]

