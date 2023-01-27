/**
 * Console Log objects to full depth
 * @param objs Objects to print
 */
function print(...objs) {
    for (const obj of objs) {
        console.dir(obj, { depth: null });
    }
}
const GuitarModule2 = require("../src/guitar_object");
const guitar = new GuitarModule2.Guitar("", 0);
// console.log(guitar.strings);
// for (const string in guitar.strings) {
// 	console.log(`${string} | ${guitar.strings[string][0]}`);
// }
const testNotesString = `
Eb4
B4
A2A3

F2B4

Em chord
`.repeat(1);
// const arrangement = new GuitarModule2.Arrangement(guitar, testNotesString);
// console.log(arrangement.pitchLines);
// console.log("-----------------------------");
// console.log(arrangement.linePitchFingerings);
// console.log("-----------------------------");
// console.log(arrangement.lineFingeringOptions);
// console.log("-----------------------------");
// console.log(arrangement.bestFingerings);
// console.log("-----------------------------");
console.time("doSomething");
const arrangement = new GuitarModule2.Arrangement(guitar, testNotesString);
// print(arrangement.lineFingeringOptions);
print(arrangement.bestFingerings);
// console.log(arrangement.bestFingerings);
console.timeEnd("doSomething");
