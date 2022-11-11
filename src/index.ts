const GuitarModule2 = require("../src/guitar_object.js");

const guitar = new GuitarModule2.Guitar("");
// console.log(guitar.strings);

// for (const string in guitar.strings) {
// 	console.log(`${string} | ${guitar.strings[string][0]}`);
// }

const testNotesString = `
G3
A3
Bb3
F4
F4C4Bb3
CChord
CChord
CChord

D4

C4
Bb3
A3
`;
const output = guitar.generateTab(testNotesString);
console.log(output);
