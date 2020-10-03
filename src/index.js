const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let letter = "";
  let example = "";
  let finalMessage = "";
  for (let i = 10; i <= expr.length; i += 10) {
    example = "";
    letter = expr.slice(i - 10, i);

    if (letter.includes("*")) {
      finalMessage += " ";
      continue;
    } else {
      for (let j = 0; j < letter.length; j += 2) {
        if (letter[j] + letter[j + 1] === "10") {
          example += ".";
        } else if (letter[j] + letter[j + 1] === "11") {
          example += "-";
        } else if (letter[j] + letter[j + 1] === "00") {
          continue;
        }
      }

      for (const [key, value] of Object.entries(MORSE_TABLE)) {
        if (key === example) finalMessage += value;
      }
    }
  }
  console.log(finalMessage);
  return finalMessage;
}

module.exports = {
  decode,
};
