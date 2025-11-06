//! What is Map
//? map method is used for creating a new array from the existing one by appling the function to each one the elem of the first array

//* let me show you

// const num = [1, 2, 3, 4, 5];
// const newMap = num.map((item) => item * 2);
// console.log(newMap) //[ 2, 4, 6, 8, 10 ]

//! polyfill of Map

// Array.prototype.myMap = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++){
//         temp.push(cb(this[i], i, this))
        
//     }
//     return temp;
// }



//! What is filter
//? filter method takes each element in an array and it applies the condition against it, if the condition return true the element push into the output array if the conditon is false then element is not push in the output array  inshort i can say filter return only those elements which full fill the providede criteria

//* let me show you

// const num = [1, 2, 3, 4, 5, 6, 7];
// let FilterArray = num.filter((item) => item > 2);
// console.log(FilterArray)
//! polyfil of Filter

Array.prototype.Myfilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(this[i]);
        
    }
    return temp;
}

//! What is Reduce

//? The reduce() method in JavaScript executes a callback function on every element of an array to accumulate all the values into a single result, such as a sum, product, or object.
//? reduce() combines all array elements into one value by repeatedly applying a function.

// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// let sum = num.reduce((acc, cal) => acc + cal, 0);
// console.log(sum) //! 36

