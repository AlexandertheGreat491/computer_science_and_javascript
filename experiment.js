/*const buttonEl = document.getElementById("my-button");

const clickHandler = function () {
  let count = parseInt(this.getAttribute("date-count"));
  count++;

  this.setAttribute("date-count", count);
  this.textContent = `Clicks: ${count}`;
};

buttonEl.addEventListener("click", clickHandler);*/

//code example using a closure

/*const buttonEl = document.getElementById('my-button');

const clickHandler = function() {
  let count = 0;

  return function() {
    count++;
    this.textContent = `Clicks: ${count}`;
  };
};

buttonEl.addEventListener('click', clickHandler());*/

//another way of using closures
/*const buttons = document.getElementsByTagName('button');

for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickHandler());
}*/

//attaches the same self-contained closure to every <button> element

const containerEl = document.getElementById('container');

const clickHandler = function(event) {
    if (event.target.matches('button')) {
        event.target.textContent = 'Clicked!';
    }
};

containerEl.addEventListener('click', clickHandler);

