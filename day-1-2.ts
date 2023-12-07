const file = Bun.file('./day-1-2-input.txt');
const text = await file.text();
const lines = text.split('\n');

let cubes = { red: 12, green: 13, blue: 14 };
const invalidGames = new Set();
const validGames = [];

lines.forEach(line => {
  const [gameNumberStr, ...sets] = line.split(':');
  const gameNumber = parseInt(gameNumberStr.replace(/\D/g,''));

  sets.forEach(set => {
    const gameCubes = set.split(',').map(cube => cube.trim());

    gameCubes.forEach(cube => {
      const [countStr, color] = cube.split(' ');
      const count = parseInt(countStr);

      if (cubes[color] < count) {
        console.log(`Game ${gameNumber} is invalid`);
        invalidGames.add(gameNumber);
      }
    });
  });

  if (!invalidGames.has(gameNumber)) {
    console.log(`Game ${gameNumber} is valid`);
    validGames.push(gameNumber);
  }
});

validGames.pop();

const sum = validGames.reduce((a, b) => a + b, 0);
console.log(sum);
