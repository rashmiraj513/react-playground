const { getBookById } = require('../../common-resources/common');

// Truthy and Falsy
// - In JavaScript, there are two types of values: `truthy` and `falsy`.
// - Truthy values are values that evaluate to true when used in boolean context while falsy values evalute to false.
// - The following values are falsy in JavaScript: `false, 0, -0, NaN, null, undefined, and "" (Empty String)`.
// - All other values are truthy.

// Short Circuiting
// - Short Circuiting is a feature of the logical operators (&&, ||) in JavaScript that allows them to return a value without evaluating the whole expression.
// - It works by evaluating an expression from left to right and returning the value of the first operand that determines the final result.
// - For example, in the expression `false && true`, the `&&` operator will return `false` as soon as it evaluates the first operand, `false`. This is because the `&&` operator returns `true` if both the operands are `true`.

// Logical AND (&&)
// - In a logical operation involving `&& (AND)`, if the first operand is falsy, JavaScript will short-circuit and return the first operand without evaluating the second operand. If the first operand is truthy, JavaScript will return the second operand.
console.log(true && 'Some String');
console.log(false && 'Some String');
console.log('rashmi' && 'Some String');
console.log(0 && 'Some String');

let book = getBookById(3);
const { hasMovieAdaptation } = book;
console.log(hasMovieAdaptation && 'This book has a movie adapdation');

// Logical OR (||)
// - In a logical operation involving `|| (OR)`, if the first operand is truthy, JavaScript will short-circuit and return the first operand. If the first operand is falsy, JavaScript will return the second operand.
console.log(true || 'Some String');
console.log(false || 'Some String');

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED';
console.log(spanishTranslation);

// Get another book with id = 2
book = getBookById(2);
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || 'No Data';
console.log(countWrong); // This is returning "No Data" when the reviewsCount is 0.

// To get the actual count when reviewsCount is 0, use NULLISH COALESCING (??) operator.
// NULLISH COALESCING Operator (??)
// - This operator returns its right-hand side operand when its left-hand side operand is null or, undefined otherwise returns its left-hand side operand.
const count = book.reviews.librarything.reviewsCount ?? 'No Data';
console.log(count);
