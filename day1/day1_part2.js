const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split('\n');
const leftNumbers = [];
const rightNumbers = [];
let similarityScore = 0;

lines.forEach((line) => {
  const [left, right] = line.trim().split(/\s+/).map(Number);
  leftNumbers.push(left);
  rightNumbers.push(right);
});

for (let i = 0; i < leftNumbers.length; i++) {
  let counter = rightNumbers.filter((x) => x == leftNumbers[i]).length;
  similarityScore += counter * leftNumbers[i];
}

console.log(similarityScore);
