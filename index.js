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
  const scoreMap = {};
  formattedInput.forEach((game) => {
    const teamOne = game[0];
    const teamTwo = game[1];
    if (seenTeams.includes(teamOne[0]) || seenTeams.includes(teamTwo[0])) {
      currentDay += 1;
      seenTeams = [];
    }
    if (!(teamOne[0] in scoreMap)) {
      scoreMap[teamOne[0]] = 0;
    }
    if (!(teamTwo[0] in scoreMap)) {
      scoreMap[teamTwo[0]] = 0;
    }
    if (teamOne[1] == teamTwo[1]) {
      scoreMap[teamOne[0]] += 1;
      scoreMap[teamTwo[0]] += 1;
    } else if (teamOne[1] > teamTwo[1]) {
      scoreMap[teamOne[0]] += 3;
    } else if (teamOne[1] < teamTwo[1]) {
      scoreMap[teamTwo[0]] += 3;
    }
    console.log(scoreMap)
    seenTeams.push(teamOne[0]);
    seenTeams.push(teamTwo[0]);

    // console.log(currentDay, game);
    
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
