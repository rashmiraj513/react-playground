const { getBookById } = require('../../common-resources/common');

// Get a book by id
const book = getBookById(3);
console.log(book);

// const title = book.title;
// console.log(title);
// const author = book.author;
// console.log(author);

// Destructuring an object (Accessing the values from the object)
// The destructuring variable name must be same as the object keys.
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, pages, genres, publicationDate, hasMovieAdaptation);
