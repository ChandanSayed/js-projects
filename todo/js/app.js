const todoListContainer = [];

const toDoValue = document.getElementById("todo");
const toDoList = document.getElementById("todo-list");

function addList(e, t) {
  e.preventDefault();
  const id = Date.now();
  todoListContainer.push({ id: id, value: toDoValue.value });

  toDoList.innerHTML = "";
  toDoValue.value = "";
  toDoValue.focus();
  renderTodoList();
}

function deleteList(id) {
  const index = todoListContainer.findIndex(function (todo) {
    return todo.id === id;
  });

  todoListContainer.splice(index, 1);
  renderTodoList();
}

function renderTodoList() {
  toDoList.innerHTML = "";
  todoListContainer.forEach(function (list) {
    const html = `<li >${list.value} <button onclick="deleteList(${list.id})">delete</button>
     <button onclick="edit(${list.id},'${list.value}')">Edit</button></li>`;
    toDoList.insertAdjacentHTML("beforeend", html);
  });
}

function edit(id, value) {
  toDoValue.value = value;
  toDoValue.setAttribute("data-id", id);
}

function update() {
  const value = toDoValue.value;
  const id = toDoValue.getAttribute("data-id") * 1;

  const index = todoListContainer.findIndex(function (toList) {
    return toList.id === id;
  });

  todoListContainer[index].value = value;

  renderTodoList();
  toDoValue.removeAttribute("data-id");
  toDoValue.value = "";
  toDoValue.focus();
}
