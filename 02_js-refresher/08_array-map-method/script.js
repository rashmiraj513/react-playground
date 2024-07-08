const { getBooks } = require('../../common-resources/common');
const getTotalReviewCount = require('../07_optional-chaining/script');

// Array.prototype.map()
// - The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
const arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map((element) => element * 2);
console.log(doubleArr);

// Get all the books
const books = getBooks();

// Get all the book's title using map method
const titles = books.map((book) => book.title);
console.log(titles);

// Get the essential data (title, author and reviewCount) of each book using map method
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewCount: getTotalReviewCount(book),
}));
console.log(essentialData);
