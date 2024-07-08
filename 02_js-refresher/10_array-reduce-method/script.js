const { getBooks } = require('../../common-resources/common');

// Array.prototype.reduce()
// - The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// - The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

// - Basically, this function takes two arguments: first one is accumulator and second one is iterator element. Initially, the value of accumulator is 0 and in each iteration of the function, it adds the current element value to the accumulator and at last, the array got converted to one single value.

const arr = [23, 12, 56, 90, 12];
// Sum the array using reduce method
const arrSum = arr.reduce((sum, element) => sum + element, 0);
console.log(arrSum);

const books = getBooks();

// Count total pages from the books array
const totalPagesCount = books.reduce(
  (totalPages, book) => totalPages + book.pages,
  0
);
console.log(totalPagesCount);
