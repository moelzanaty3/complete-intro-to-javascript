const button = document.querySelector('button')
const todosContainer = document.getElementById('todos')

function createTodo(todo) {
  const todoElement = document.createElement('li')
  todoElement.textContent = todo.todoName
  return todoElement
}

async function fetchData() {
  try {
    const URL = 'https://jsonplaceholder.typicode.com/todos'
    const response = fetch(URL)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

button.addEventListener('click', async () => {
  // change state of the button
  button.innerText = 'Loading...'
  // clear previous todos
  todosContainer.textContent = ''
  // fetch new todos
  const todos = await fetchData()
  // update UI with new todos
  const fragment = document.createDocumentFragment()
  todos.map((todo) => {
    fragment.appendChild(createTodo(todo))
  })
  todosContainer.appendChild(fragment)
})
