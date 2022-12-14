const solutionFunc = require("./index");

const INPUT_ONE = `San Jose Earthquakes 3, Santa Cruz Slugs 3
Capitola Seahorses 1, Aptos FC 0
Felton Lumberjacks 2, Monterey United 0
Felton Lumberjacks 1, Aptos FC 2
Santa Cruz Slugs 0, Capitola Seahorses 0
Monterey United 4, San Jose Earthquakes 2
Santa Cruz Slugs 2, Aptos FC 3
San Jose Earthquakes 1, Felton Lumberjacks 4
Monterey United 1, Capitola Seahorses 0
Aptos FC 2, Monterey United 0
Capitola Seahorses 5, San Jose Earthquakes 5
Santa Cruz Slugs 1, Felton Lumberjacks 1`;

const OUTPUT_ONE = `Matchday 1
Capitola Seahorses, 3 pts
Felton Lumberjacks, 3 pts
San Jose Earthquakes, 1 pt

Matchday 2
Capitola Seahorses, 4 pts
Aptos FC, 3 pts
Felton Lumberjacks, 3 pts

Matchday 3
Aptos FC, 6 pts
Felton Lumberjacks, 6 pts
Monterey United, 6 pts

Matchday 4
Aptos FC, 9 pts
Felton Lumberjacks, 7 pts
Monterey United, 6 pts

`;

const INPUT_TWO = `San Jose Earthquakes 6, Santa Cruz Slugs 3
Capitola Seahorses 1, Aptos FC 4
Sea Dogs 12, Grass Hoppers 14
Felton Lumberjacks 4, Monterey United 9
Felton Lumberjacks 1, Grass Hoppers 2
Sea Dogs 3, Aptos FC 2
Santa Cruz Slugs 0, Capitola Seahorses 0
Monterey United 4, San Jose Earthquakes 2
Santa Cruz Slugs 2, Aptos FC 3
San Jose Earthquakes 3, Felton Lumberjacks 4
Sea Dogs 4, Capitola Seahorses 6
Monterey United 1, Grass Hoppers 5
Sea Dogs 5, Monterey United 4
Aptos FC 1, Grass Hoppers 3
Capitola Seahorses 5, San Jose Earthquakes 3
Santa Cruz Slugs 1, Felton Lumberjacks 1`;

const OUTPUT_TWO = `Matchday 1
Aptos FC, 3 pts
Grass Hoppers, 3 pts
Monterey United, 3 pts

Matchday 2
Grass Hoppers, 6 pts
Monterey United, 6 pts
Aptos FC, 3 pts

Matchday 3
Grass Hoppers, 9 pts
Aptos FC, 6 pts
Monterey United, 6 pts

Matchday 4
Grass Hoppers, 12 pts
Capitola Seahorses, 7 pts
Aptos FC, 6 pts

`;

INPUT_THREE = `Capitola Seahorses 1, Aptos FC 0
Felton Lumberjacks 2, Monterey United 0
Felton Lumberjacks 1, Aptos FC 2
Monterey United 4, Capitola Seahorses 0
Felton Lumberjacks 4, Aptos FC 3
Monterey United 1, Capitola Seahorses 0
Aptos FC 2, Monterey United 0
Capitola Seahorses 5, Felton Lumberjacks 1`;

OUTPUT_THREE = `Matchday 1
Capitola Seahorses, 3 pts
Felton Lumberjacks, 3 pts
Aptos FC, 0 pts

Matchday 2
Aptos FC, 3 pts
Capitola Seahorses, 3 pts
Felton Lumberjacks, 3 pts

Matchday 3
Felton Lumberjacks, 6 pts
Monterey United, 6 pts
Aptos FC, 3 pts

Matchday 4
Aptos FC, 6 pts
Capitola Seahorses, 6 pts
Felton Lumberjacks, 6 pts

`;

test("use sample input", () => {
  expect(solutionFunc(INPUT_ONE)).toBe(OUTPUT_ONE);
});
test("have more than 3 games in a matchday", () => {
  expect(solutionFunc(INPUT_TWO)).toBe(OUTPUT_TWO);
});
test("have less than 3 games in a matchday", () => {
  expect(solutionFunc(INPUT_THREE)).toBe(OUTPUT_THREE);
});