const GuitarModule2 = require("../src/guitar_object.js");

const guitar = new GuitarModule2.Guitar("");
// console.log(guitar.strings);

// for (const string in guitar.strings) {
// 	console.log(`${string} | ${guitar.strings[string][0]}`);
// }

const testNotesString = `
Eb4
A2A3

Em chord
`;
// guitar.generateLineFingerings([
// 	["E2"],
// 	["A2", "A3"],
// 	["E4", "C#4", "G3", "E3", "A2"],
// ]);
guitar.generateTab(testNotesString);
