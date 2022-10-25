const GuitarModule2 = require("../src/guitar_object.js");
const guitar = new GuitarModule2.Guitar("");
// console.log(guitar.strings);
// for (const string in guitar.strings) {
// 	console.log(`${string} | ${guitar.strings[string][0]}`);
// }
const testNotesString = `
A2A3
A7 chord
A2
A3
E4`;
// console.log(guitar.calcFingerings("G5"));
guitar.generateTab(testNotesString);
const fingeringLines = [
    {
        pitch: "E4",
        fingerings: [
            { stringNum: 1, fret: 0 },
            { stringNum: 2, fret: 5 },
            { stringNum: 3, fret: 9 },
            { stringNum: 4, fret: 14 },
        ],
    },
    {
        pitch: "C#4",
        fingerings: [
            { stringNum: 2, fret: 2 },
            { stringNum: 3, fret: 6 },
            { stringNum: 4, fret: 11 },
            { stringNum: 5, fret: 16 },
        ],
    },
    {
        pitch: "G3",
        fingerings: [
            { stringNum: 3, fret: 0 },
            { stringNum: 4, fret: 5 },
            { stringNum: 5, fret: 10 },
            { stringNum: 6, fret: 15 },
        ],
    },
    {
        pitch: "E3",
        fingerings: [
            { stringNum: 4, fret: 2 },
            { stringNum: 5, fret: 7 },
            { stringNum: 6, fret: 12 },
        ],
    },
    {
        pitch: "A2",
        fingerings: [
            { stringNum: 5, fret: 0 },
            { stringNum: 6, fret: 5 },
        ],
    },
];
