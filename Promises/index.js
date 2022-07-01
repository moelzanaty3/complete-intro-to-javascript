async function fetchTodoAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    console.log(todos);
  } catch (error) {
    console.error(`Whoops !!! ${error.message}`);
  }
}
fetchTodoAsync();
