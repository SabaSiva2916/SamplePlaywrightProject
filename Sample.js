let arr = [1, 2, 3, 4, 5];
//Adding element at the end of the array
arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

//Adding element at the beginning of the array
arr.unshift(0);
console.log(arr); // Output: [0, 1, 2, 3, 4, 5, 6]

//Adding element at a specific index
arr.splice(3, 0, 2.5);
console.log(arr); // Output: [0, 1, 2, 2.5, 3, 4, 5, 6]

//Iterating over the array
arr.forEach(function (element) {
  console.log(element); // Output: 0, 1, 2, 2.5, 3, 4, 5, 6 (each element on a new line)
});

//Finding the index of an element
let index = arr.indexOf(2.5);
console.log(index); // Output: 3

//Removing an element from the end of the array
arr.pop();
console.log(arr); // Output: [0, 1, 2, 2.5, 3, 4, 5]

//Removing an element from the beginning of the array
arr.shift();
console.log(arr); // Output: [1, 2, 2.5, 3, 4, 5]

//Removing an element from a specific index
arr.splice(2, 1);
console.log(arr); // Output: [1, 2, 3, 4, 5]c
