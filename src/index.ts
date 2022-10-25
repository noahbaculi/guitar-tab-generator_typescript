const GuitarModule2 = require("../src/guitar_object.js");

const guitar = new GuitarModule2.Guitar("Standard", 4);
// console.log(guitar.strings);

// for (const string in guitar.strings) {
// 	console.log(`${string} | ${guitar.strings[string][0]}`);
// }

const testNotesString = `
A2A3E4
A7 chord
A2
A3
E4

A2A3
`;
// console.log(guitar.calcFingerings("G5"));
// guitar.generateTab(testNotesString);

const chordStandardTabMap = new Map([
	["achord", "-02220"],
	["amaj7chord", "-02120"],
	["a7chord", "-02020"],
	["amchord", "-02210"],
	["am7chord", "-02010"],
	["bchord", "--4442"],
	["bmaj7chord", "22130-"],
	["b7chord", "-21202"],
	["bmchord", "--4432"],
	["bm7chord", "-20202"],
	["cchord", "-32010"],
	["cmaj7chord", "-32000"],
	["c7chord", "-32310"],
	["cmchord", "-310--"],
	["cm7chord", "-313--"],
	["dchord", "--0232"],
	["dmaj7chord", "--0222"],
	["d7chord", "--0212"],
	["dmchord", "--0231"],
	["dm7chord", "--0211"],
	["echord", "022100"],
	["emaj7chord", "021100"],
	["e7chord", "020100"],
	["emchord", "022000"],
	["em7chord", "022030"],
	["fchord", "--3211"],
	["fmaj7chord", "--3210"],
	["f7chord", "131211"],
	["fmchord", "--3111"],
	["fm7chord", "131111"],
	["gchord", "320003"],
	["gmaj7chord", "3-0002"],
	["g7chord", "320001"],
	["gmchord", "--0333"],
	["gm7chord", "-13030"],
]);

guitar.testGetChordPitches("-02220");
