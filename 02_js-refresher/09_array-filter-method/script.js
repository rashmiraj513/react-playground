const { getBooks } = require('../../common-resources/common');
// Array.prototype.filter()
// - The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const books = getBooks();

// Filter books having more than 500 pages using filter method
const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);

// Filter books having more than 500 pages and has a movie adaptation using filter method
// Approach 1: Chaining the filter method
const longBooksWithMovieAdaptation = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovieAdaptation);

// Approach 2: Using Logical AND inside filter method
const longBooksWithMovieAdaptation2 = books.filter(
  (book) => book.pages > 500 && book.hasMovieAdaptation
);
console.log(longBooksWithMovieAdaptation2);

// Filter Adventure books
const adventureBooks = books
  .filter((book) => book.genres.includes('adventure'))
  .map((book) => book.title);
console.log(adventureBooks);
