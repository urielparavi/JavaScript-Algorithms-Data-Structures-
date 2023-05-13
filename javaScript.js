// 49. Helper Method Recursion
const collectOddValues = (arr) => {
  let result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // We call it on everything else in the array, excluding that first element
    helper(helperInput.slice(1));
  };

  helper(arr);

  return result;
};

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
