const GuitarModule2 = require("../src/guitar_object.js");
const guitar = new GuitarModule2.Guitar("");
// console.log(guitar.strings);
// for (const string in guitar.strings) {
// 	console.log(`${string} | ${guitar.strings[string][0]}`);
// }
const testNotesString = `Eb4
B4
F2B4
A2A3

Em chord`;
guitar.generateTab(testNotesString);
