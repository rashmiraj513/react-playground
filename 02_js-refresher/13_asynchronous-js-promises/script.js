// Promise
// - A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. Essentially, it is a returned object to which you attach callbacks, instead of passing callbacks into a function.

// - Promises are most commonly used with asynchronous programming, where they provide a more powerful and flexible way of handling asynchronous operations compared to traditional callback functions.

// - A Promise is in one of these states:
// Pending: The Promise’s outcome hasn’t yet been determined, because the asynchronous operation that will produce its result hasn’t completed yet.
// Fulfilled: The asynchronous operation has completed, and the Promise has a resulting value.
// Rejected: The asynchronous operation failed, and the Promise will never be fulfilled. In the rejected state, a Promise has a reason that indicates why the operation failed.

// Fetch the data from an API using Promises
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((data) => console.log(data));
