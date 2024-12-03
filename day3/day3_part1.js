const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const pattern = /mul\((\d+),(\d+)\)/g;

let sum = 0;

let match;
while ((match = pattern.exec(input)) !== null) {
  sum += match[1] * match[2];
}

console.log(sum);
