const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const linesAsArrays = input
  .split('\n')
  .map((line) => line.split(/\s+/).map(Number));

let countSaveReports = 0;

function isAllIncreasingByLessThanThree(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1] || arr[i + 1] - arr[i] > 3) {
      return false;
    }
  }
  return true;
}

function isAllDecreasingByLessThanThree(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1] || arr[i] - arr[i + 1] > 3) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < linesAsArrays.length; i++) {
  if (
    isAllDecreasingByLessThanThree(linesAsArrays[i]) ||
    isAllIncreasingByLessThanThree(linesAsArrays[i])
  ) {
    countSaveReports++;
  }
}

console.log(countSaveReports);
