const { getBookById } = require('../../common-resources/common');
// Optional Chaining (?)
// - The Optional Chaining (?) operator accesses an objects's property or, calls a function. If the object accessed or, function called using this operator is undefined or, null, the expression short circuits and evalutes to undefined instead of throwing an error.
// - Basically, it means that in the chaining, when the value becomes undefind then it will stop the chaining and set the value to undefined. (You can further set that value to a default value with NULLISH COALESCING Operator.)

function getTotalReviewCount(book) {
  // If this value is undefined then set this to 0.
  const goodReads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodReads + librarything;
}

const book = getBookById(2);
console.log(getTotalReviewCount(book));

module.exports = getTotalReviewCount;
