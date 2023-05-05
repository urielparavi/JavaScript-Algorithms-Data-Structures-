// *Add1
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// console.log(addUpTo(6));

// Add2_Timing*
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// 6 * (6+1)/2

// console.log(addUpTo(6));

// Add_Timing
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
