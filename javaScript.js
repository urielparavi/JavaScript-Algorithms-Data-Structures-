// chartCount("Your PIN number is 1234");  => example to the tesk

function chartCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string;
  // values should be  the counts for those characters
}

// function chartCount(str) {
//   // Make object to return at end
//   let obj = {};
//   // loop over string, for each character...
//   for (let i = 0; i < str.length; i++) {
//     // h, e, l, l, o
//     let char = str[i].toLowerCase();
//     // if the char is a number/letter AND is a key in object, add one to count
//     // if is greater than zero, it's meaning it's already in there

//     if (/[a-z0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//         // if the char is a number/letter AND not in object, add it to object and set value to 1
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }

//   //if character is something else (space, period, etc..) don't do anything
//   // return object at end
//   return obj;
// }

// console.log(chartCount('Hi there'));

//
function chartCount(str) {
  let obj = {};
  for (let char of str) {
    // h, e, l, l, o
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      // Takes a character like a, accesses the corresponding value in our obj. so if it's true, we're going to add one
      // to it. else, if there nothing in there, we're going to set it to 1
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// console.log(chartCount('Hello hi! '));
// console.log('r'.charCodeAt(0)); // For each letter we get a number code

function isAlphaNumeric(char) {
  // 0 => give us the first character which is the only character
  let code = char.charCodeAt(0);
  if (
    // numeric(0-9)
    !(code > 47 && code < 58) &&
    // upper alpha (A-Z)
    !(code > 64 && code < 91) &&
    // lowe alpha (a-z)
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

// chartCode(0);
console.log(chartCount('Hello WORLD hi!!! '));
