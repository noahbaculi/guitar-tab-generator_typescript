type TuningName =
	| "standard"
	| "openg"
	| "opend"
	| "c6"
	| "dsus4"
	| "dropd"
	| "dropc"
	| "openc"
	| "dropb"
	| "opene";

type PitchName =
	| "A1"
	| "A#1"
	| "B1"
	| "C2"
	| "C#2"
	| "D2"
	| "D#2"
	| "E2"
	| "F2"
	| "F#2"
	| "G2"
	| "G#2"
	| "A2"
	| "A#2"
	| "B2"
	| "C3"
	| "C#3"
	| "D3"
	| "D#3"
	| "E3"
	| "F3"
	| "F#3"
	| "G3"
	| "G#3"
	| "A3"
	| "A#3"
	| "B3"
	| "C4"
	| "C#4"
	| "D4"
	| "D#4"
	| "E4"
	| "F4"
	| "F#4"
	| "G4"
	| "G#4"
	| "A4"
	| "A#4"
	| "B4"
	| "C5"
	| "C#5"
	| "D5"
	| "D#5"
	| "E5"
	| "F5"
	| "F#5"
	| "G5"
	| "G#5"
	| "A5"
	| "A#5"
	| "B5"
	| "C6"
	| "C#6"
	| "D6"
	| "D#6"
	| "E6"
	| "F6"
	| "F#6"
	| "G6"
	| "G#6";

type MeasureBreak = "break";
type ValidatedPitchInput = PitchName[] | "";
type LineFingering = PitchFingerings[] | MeasureBreak;

const util = require("util");
/**
 * Console Log objects to full depth
 * @param objs Objects to print
 */
function print(...objs: any[]): void {
	for (const obj of objs) {
		console.log(
			util.inspect(obj, { showHidden: false, depth: null, colors: true })
		);
	}
}

/**
 * Tuning adjustment type with integer differences from Standard tuning
 */
type Tuning = {
	1: number;
	2: number;
	3: number;
	4: number;
	5: number;
	6: number;
};

/**
 * Type with pitch range list
 */
type GuitarStrings = {
	1: string[];
	2: string[];
	3: string[];
	4: string[];
	5: string[];
	6: string[];
};

/**
 * Create the tuning adjustment from Standard in string order from 6 to 1 (EADGBe)
 * @param string6TuningAdj
 * @param string5TuningAdj
 * @param string4TuningAdj
 * @param string3TuningAdj
 * @param string2TuningAdj
 * @param string1TuningAdj
 * @returns
 */
function createTuning(
	string6TuningAdj: number,
	string5TuningAdj: number,
	string4TuningAdj: number,
	string3TuningAdj: number,
	string2TuningAdj: number,
	string1TuningAdj: number
): Tuning {
	return {
		1: string1TuningAdj,
		2: string2TuningAdj,
		3: string3TuningAdj,
		4: string4TuningAdj,
		5: string5TuningAdj,
		6: string6TuningAdj,
	};
}

type Fingering = { stringNumber: number; fret: number };

type PitchFingerings = {
	pitch: PitchName;
	fingerings: Fingering[];
};

/**
 * Guitar object
 */
