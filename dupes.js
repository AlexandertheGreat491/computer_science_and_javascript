//Module solution

//pseudocode for:
/*You'll need two higher-level variables to track the value that is 
currently appearing the most 
and how many times it is appearing. */

// create the variable for most appearing value
// create variable for most appearing count

//pseudocode for:
/*You'll need to compare every item in the arry to every other item 
  and count how many times they match*/

// loop over array (i)
//start a counter for number of occurences

// loop over array again (j)
// compare indexes
// if same, increase counter

// if counter > current most appearing count
// update "most" variables to match

// return most appearing value and count

// refactor

// create empty object map

/* loope over array
if array[i] not in map
create new key/value pair on map = 1
else
increment key/value pair by 1 */
// map() creates a new array from calling a function for every array element.

// create variable for most appearing value
// create variable for most appearing count

/*loop over object keys/values
if value > current most appearing count
update "most" variables to match */

// return most appearing value and count

// array

const numbers = [
  41, 24, 1, 40, 41, 32, 33, 50, 5, 34, 50, 5, 34, 5, 21, 21, 43, 43, 4, 49, 24,
];

// create the variable for most appearing value
const mostDuplicates = (arr) => {
  //two higher-level variables that track the highest value numbers
  //and the numbers that occur most often

  let mostValue;
  let mostCount = 0;

  // loops over array (i)
  //start a counter for number of occurences

  for (let i = 0; i < arr.length; i++) {
    let counter = 0;

    // loop over array again (j)
    // compare indexes
    // if same, increase counter

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }

    // if counter > current most appearing count
    // update "most" variables to match

    if (counter > mostCount) {
      mostCount = counter;
      mostValue = arr[i];
    }
  }

  // return most appearing value and count

  return `${mostValue} appeared ${mostCount} times.`;
};

//mostDuplicates(arr);
//console.log(mostDuplicates(numbers));
// prints the numbers that occur most often in the array

const optimizedDuplicates = (arr) => {
  // creates empty object map
  const map = {};

  /* loope over array
if array[i] not in map
create new key/value pair on map = 1
else
increment key/value pair by 1 */
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (map[value] === undefined) {
      map[value] = 1;
    } else {
      map[value]++;
    }
  }

  // creates variable for most appearing value

  let mostValue;

  // creates variable for most appearing count

  let mostCount = 0;

  for (const value in map) {
    if (map[value] > mostCount) {
        mostCount = map[value];
        mostValue = value;
    }
  }

  // returns most appearing value and count
  return `${mostValue} appeared ${mostCount} times.`;
};

//console.log(optimizedDuplicates(numbers));

module.exports = { mostDuplicates, optimizedDuplicates };
