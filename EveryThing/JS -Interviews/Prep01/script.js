//! What is Scope
//? scope is a certain region in a program where a defined variable can exist and can be recognized and beyond that it can't be accessed  so there can be 3 types of scope in js
//? 1. Global Scope
//? 2. Function Scope
//? 3. Block Scope

var a = 10; //? global scope
//* var is function scoped but let and const are block scoped

//! variable shadowing

function test() {
    let a = 'test';

    if (true) {
        let a = "hello"
        console.log(a)
    }
    console.log(a)
}

test();

//? agar hum const ko update krne ki koshish krege to error ayega - [Assignment to constant variable.]

