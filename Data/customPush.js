class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
}

const myNewArray = new myArray();

myNewArray.push('Orange')
myNewArray.push('Mongo')
myNewArray.push('Apple')
myNewArray.push('banana')

console.log(myNewArray)