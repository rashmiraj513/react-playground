// Fetch the data from an API using async and await
async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  // console.log(todos);
  return data;
}

const todos = await getTodos();
console.log(todos);
