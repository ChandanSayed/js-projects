const toDoValue = document.getElementById("todo");
const toDoList = document.getElementById("todo-list");

function addList(e, t) {
  e.preventDefault();
  console.log(toDoValue.value);
  // let list;
  // list.createElement("li");
  // list.innerText = toDoValue.value;
  // toDoList.appendChild(list);
  const html = `<li >${toDoValue.value} <button onclick="deleteList(this)">delete</button> </li>`;
  toDoList.insertAdjacentHTML("beforeend", html);
}

function deleteList(item) {
  console.log(item.parentElement);
  item.parentElement.remove();
}
