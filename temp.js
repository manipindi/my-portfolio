var readline = require("readline-sync");
const process = require("process");
var args = process.argv;
var array = [];
for (var i = 2; i < args.length; i++) {
  array.push(args[i]);
}
var m = readline.question();
findPair(array, m);

function findPair(arr, n) {
  let i = 0,
    j = 1,
    count = 0;

  arr.sort((a, b) => {
    return a - b;
  });

  while (i < arr.length && j < arr.length) {
    if (i != j && arr[j] - arr[i] == n) {
      count++;
      j++;
    } else if (arr[j] - arr[i] < n) {
      j++;
    } else {
      i++;
    }
  }
  console.log("The number of such pairs is " + count);
}
