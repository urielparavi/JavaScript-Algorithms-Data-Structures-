// 80. Insertion Sort: Implementation

const insertionSort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(insertionSort([2, 1, 9, 7, 6, 4]));
// console.log(insertionSort([4, 3, 2, 1]));

// [1, 2, 9, 76, 0]
// [0, 1, 2, 9, 76]        0

// [1, 2, 9, 76]  20
