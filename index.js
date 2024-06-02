function hasTargetSum(array, target) {
  const numsEvaluated = new Set();
  for (const numCurrent of array) {
    const diff = target - numCurrent;
    if (numsEvaluated.has(diff)) return true;
    numsEvaluated.add(numCurrent)
  }
  return false;
}

/* 
  Complexity: O(n)
*/

/*
  numsEvaluated  = new set
  for numCurrent of array
  diff = target - numCurrent
  if numsEvaluated contains diff return true
  add numCurrent to numsEvaluated
  return false if no true
*/

/*
  My solution initally creates an empty set called numsEval, the numbers that will be
  evaluated for equality to the differences of a target number and the numbers in an array.
  On every iteration through the array, the difference of the current value and the target
  value will be compared to the values in the numsEval set. If there is a match, the function
  immediately returns true. If there is no match, the current number is added to numsEval to
  be evaluated against the next value in the array. This method is simple and efficient,
  eliminating the need for an inner and outer array iteration by using the has() method of set
  to determine a match. It also simplifies the process of ensuring that the function doesn't
  return true when a number is compared to itself by moving numbers from the array into numsEval
  prior to comparison. This also ensures that the function returns true when 2 instances of the
  same number exist in the array and their sum equals the target.

  I had initially tried several other solutions using inner and outer loops, and found success in
  that. But I realized there had to be a more efficient way of completing this task, which led me
  to start questioning how I could 'discard', as it were, array elements that had already been
  evaluated. In my quest, I found a solution that introduced the set() to me, which I don't
  believe I've encountered before.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
