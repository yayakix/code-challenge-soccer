const inputStr = `San Jose Earthquakes 3, Santa Cruz Slugs 3
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

console.log(
  inputStr.split("\n").map((item) => {
    return item.split(",").map((item) => {
      let name = "";
      let score = 0;
      let lastIndex = item.lastIndexOf(" ");
      name = item.slice(0, lastIndex).trim();
      score = item.slice(lastIndex + 1);

      return [name, score];
    });
  })
);
