const { getBookById, getYear } = require('../../common-resources/common');

const book = getBookById(3);

// Destructuring an object (Accessing the values from the object)
// The destructuring variable name must be same as the object keys.
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, pages, genres, publicationDate, hasMovieAdaptation);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// console.log(primaryGenre, secondaryGenre);

// Rest Operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// Spread Operator
const newGenres = ['Epic Fantasy', ...genres];
console.log(newGenres);

const updatedBook = {
  ...book,

  // Adding a new property (If this property already exists in the book, then it will be overwritten.)
  moviePublicationDate: '2001-12-19',

  // Overwriting an existing property
  pages: 1210,
};
console.log(updatedBook);

console.log(getYear(publicationDate));
