let obj = {
    name: "Alice",
    sayName: function () {
        console.log(this.name)
    }
}
obj.sayName(); // What will be the output? Explain why  // Output will be ReferenceError: name is not defined

// Explanation:
// In the given code, the method `sayName` is trying to access a variable `name` without any reference to the object `obj`. 
// Since there is no variable named `name` defined in the scope of the function or globally, it results in a ReferenceError.
// To access the `name` property of the object `obj`, we should use `this.name` inside the method, like this: