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

/*const containerEl = document.getElementById('container');

const clickHandler = function(event) {
    if (event.target.matches('button')) {
        event.target.textContent = 'Clicked!';
    }
};

containerEl.addEventListener('click', clickHandler);*/

//Basic Algorithms

//Algorithms are a series of steps to solve a problem or perform an action.

//a solution to the even or odd problem

/*const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
};*/

//An isEven() solution that doesn't use the % operator

const isEven = (num) => {
  let even = true;

  for (let i = 0; i < num; i++) {
    even = !even;
  }

  return even;
};

//isEven() will return an even number every time the loop runs.

/*const isOdd = (num) => {
  let odd = true;

  for (let i = 0; i < num; i++) {
    odd = !odd;
  }

  return odd;
};*/

//same logic should work if I want a function to return an odd number

//the famous FizzBuzz problem
//Criteria for FizzBuzz is to print the number 1 to 100.
//print "Fizz" for every multiple of 3
//"Buzz" for every multiple of 5
//"FizzBuzz" for every multiple of 3 and 5. Output:

/*1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19*/

// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);

    if (arr[i] % 3 == 0 && arr[i] % 5 !== 0) {
      console.log("Fizz");
      //console.log(arr[i] % 3);
      
    } 

    if (arr[i] % 5 == 0 && arr[i] % 3 !== 0) {
      console.log("Buzz");
    }

    if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      console.log("Fizz Buzz");
    }

    if (arr[i] % 3 !== 0 && arr[i] % 5 !== 0) {
      console.log(arr[i]);
    }
  }
};

fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50]);

//100 % 2 = 0

//33 % 10 = 3

