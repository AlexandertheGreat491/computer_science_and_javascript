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

/*var fizzBuzz = function (arr) {
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
};*/

/*fizzBuzz([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40,
  50,
]);*/

//100 % 2 = 0

//33 % 10 = 3

// Write a function that when given a particular number, console-logs its index in data array.

/*const data = [12, 23, 28, 38, 40, 54, 62, 71, 87, 99, 200];

const findIndex = (num) => {
  //iterates over the data array
  for (let i = 0; i < data.length; i++) {
    //if statement
    //number from the data array is strictly equal to num
    //index of that number is console logged
    if (data[i] === num) {
      console.log(`${num} found at index ${i}`);
      break;
      //loop stops running once the index is found
    }
    
  }
};*/

/*findIndex(99);
findIndex(87);
findIndex(71);
findIndex(62);
findIndex(54);
findIndex(40);
findIndex(38);
findIndex(28);
findIndex(23);
findIndex(12);*/

//findIndex(200);

/*Binary search continually divides the data in half based on whether the number I'm 
looking for is greater or less than a chosen middle point*/

/*const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num) => {
  //midpoints defined
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  //0 + 8 / 2 = 8 / 2 = 4 = index = 54
  //midpoints are indexes not numbers

  if (num === arr[middle]) {
    return "found it";
  } else if (num < arr[middle]) {
    right = middle;
    return `bring right down to ${right}`;
  } else if (num > arr[middle]) {
    left = middle + 1;
    return `bring left up to ${left}`;
  }
};*/

//console.log(binarySearch(data, 38));
//console.log(binarySearch(data, 23));
//console.log(binarySearch(data, 12));

//prints bring right down to 4
//because 23,38 is less than 54 (index 4) the midpoint that was selected

//console.log(binarySearch(data, 71));
//console.log(binarySearch(data, 87));
//console.log(binarySearch(data, 99));

//prints bring left up to 5 which is greater than the selected midpoint

/*const askForFrind = () => {
  inquirer
    .prompt({
      type: "input",
      message: "Enter a name",
      name: "frined",
    })
    .then(({ friend }) => {
      console.log(`Hello, ${friend}!`);
      askForFriend();
    });
};*/

/*const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
  //defining the midpoint
  let middle = Math.floor((left + right) / 2);

  //range overlapped, so never found number
  if (left > right) {
    return -1;
  }
  else if (num === arr[middle]) {
    return middle;
  }
  else if (num < arr[middle]) {
    //call again with a new right value
    return binarySearch(arr, num, left, middle - 1);
  }
  else {
    //call again with a new left value
    return binarySearch(arr, num, middle + 1, right);
  }
};

//set initial left and right values on first call
console.log(binarySearch(data, 12, 0, data.length - 1));*/

//Bubble sort
/*An algorithm in CS that involves comparing 2 indexes side-by-side, where if the index on the right is smaller
then the indexes will be swapped.*/

//Bubble sort as a nested for loop

//const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

/*const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      //compare arr[j] to arr[j+1]
      //swap places if needed
    }
  }

  return arr;
};*/

//console.log(data);

// Fibonacci sequence pseudocode

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, etc ...

// if num <= 2
// return 1 (the first two numbers in sequence)

// otherwise return
// same logic with num - 1
// plus
// same logic with num - 2

//adds the number 1 over and over again until the desired result is reached

//another solution

// if num <= 2
// return 1 (the first two numbers in sequence)

// create new array with [1, 1]

// loop from i = 2 to num
// push [i - 1] + [i - 2] to array

// return last item in array

// main difference is that the numbers are put into an array in the second example


