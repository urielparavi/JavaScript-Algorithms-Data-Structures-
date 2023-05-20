// 69. Built-In JavaScript Sorting

// Compare by numbers
// const numberCompare = (num1, num2) => {
//   return num1 - num2;
// };

// console.log([6, 4, 15, 10].sort(numberCompare));

// Compare by length
const compareByLen = (str1, str2) => {
  return str2.length - str1.length;
};

console.log(
  ['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen)
);
