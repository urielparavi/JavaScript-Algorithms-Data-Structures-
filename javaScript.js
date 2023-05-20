// 70. Bubble Sort: Overview

const bubbleSort = (arr) => {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    // console.log('ONE PASS COMPLETE!');
  }
  return arr;
};

console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));
// [37, 45, 29, 8]
// [37, 29, 8, 45]
// [29, 8, 37, 45]
