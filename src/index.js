const GuitarModule2 = require("../src/guitar_object.js");
const guitar = new GuitarModule2.Guitar("");
// console.log(guitar.strings);
// for (const string in guitar.strings) {
// 	console.log(`${string} | ${guitar.strings[string][0]}`);
// }
const testNotesString = `
E2F2F#2


`;
const output = guitar.generateTab(testNotesString);
console.log("-----------------------------");
console.log(output);
