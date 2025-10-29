//? Q1
// console.log("value of the age is ", age) //! undefined
// var age = 25;
// console.log("value of the age is", age)  //! 25
//? Q2
// age = 30
// console.log(`the age is ${age}`)
// let age = 35    //! ReferenceError: Cannot access 'age' before initialization [Temporal Dead Zone]

//? Q3

// myFun()

// var myFun = function () {
//     console.log("first")
// }

// myFun()


// function myFun() {
//     console.log("second")
// }

// myFun()

// //! output is :  second first first

//? Q4

// var variable = 10;

// (() => {
//     console.log(variable)
//     variable = 20
//     console.log(variable)
// })()

// console.log(variable);
// var variable = 30

//! output is : 10 20 20

//? Q5

// variable = 10;
// (() => {
//     foo = 100
//     console.log(variable)
//     var foo = 100
//     variable = 20
//     console.log(variable)
    
// })()

// console.log(foo) //! ReferenceError: foo is not defined [because foo is declared with var inside the IIFE, so it's not accessible outside ]
// console.log(variable)
// var variable = 30

//? Q6

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// }
//! output is : 3 3 3 [because var is function scoped, by the time the timeout executes, the loop has completed and i is 3]

//? Q7

// var fullName = "Mohd Ashar"

// var obj = {
//   fullName: "Monkey D Luffy",

//   prop: {
//     fullName: "Roronoa Zoro",
//     getFullName: function () {
//       return this.fullName;
//     },
//   },
//     getFullName: function () {
//         return this.fullName;
//     },
    
//     getFullNamev2: () => this.fullName,
    
//     getFullNamev3: (function () {
//         return this.fullName;
//     })()
// };

// console.log(obj.prop.getFullName())
// console.log(obj.getFullName())
// console.log(obj.getFullNameV2())
// console.log(obj.getFullNamev3())


//? Q8

