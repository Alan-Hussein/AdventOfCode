import fs from "fs";

function partOne(file) {
  const lines = fs.readFileSync(file, "utf-8").trim().split("\n");

  const values = lines.map((line) => {
    const digits = line.match(/\d/g); // Extract all digits from the line
    if (digits && digits.length >= 1) {
      const first = digits[0];
      const last = digits.length > 1 ? digits[digits.length - 1] : digits[0];
      return Number(`${first}${last}`); // Concatenate and convert to a number
    } else {
      return 0; // Handle cases where there are no digits
    }
  });
  return values.reduce((s, v) => s + v);
}

console.log(partOne("./input.txt"));
