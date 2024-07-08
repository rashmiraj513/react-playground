const { getBooks } = require('../../common-resources/common');

const books = getBooks();

// Add a book object to an array
const newBook = {
  id: 6,
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J. K. Rowling',
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// Delete a book with id = 3 object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// Update the page of book with id = 1 in the array
const booksAfterUpdate = books.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
console.log(booksAfterUpdate);
