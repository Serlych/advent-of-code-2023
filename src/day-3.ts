async function readFileIntoLines(path: string): Promise<string[]> {
  const file = Bun.file(path);
  const text = await file.text();
  const lines = text.split('\n');
  
  lines.pop();
  
  return lines;
}

function isSpecialCharacter(char: string): boolean {
  return isNaN(parseInt(char)) && char !== '.';
}

function findNumberIndexes(str): { start: number, end: number }[] {
  const regex = /\d+/g;
  let matches = [...str.matchAll(regex)];
  return matches.map(match => {
    return { start: match.index, end: match.index + match[0].length - 1 };
  });
}

const lines = await readFileIntoLines('./input/day-3.txt');
const validNumbers = [];

lines.forEach((line, lineIndex) => {
  const ln = line.split('');
  
  const matches = findNumberIndexes(line);
  
  matches.forEach(({ start, end }) => {
    const number = parseInt(ln.slice(start, end + 1).join(''));
    
    for (let i = lineIndex - 1; i <= lineIndex + 1; i++) {
      for (let j = start - 1; j <= end + 1; j++) {
        let char = lines[i]?.[j];

        if (char === undefined) {
          continue;
        }
        
        if (isSpecialCharacter(char)) {
          validNumbers.push(number);
          break;
        }
      }
    }
  });
})

const sum = validNumbers.reduce((a, b) => a + b, 0);
console.log(sum)
