const nameForm = document.querySelector(".js-form"),
  nameInput = nameForm.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const NAME_LS = "username",
  SHOWING_CN = "showing";

function askForName() {
  nameForm.classList.add(SHOWING_CN);
  nameForm.addEventListener("submit", handleSubmit);
}
function handleSubmit(e) {
  e.preventDefault();
  const currentValue = nameInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}
function paintGreeting(text) {
  nameForm.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text} !`;
}
function saveName(text) {
  localStorage.setItem(NAME_LS, text);
}

function loadName() {
  const currentUser = localStorage.getItem(NAME_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}
init();
