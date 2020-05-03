const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "todos";
let todo = [];

function saveToDo() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todo));
}

function deleteToDo(e) {
  const btn = e.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = todo.filter(function (todo) {
    return todo.id !== parseInt(li.id);
  });
  todo = cleanToDos;
  saveToDo();
}
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = todo.length + 1;
  delBtn.innerText = "❌";
  delBtn.style.marginLeft = "10px";
  
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  todo.push(toDoObj);
  saveToDo();
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (todo) {
      paintToDo(todo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
