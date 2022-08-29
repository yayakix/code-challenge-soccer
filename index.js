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
      const score = item.slice(lastIndex + 1);

      return [name, score];
    });
  });
}

function solutionFunc() {
  console.log(formatInput(testInput));
}

solutionFunc();
