//? Output Based Question -
// console.log("A" -1)  //! NaN
// console.log("Ashar" + "100")  //! Ashar100
// console.log("2" + 2 + "2") //!222 as string
// console.log('2' +  2 - '2') //! 20

//? Object of Object -
// const a = {}
// const b = { name : "Ashar"}
// const c = { name : "Luffy"}
// a[b] = { name: "naruto" };
// a[c] = { name: "zoro" };
// console.log(a[b]); //! zoro

//? == vs ===
// const y = 0
// const z = false
// console.log(y == z) //! True
// console.log(y === z) //! False

//? Show the example of NaN

// console.log("Ashar" / 2) //!NaN
// console.log(NaN == NaN) //! false
// console.log(NaN === NaN) //! false

//? Map

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let ansArr = arr.map((item) => {
//     return item * 2;
// })
// console.log(ansArr)

//? Array Methods i have worked on :-
//! slice :  it return a new array [ not mutate original array ]
//! sort :  it mutate original array
//! shift : Remove the first the elem [ mutate the original array]
//! unshift : Add an elem at the first index of the array [ mutate the original array]


//? Sort Exmaple
// let arr = [19, 5, 88, 33];
// arr.sort((a, b) => a - b);
// console.log(arr)

//! Higher order function : higher order function are those function who return another function
//! lexical scope
//? function currying

// function carry(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
// console.log(carry(2)(2)(2));

//? Infinite currying

function infiniteCurrying(a) {
    return function (b) {
    //* Agar 'b' exist karta hai (yaani agla number mila)
        if (b) {
        //*Toh hum sum karke wapas same function return karenge (Recursion)
            return infiniteCurrying(a + b);
        }
        //* Agar 'b' nahi mila (empty call), toh final sum return karenge
        return a;
    }
}//* Ab yeh chalega
console.log(infiniteCurrying(2)(2)(2)(2)()); 
// Output: 8