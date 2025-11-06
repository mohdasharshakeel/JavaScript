
//! Data structure
// const studentName = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];

//! This is Algorithm
// const findStudent = (allStudents, studentToFind) => {
//     for (let i = 0; i < allStudents.length; i++) {
//         if (allStudents[i] === studentToFind) {
//             return `${studentToFind} is found at index ${i}`;
//         }
//     }
// }
// console.log(findStudent(studentName, 'Charlie'));

//! Big O Notation

const groceriesItems = ['apple', 'banana', 'orange', 'grapes', 'mango', 'kiwi', 'watermelon', 'peach', 'pear', 'plum'];


const SearchItem = (allItems, itemToFind) => { 
    for (let i = 0; i < allItems.length; i++){
        if (allItems[i] === itemToFind) { 
            return `${itemToFind} is found at index ${i}`;
        }
    }
}

console.log(SearchItem(groceriesItems, 'mango'));
