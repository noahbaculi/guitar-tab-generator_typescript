const GuitarModule2 = require("../src/guitar_object");

const guitar = new GuitarModule2.Guitar("", 2);
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
A3`.repeat(5);

// const arrangement = new GuitarModule.Arrangement(guitar, testNotesString);
// console.log(arrangement.pitchLines);
// console.log("-----------------------------");
// console.log(arrangement.linePitchFingerings);
// console.log("-----------------------------");
// console.log(arrangement.lineFingeringOptions);
// console.log("-----------------------------");
// console.log(arrangement.bestFingerings);
// console.log("-----------------------------");

const arrangement = new GuitarModule2.Arrangement(guitar, "");
console.time("doSomething");
const test2 = arrangement.getStringToFretFingerings(arrangement.bestFingerings);
console.log(test2);
console.timeEnd("doSomething");
