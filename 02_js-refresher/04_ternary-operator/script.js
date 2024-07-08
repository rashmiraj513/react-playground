const { getBookById } = require('../../common-resources/common');

const book = getBookById(3);

const pages = book.pages;

// Ternary Operator
const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000';
console.log(`The book has ${pagesRange} pages.`);
