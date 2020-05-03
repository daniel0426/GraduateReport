const clockContainer = document.querySelector(".js-clock"),
  clockDisplay = clockContainer.querySelector("h1");

function displayClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const showHours = `${hours < 10 ? `0${hours}` : `${hours}`}`;
  const showMinutes = `${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
  const showSeconds = `${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
  const showClock = `${showHours}:${showMinutes}:${showSeconds}`;
  clockDisplay.innerText = showClock;
}

function init() {
  setInterval(() => {
    displayClock();
  }, 1000);
}
init();
