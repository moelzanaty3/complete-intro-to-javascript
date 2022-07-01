function fetchTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((value) => console.log(value))
    .catch((error) => {
      console.error(`Whoops !!! ${error.message}`);
    })
    .finally(() => {
      console.log("clean up");
    });
}

fetchTodos();
