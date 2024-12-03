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

function isSafeReport(arr) {
  if (
    isAllIncreasingByLessThanThree(arr) ||
    isAllDecreasingByLessThanThree(arr)
  ) {
    return true;
  }

  // Could be improved to remove only the number that causes
  // the previous checks to fail
  for (let i = 0; i < arr.length; i++) {
    const modifiedArr = arr.slice(0, i).concat(arr.slice(i + 1));
    if (
      isAllIncreasingByLessThanThree(modifiedArr) ||
      isAllDecreasingByLessThanThree(modifiedArr)
    ) {
      return true;
    }
  }

  return false;
}

for (let i = 0; i < linesAsArrays.length; i++) {
  if (isSafeReport(linesAsArrays[i])) {
    countSaveReports++;
  }
}

console.log(countSaveReports);
