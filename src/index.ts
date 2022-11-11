const GuitarModule2 = require("../src/guitar_object.js");

const guitar = new GuitarModule2.Guitar("");
// console.log(guitar.strings);

// for (const string in guitar.strings) {
// 	console.log(`${string} | ${guitar.strings[string][0]}`);
// }

const testNotesString = `E4
Eb4
E4
Eb4
E4
B3
D4
C4

A2A3
E3
A3
C3
E3
A3`;
const output = guitar.generateTab(testNotesString);
console.log("-----------------------------");
console.log(output);
