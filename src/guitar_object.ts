type GuitarStringName = "e" | "B" | "G" | "D" | "A" | "E";
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

/**
 * Fingering interface with integer fret positions
 */
class Fingering {
	guitarString: {
		name: GuitarStringName;
		fret: number;
	};

	constructor(stringNamesFrets: {
		e?: number;
		B?: number;
		G?: number;
		D?: number;
		A?: number;
		E?: number;
	}) {
		for (const [stringName, fret] of Object.entries(stringNamesFrets)) {
			this[stringName] = fret;
		}
	}
}

/**
 * Tuning adjustment interface with integer differences from Standard tuning
 */
interface Tuning {
	e: number;
	B: number;
	G: number;
	D: number;
	A: number;
	E: number;
}

/**
 * String interface with pitch range list
 */
interface GuitarString {
	e: string[];
	B: string[];
	G: string[];
	D: string[];
	A: string[];
	E: string[];
}

/**
 * Create the tuning adjustment from Standard in the order of
 * [E, A, D, G, B, e]
 * @param E low E string tuning adjustment
 * @param A A string tuning adjustment
 * @param D D string tuning adjustment
 * @param G G string tuning adjustment
 * @param B B string tuning adjustment
 * @param e high E string tuning adjustment
 * @returns
 */
function createTuning(
	e: number,
	B: number,
	G: number,
	D: number,
	A: number,
	E: number
): Tuning {
	return {
		e: e,
		B: B,
		G: G,
		D: D,
		A: A,
		E: E,
	};
}

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

	strings: {
		e: string[];
		B: string[];
		G: string[];
		D: string[];
		A: string[];
		E: string[];
	} = {
		e: [
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
		B: [
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
		G: [
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
		D: [
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
		A: [
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
		E: [
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
			openg: createTuning(-2, -2, 0, 0, 0, -2),
			opend: createTuning(-2, -2, -1, 0, 0, -2),
			c6: createTuning(0, 1, 0, -2, 0, -4),
			dsus4: createTuning(-2, -2, 0, 0, 0, -2),
			dropd: createTuning(0, 0, 0, 0, 0, -2),
			dropc: createTuning(-2, -2, -2, -2, -2, -4),
			openc: createTuning(0, 1, 0, -2, -2, -4),
			dropb: createTuning(-3, -3, -3, -3, -3, -5),
			opene: createTuning(0, 0, -2, -2, -2, 0),
		};

		// Parse tuning input
		if (tuningName !== undefined) {
			tuningName = tuningName.replace(/\s/g, "").toLowerCase();
			if (tuningName in tunings) {
				this.tuningName = tuningName;
			}
		}

		// Parse capo input
		if (capo !== undefined && Number.isInteger(capo) && 0 < capo && capo < 13) {
			this.capo = capo;
		}

		// Process tuning and capo to string changes
		const tuning: Tuning = tunings[this.tuningName];
		for (const stringName in this.strings) {
			const tuningAdj: number = tuning[stringName];

			// Tune down
			if (tuningAdj < 0) {
				const lowNotePos = this.guitarRangeTotal.indexOf(
					this.strings[stringName].at(0)
				);
				const newNotes = this.guitarRangeTotal.slice(
					lowNotePos + tuningAdj,
					lowNotePos
				);

				// Insert new notes
				this.strings[stringName] = newNotes.concat(this.strings[stringName]);
				// Remove old notes
				this.strings[stringName] = this.strings[stringName].slice(0, tuningAdj);
			}
			// Tune up
			else if (tuningAdj > 0) {
				const highNotePos = this.guitarRangeTotal.indexOf(
					this.strings[stringName].at(-1)
				);
				const newNotes = this.guitarRangeTotal.slice(
					highNotePos + 1,
					highNotePos + tuningAdj + 1
				);

				// Insert new notes
				this.strings[stringName] = this.strings[stringName].concat(newNotes);
				// Remove old notes
				this.strings[stringName] = this.strings[stringName].slice(tuningAdj);
			}

			// Limit strings to number of frets available
			this.strings[stringName] = this.strings[stringName].slice(
				0,
				this.numFrets
			);

			// Limit strings to frets available with capo
			this.strings[stringName] = this.strings[stringName].slice(this.capo);
		}
		this.pitchRange = new Set(Object.values(this.strings).flat());
	}

	/**
	 * Function to get combinations of substring from string
	 * @param inputString
	 * @returns Empty List
	 */
	getStringCombinations(inputString: string): string[] {
		let list_of_strings = new Array();
		for (let i = 0; i < inputString.length; i++) {
			for (let j = i + 1; j < inputString.length + 1; j++) {
				list_of_strings.push(inputString.slice(i, j));
			}
		}
		return list_of_strings;
	}

	calcFingerings(pitchName: string): { name: string; fret: number }[] {
		let fingerings = [];
		for (const [stringName, stringVals] of Object.entries(this.strings)) {
			const pitchFret = stringVals.indexOf(pitchName);
			if (pitchFret === -1) {
				continue;
			}
			console.log(`${stringName} | ${pitchName} | ${pitchFret}`);
			fingerings.push({ name: stringName, fret: pitchFret });
		}
		if (fingerings.length == 0) {
			throw new Error(`Out of range or invalid pitch '${pitchName}'`);
		}
		return fingerings;
	}

	/**
	 * Function to generate a set of TAB fingerings for a guitar object
	 * @param inputPitchString
	 * @returns Empty List
	 */
	generateTab(inputPitchString: string): [] {
		this.validateInput(inputPitchString);
		return [];
	}

	validateInput(inputPitchString: string): string[] {
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

		const inputPitchLines = inputPitchString.split("\n");
		console.log(inputPitchLines);
		for (let inputPitchLine of inputPitchLines) {
			inputPitchLine = inputPitchLine.replace(/\s/g, "");
			if (inputPitchLine === "") {
				console.log("----");
				continue;
			}

			console.log();

			let linePitches = [];

			while (inputPitchLine !== "") {
				const pitchCombos = this.getStringCombinations(inputPitchLine);
				for (const [i, linePitchCombo] of pitchCombos.entries()) {
					if (this.pitchRange.has(linePitchCombo)) {
						console.log(`${inputPitchLine} -> ${linePitchCombo}`);
						inputPitchLine = inputPitchLine.replace(linePitchCombo, "");
						linePitches.push(linePitchCombo);
						break;
					}
					if (i === pitchCombos.length - 1) {
						throw new Error(
							`Out of range or invalid pitch '${inputPitchLine}'`
						);
					}
				}
			}
			console.log("linePitches", linePitches);

			for (const pitchName of linePitches) {
				console.log(this.calcFingerings(pitchName));
			}
		}
		return [""];
	}
};
