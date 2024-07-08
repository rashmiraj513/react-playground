const { getBookById, getYear } = require('../../common-resources/common');

const book = getBookById(3);

const { publicationDate, hasMovieAdaptation } = book;

const { title, pages, author } = book;

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. 
The book has ${hasMovieAdaptation ? '' : 'not'}been adapted as a movie.`;

console.log(summary);
