const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split('\n');
const leftNumbers = [];
const rightNumbers = [];
let distance = 0;

lines.forEach((line) => {
  const [left, right] = line.trim().split(/\s+/).map(Number);
  leftNumbers.push(left);
  rightNumbers.push(right);
});

for (let i = leftNumbers.length; i > 0; i--) {
  minLeft = Math.min(...leftNumbers);
  minRight = Math.min(...rightNumbers);

  leftNumbers.splice(leftNumbers.indexOf(minLeft), 1);
  rightNumbers.splice(rightNumbers.indexOf(minRight), 1);

  difference = Math.abs(minLeft - minRight);
  distance += difference;
}

console.log(distance);
