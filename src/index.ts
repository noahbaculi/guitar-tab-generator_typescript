const GuitarModule2 = require("../src/guitar_object.js");

const guitar = new GuitarModule2.Guitar("Standard", 4);
// console.log(guitar.strings);

// for (const string in guitar.strings) {
// 	console.log(`${string} | ${guitar.strings[string][0]}`);
// }

const testNotesString = `
A2A3E4
A2
A3
E4

A2A3
`;
// console.log(guitar.calcFingerings("G5"));
guitar.generateTab(testNotesString);
