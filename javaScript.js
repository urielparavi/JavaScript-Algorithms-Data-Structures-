// Recursion
const countDown = (num) => {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
};

// print 3
// countDown(2);
// print 2
// countDown(1);
// print 1
// countDown(0); => this is the base case (our end point)
// print "All done!"

// countDown(5);

// Iteratively (without recursion)
// const countDown = (num) => {
//   for (var i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log('All done!');
// };

// countDown(7);
