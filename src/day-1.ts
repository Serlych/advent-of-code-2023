const file = Bun.file('./input/day-1.txt');
const text = await file.text();
const lines = text.split('\n');

let results = [];

for (const line of lines) {
  const charArray = line.replace(/\D/g,'').split('');
  
  let firstDigit = null;
  let secondDigit = null;
  
  if (charArray.length === 0) {
    continue;
  }
  
  if (charArray.length === 1) {
    firstDigit = charArray[0];
    secondDigit = charArray[0];
  }
  
  if (charArray.length >= 2) {
    firstDigit = charArray[0];
    secondDigit = charArray[charArray.length - 1];
  }
  
  let twoDigits = firstDigit + secondDigit;
  twoDigits = parseInt(twoDigits);
  results.push(twoDigits);
}

const sum = results.reduce((a, b) => a + b, 0);
console.log(sum);