exports.Guitar = class Guitar {
	guitarRangeTotal = [
		"A1",
		"A#1",
		"B1",
		"C2",
		"C#2",
		"D2",
		"D#2",
		"E2",
		"F2",
		"F#2",
		"G2",
		"G#2",
		"A2",
		"A#2",
		"B2",
		"C3",
		"C#3",
		"D3",
		"D#3",
		"E3",
		"F3",
		"F#3",
		"G3",
		"G#3",
		"A3",
		"A#3",
		"B3",
		"C4",
		"C#4",
		"D4",
		"D#4",
		"E4",
		"F4",
		"F#4",
		"G4",
		"G#4",
		"A4",
		"A#4",
		"B4",
		"C5",
		"C#5",
		"D5",
		"D#5",
		"E5",
		"F5",
		"F#5",
		"G5",
		"G#5",
		"A5",
		"A#5",
		"B5",
		"C6",
		"C#6",
		"D6",
		"D#6",
		"E6",
		"F6",
		"F#6",
		"G6",
		"G#6",
	];

	strings: GuitarStrings = {
		1: [
			"E4",
			"F4",
			"F#4",
			"G4",
			"G#4",
			"A4",
			"A#4",
			"B4",
			"C5",
			"C#5",
			"D5",
			"D#5",
			"E5",
			"F5",
			"F#5",
			"G5",
			"G#5",
			"A5",
			"A#5",
			"B5",
			"C6",
			"C#6",
			"D6",
			"D#6",
			"E6",
		],
		2: [
			"B3",
			"C4",
			"C#4",
			"D4",
			"D#4",
			"E4",
			"F4",
			"F#4",
			"G4",
			"G#4",
			"A4",
			"A#4",
			"B4",
			"C5",
			"C#5",
			"D5",
			"D#5",
			"E5",
			"F5",
			"F#5",
			"G5",
			"G#5",
			"A5",
			"A#5",
			"B5",
		],
		3: [
			"G3",
			"G#3",
			"A3",
			"A#3",
			"B3",
			"C4",
			"C#4",
			"D4",
			"D#4",
			"E4",
			"F4",
			"F#4",
			"G4",
			"G#4",
			"A4",
			"A#4",
			"B4",
			"C5",
			"C#5",
			"D5",
			"D#5",
			"E5",
			"F5",
			"F#5",
			"G5",
		],
		4: [
			"D3",
			"D#3",
			"E3",
			"F3",
			"F#3",
			"G3",
			"G#3",
			"A3",
			"A#3",
			"B3",
			"C4",
			"C#4",
			"D4",
			"D#4",
			"E4",
			"F4",
			"F#4",
			"G4",
			"G#4",
			"A4",
			"A#4",
			"B4",
			"C5",
			"C#5",
			"D5",
		],
		5: [
			"A2",
			"A#2",
			"B2",
			"C3",
			"C#3",
			"D3",
			"D#3",
			"E3",
			"F3",
			"F#3",
			"G3",
			"G#3",
			"A3",
			"A#3",
			"B3",
			"C4",
			"C#4",
			"D4",
			"D#4",
			"E4",
			"F4",
			"F#4",
			"G4",
			"G#4",
			"A4",
		],
		6: [
			"E2",
			"F2",
			"F#2",
			"G2",
			"G#2",
			"A2",
			"A#2",
			"B2",
			"C3",
			"C#3",
			"D3",
			"D#3",
			"E3",
			"F3",
			"F#3",
			"G3",
			"G#3",
			"A3",
			"A#3",
			"B3",
			"C4",
			"C#4",
			"D4",
			"D#4",
			"E4",
		],
	};

	chordFingeringMap: Map<string, any>;

	// chords

	tuningName = "standard";
	capo = 0;
	numFrets = 18;
	pitchRange: Set<string>;

	constructor(tuningName?: string, capo?: number) {
		/**
		 * Tunings reference with tuning adjustments from Standard
		 */
		const tunings: {
			standard: Tuning;
			openg: Tuning;
			opend: Tuning;
			c6: Tuning;
			dsus4: Tuning;
			dropd: Tuning;
			dropc: Tuning;
			openc: Tuning;
			dropb: Tuning;
			opene: Tuning;
		} = {
			standard: createTuning(0, 0, 0, 0, 0, 0),
			openg: createTuning(-2, 0, 0, 0, -2, -2),
			opend: createTuning(-2, 0, 0, -1, -2, -2),
			c6: createTuning(-4, 0, -2, 0, 1, 0),
			dsus4: createTuning(-2, 0, 0, 0, -2, -2),
			dropd: createTuning(-2, 0, 0, 0, 0, 0),
			dropc: createTuning(-4, -2, -2, -2, -2, -2),
			openc: createTuning(-4, -2, -2, 0, 1, 0),
			dropb: createTuning(-5, -3, -3, -3, -3, -3),
			opene: createTuning(0, -2, -2, -2, 0, 0),
		};
		// const reversedTunings = {
		// 	standard: createTuning(0, 0, 0, 0, 0, 0),
		// 	openg: createTuning(-2, -2, 0, 0, 0, -2),
		// 	opend: createTuning(-2, -2, -1, 0, 0, -2),
		// 	c6: createTuning(0, 1, 0, -2, 0, -4),
		// 	dsus4: createTuning(-2, -2, 0, 0, 0, -2),
		// 	dropd: createTuning(0, 0, 0, 0, 0, -2),
		// 	dropc: createTuning(-2, -2, -2, -2, -2, -4),
		// 	openc: createTuning(0, 1, 0, -2, -2, -4),
		// 	dropb: createTuning(-3, -3, -3, -3, -3, -5),
		// 	opene: createTuning(0, 0, -2, -2, -2, 0),
		// };

		// Parse tuning input
		if (tuningName !== undefined) {
			tuningName = tuningName.replace(/\s/g, "").toLowerCase();
			if (tuningName in tunings) {
				this.tuningName = tuningName;
			}
		}
		print("hi", "there");

		// Parse capo input
		if (capo !== undefined && Number.isInteger(capo) && 0 < capo && capo < 13) {
			this.capo = capo;
		}

		// Process tuning and capo to string changes
		const tuning: Tuning = tunings[this.tuningName];

		for (const stringNum in this.strings) {
			const tuningAdj: number = tuning[stringNum];

			// Tune down
			if (tuningAdj < 0) {
				const lowNotePos = this.guitarRangeTotal.indexOf(
					this.strings[stringNum].at(0)
				);
				const newNotes = this.guitarRangeTotal.slice(
					lowNotePos + tuningAdj,
					lowNotePos
				);

				// Insert new notes
				this.strings[stringNum] = newNotes.concat(this.strings[stringNum]);
				// Remove old notes
				this.strings[stringNum] = this.strings[stringNum].slice(0, tuningAdj);
			}
			// Tune up
			else if (tuningAdj > 0) {
				const highNotePos = this.guitarRangeTotal.indexOf(
					this.strings[stringNum].at(-1)
				);
				const newNotes = this.guitarRangeTotal.slice(
					highNotePos + 1,
					highNotePos + tuningAdj + 1
				);

				// Insert new notes
				this.strings[stringNum] = this.strings[stringNum].concat(newNotes);
				// Remove old notes
				this.strings[stringNum] = this.strings[stringNum].slice(tuningAdj);
			}

			// Limit strings to number of frets available
			this.strings[stringNum] = this.strings[stringNum].slice(0, this.numFrets);

			// Limit strings to frets available with capo
			this.strings[stringNum] = this.strings[stringNum].slice(this.capo);
		}
		this.pitchRange = new Set(Object.values(this.strings).flat());

		// this.chordFingeringMap = this.generateChordFingerings();
	}

	generateChordFingerings() {
		// Chord tabs in string order from 6 to 1 (EADGBe)
		const chordTabStringNums = [..."654321"];
		const chordStandardTabMap = {
			achord: "-02220",
			amaj7chord: "-02120",
			a7chord: "-02020",
			amchord: "-02210",
			am7chord: "-02010",
			bchord: "--4442",
			bmaj7chord: "22130-",
			b7chord: "-21202",
			bmchord: "--4432",
			bm7chord: "-20202",
			cchord: "-32010",
			cmaj7chord: "-32000",
			c7chord: "-32310",
			cmchord: "-310--",
			cm7chord: "-313--",
			dchord: "--0232",
			dmaj7chord: "--0222",
			d7chord: "--0212",
			dmchord: "--0231",
			dm7chord: "--0211",
			echord: "022100",
			emaj7chord: "021100",
			e7chord: "020100",
			emchord: "022000",
			em7chord: "022030",
			fchord: "--3211",
			fmaj7chord: "--3210",
			f7chord: "131211",
			fmchord: "--3111",
			fm7chord: "131111",
			gchord: "320003",
			gmaj7chord: "3-0002",
			g7chord: "320001",
			gmchord: "--0333",
			gm7chord: "-13030",
		};

		this.calcChordPitches("-02220", chordTabStringNums);
	}

	calcChordPitches(inputTab: string, chordTabStringNums: string[]) {
		const tabFingeringList = [...inputTab];

		const zip = (a: string[], b: string[]): [string, string][] =>
			Array.from(Array(Math.max(b.length, a.length)), (_, i) => [a[i], b[i]]);

		// print(chordTabStringNums);
		// print(tabFingeringList);
		const zippedFingering = zip(chordTabStringNums, tabFingeringList);

		const fingering = Object.fromEntries(zippedFingering);
		console.log(fingering);

		let pitches = [];
		for (const [stringNum, fretVal] of Object.entries(fingering)) {
			const fretNum = parseInt(fretVal);
			if (isNaN(fretNum)) {
				continue;
			}

			const pitch = this.strings[stringNum][fretNum];
			pitches.push(pitch);
		}
		return pitches;
	}

	/**
	 * Function to generate a set of TAB fingerings for a guitar object
	 * @param inputPitchString
	 * @returns Empty List
	 */
	generateTab(inputPitchString: string): [] {
		const pitchLines = this.validateInput(inputPitchString);
		const fingeringLines = this.generateLineFingerings(pitchLines);

		print(pitchLines);
		print(fingeringLines);

		// TODO implement multi pitch combiner and optimizer
		return [];
	}

	validateInput(inputPitchString: string): ValidatedPitchInput[] {
		let pitchLines: ValidatedPitchInput[] = [];

		// Format and convert input to sharps
		inputPitchString = inputPitchString.toUpperCase();
		const flatsToSharps = {
			DB: "C#",
			EB: "D#",
			GB: "F#",
			AB: "G#",
			BB: "A#",
		};
		for (const flatString in flatsToSharps) {
			const replace = new RegExp(`${flatString}`, "g");
			inputPitchString = inputPitchString.replace(
				replace,
				flatsToSharps[flatString]
			);
		}

		// Validate lines of pitches against of Guitar's pitchRange
		let errorStrings: string[] = [];
		const inputPitchLines = inputPitchString.split("\n");
		for (const [lineNum, inputPitchLineOrig] of inputPitchLines.entries()) {
			let inputPitchLine = inputPitchLineOrig;
			inputPitchLine = inputPitchLine.replace(/\s/g, "");
			if (inputPitchLine === "") {
				pitchLines.push("");
				continue;
			}

			let linePitches: PitchName[] = [];
			while (inputPitchLine !== "") {
				const pitchCombos = this.getStringCombinations(inputPitchLine);
				for (const [i, linePitchCombo] of pitchCombos.entries()) {
					if (this.pitchRange.has(linePitchCombo)) {
						inputPitchLine = inputPitchLine.replace(linePitchCombo, "");
						linePitches.push(<PitchName>linePitchCombo);
						break;
					}
					if (i === pitchCombos.length - 1) {
						errorStrings.push(
							`Line ${lineNum} - '${inputPitchLine}' in '${inputPitchLineOrig}'`
						);
						inputPitchLine = "";
					}
				}
			}
			pitchLines.push(linePitches);
		}
		// Throw aggregated invalid pitch error
		if (errorStrings.length > 0) {
			throw new Error(
				`Out of range or invalid pitches:\n${errorStrings.join("\n")}`
			);
		}

		return pitchLines;
	}

	generateLineFingerings(pitchLines: ValidatedPitchInput[]): LineFingering[] {
		let pitchLineFingerings: LineFingering[] = [];
		for (const linePitches of pitchLines) {
			if (linePitches === "") {
				pitchLineFingerings.push("break");
				continue;
			}

			let linePitchIndivFingerings: PitchFingerings[] = [];
			for (const pitchName of linePitches) {
				const pitchFingerings = this.calcPitchFingerings(pitchName);
				linePitchIndivFingerings.push(pitchFingerings);
			}
			pitchLineFingerings.push(linePitchIndivFingerings);
		}
		return pitchLineFingerings;
	}

	// TODO cache values for efficiency improvements
	/**
	 * Create fingerings for a given pitch
	 * @param pitch Validated pitch name
	 * @returns
	 */
	calcPitchFingerings(pitch: PitchName): PitchFingerings {
		let fingerings = [];
		for (const [stringNumKey, stringVals] of Object.entries(this.strings)) {
			const pitchFret = stringVals.indexOf(pitch);
			if (pitchFret === -1) {
				continue;
			}

			const stringNum = parseInt(stringNumKey);
			if (isNaN(stringNum)) {
				throw new Error(`String number key is not a number '${stringNumKey}'`);
			}
			fingerings.push({ stringNum: stringNum, fret: pitchFret });
		}
		if (fingerings.length == 0) {
			throw new Error(`Out of range or invalid pitch '${pitch}'`);
		}
		return {
			pitch: pitch,
			fingerings: fingerings,
		};
	}

	/**
	 * Function to get combinations of substring from string
	 * @param inputString
	 * @returns Empty List
	 */
	getStringCombinations(inputString: string): string[] {
		let list_of_strings: string[] = [];
		for (let i = 0; i < inputString.length; i++) {
			for (let j = i + 1; j < inputString.length + 1; j++) {
				list_of_strings.push(inputString.slice(i, j));
			}
		}
		return list_of_strings;
	}
};
