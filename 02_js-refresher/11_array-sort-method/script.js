const { getBooks } = require('../../common-resources/common');

// Array.prototype.sort()
// - The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. This may lead to unexpected results when sorting numbers. To sort numbers correctly, a compare function needs to be provided.
// The compare function is called with pairs of elements (a and b) from the array. The function returns:
// - A negative value if a should come before b.
// - Zero, if a and b are considered equal (their order doesn't change).
// - A positive value if a should come after b.

// - The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
// - To sort the elements in an array without mutating the original array, use toSorted().

const arr = [3, 7, 1, 9, 6];
// Since, sort() method sorts in-place. Hence, pass a copy of array if you don't want to change the original array.
// const sorted = arr.sort((a, b) => a - b);
const sorted = arr.slice().sort((a, b) => a - b);

console.log(sorted);
console.log(arr);

// The working of above code:
// In the provided compare function, (a, b) => a - b
// - If a is less than b then (a - b) will be negative. So, a will come before b.
// - If a is equal to b then (a - b) will be 0. So, the order reamins unchanged.
// - If a is greater than b then (a - b) will be positive. So, a will come after b.

// Get all the books
const books = getBooks();

// Sort books in increasing order based on the number of pages
const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);
