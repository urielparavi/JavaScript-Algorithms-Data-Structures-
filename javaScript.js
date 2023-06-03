// 87. Merging Arrays: Implementation

const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));
// console.log(merge([], [1, 3]));
// console.log(merge([100], [1, 2, 3, 5, 6]));

// 89. Writing Merge Sort Part 2

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
  // mergeSort();
};

console.log(mergeSort([10, 24, 76, 73]));

// Example how we did get the solution
// var arr = [10, 24, 76, 73, 72, 1, 9];

// Math.floor(arr.length / 2);

// The first halve
// arr.slice(0, 3);

// The second halve
// arr.slice(3);
