import fs from "fs";

function partOne(file) {
  const lines = fs.readFileSync(file, "utf-8").trim().split("\n");

  let total = 0;
  for (let line of lines) {
    let [game, info] = line.split(": ");
    let games = info.split("; ");
    let valid = true;

    for (let game of games) {
      let cubeCounts = {
        red: 12,
        green: 13,
        blue: 14,
      };

      for (let cube of game.split(", ")) {
        let [count, colour] = cube.split(" ");
        count = parseInt(count);
        cubeCounts[colour] -= count;

        for (let key of Object.keys(cubeCounts)) {
          if (cubeCounts[key] < 0) {
            valid = false;
            break;
          }
        }
      }
    }

    if (valid) {
      total += parseInt(game.split(" ")[1]);
    }
  }

  return total;
}

console.log(partOne("./input.txt"));
