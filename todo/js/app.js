let todoListContainer = [];

const toDoValue = document.getElementById("todo");
const toDoList = document.getElementById("todo-list");

function addList(e, t) {
  e.preventDefault();
  console.log(toDoValue.value);
  const id = Date.now();
  todoListContainer.push({ id: id, value: toDoValue.value });

  toDoList.innerHTML = "";
  toDoValue.value = "";
  toDoValue.focus();
  renderTodoList();
}

function deleteList(id) {
  const list = todoListContainer.filter(function (todoList) {
    return todoList.id !== id;
  });

  todoListContainer = list;
  toDoList.innerHTML = "";
  renderTodoList();
}

function renderTodoList() {
  todoListContainer.forEach(function (list) {
    const html = `<li >${list.value} <button onclick="deleteList(${list.id})">delete</button> </li>`;
    toDoList.insertAdjacentHTML("beforeend", html);
  });
}
