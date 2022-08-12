/*const buttonEl = document.getElementById("my-button");

const clickHandler = function () {
  let count = parseInt(this.getAttribute("date-count"));
  count++;

  this.setAttribute("date-count", count);
  this.textContent = `Clicks: ${count}`;
};

buttonEl.addEventListener("click", clickHandler);*/

//code example using a closure

const buttonEl = document.getElementById('my-button');

const clickHandler = function() {
  let count = 0;

  return function() {
    count++;
    this.textContent = `Clicks: ${count}`;
  };
};

buttonEl.addEventListener('click', clickHandler());
