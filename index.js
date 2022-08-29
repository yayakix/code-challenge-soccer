const testInput = require("fs").readFileSync("sample-input.txt", "utf8");

// Takes in a string of text and returns nested array of games
function formatInput(inputStr) {
  // split by line/game
  return inputStr.split("\n").map((item) => {
    // split by comma/team
    return item.split(",").map((item) => {
      // get index of split between name and score
      const lastIndex = item.lastIndexOf(" ");
      const name = item.slice(0, lastIndex).trim();
      const score = parseInt(item.slice(lastIndex + 1));

      return [name, score];
    });
  });
}

function solutionFunc(input) {
  const formattedInput = formatInput(input);
  let seenTeams = [];
  let currentDay = 1;
  formattedInput.forEach((game) => {
    const teamOne = game[0];
    const teamTwo = game[1];
    console.log("TEAM ONE IS", teamOne);
    console.log("TEAM TWO IS", teamTwo);
  });
  //   console.log(formattedInput);
  //   for loop,
  // make sure each name is unique- if not, then end of matchday
  //
  //   separate top 3 scores in each matchday
  //
  //   map of teams with scores

  //
}

solutionFunc(testInput);
