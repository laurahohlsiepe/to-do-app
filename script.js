let todoList = document.querySelector("#newUl");
let todoInput = document.querySelector("#input");
let todobtn = document.querySelector("#to-do-btn");

let deletebtn = document.querySelector("#delete-btn");

todobtn.addEventListener("click", addNewItem);

deletebtn.addEventListener("click", removeItem);

function addNewItem() {
  const newTextNode = todoInput.value;
  const li = document.createElement("li");

  const toDocheckBox = document.createElement("input");
  toDocheckBox.type = "checkbox";
  li.appendChild(toDocheckBox);

  const todoTextNode = document.createTextNode(newTextNode);
  li.appendChild(todoTextNode);

  todoList.appendChild(li);

  todoInput.value = "";
}

function removeItem() {
  todoList.innerText = "";
}

todoList.addEventListener("changed", function (e) {
  const checkbox = e.target;
  const liElement = checkbox.parentElement;
  if (checkbox.checked) {
    liElement.style.textDecoration = "line-through";
    liElement.classList.add("todo-done");
  } else {
    liElement.style.textDecoration = "";
    liElement.classList.remove("todo-done");
  }
});
