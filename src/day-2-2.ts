const file = Bun.file('./input/day-2.txt');
const text = await file.text();
const lines = text.split('\n');

lines.pop();

const powers = lines.map(line => {
  const sets = line.split(':')[1].split(';');
  const colors = ['red', 'green', 'blue'];
  
  const maxValues = colors.map(color => {
    const cubes = sets
      .flatMap(set => set.split(',')
      .filter(cube => cube.includes(color))
      .map(cube => parseInt(cube.replace(/\D/g, ''))));
    return Math.max(...cubes);
  });
  
  return maxValues.reduce((a, b) => a * b, 1);
});

const sum = powers.reduce((a, b) => a + b, 0);
console.log(sum);
