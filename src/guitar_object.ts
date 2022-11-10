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

type FretNumber =
	| 0
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18;

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

type StringNumber = 1 | 2 | 3 | 4 | 5 | 6;

type TunningAdjustment = -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Tuning type with tuning adjustments from Standard tuning
 */
type Tuning = Record<StringNumber, TunningAdjustment>;

/**
 * Type with pitch range list
 */
type GuitarStrings = Record<StringNumber, string[]>;

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
	string6TuningAdj: TunningAdjustment,
	string5TuningAdj: TunningAdjustment,
	string4TuningAdj: TunningAdjustment,
	string3TuningAdj: TunningAdjustment,
	string2TuningAdj: TunningAdjustment,
	string1TuningAdj: TunningAdjustment
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

type MeasureBreak = "break";
type ValidatedPitchInput = PitchName[] | "";
type LineFingering = PitchFingerings[] | MeasureBreak;

type Fingering = { stringNum: number; fret: number };

type PitchFingerings = {
	pitch: PitchName;
	fingeringOptions: Fingering[];
};

type FingeringOption = {
	avg_fret: number;
	fret_span: number;
	fingering: Fingering[];
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

	chordPitchesMap: {};

	// chords

	tuningName = "standard";
	capo = 0;
	numFrets = 18;
	maxFretSpan = 4;
	pitchRange: Set<string>;

	constructor(tuningName?: string, capo?: number) {
		this.chordPitchesMap = this.#generateChordPitches();

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
	}

	#generateChordPitches(): {} {
		// Chord tabs in string order from 6 to 1 (EADGBe)
		const chordTabStringNums = [..."654321"];
		// TODO add more chords like sharp chords
		const chordStandardTuningTabMap = {
			ACHORD: "-02220",
			AMAJ7CHORD: "-02120",
			A7CHORD: "-02020",
			AMCHORD: "-02210",
			AM7CHORD: "-02010",
			BCHORD: "-24442",
			BMAJ7CHORD: "22130-",
			B7CHORD: "-21202",
			BMCHORD: "-24432",
			BM7CHORD: "-20202",
			CCHORD: "-32010",
			CMAJ7CHORD: "-32000",
			C7CHORD: "-32310",
			CMCHORD: "-35543",
			CM7CHORD: "-313--",
			DCHORD: "--0232",
			DMAJ7CHORD: "--0222",
			D7CHORD: "--0212",
			DMCHORD: "--0231",
			DM7CHORD: "--0211",
			ECHORD: "022100",
			EMAJ7CHORD: "021100",
			E7CHORD: "020100",
			EMCHORD: "022000",
			EM7CHORD: "022030",
			FCHORD: "--3211",
			FMAJ7CHORD: "--3210",
			F7CHORD: "131211",
			FMCHORD: "133111",
			FM7CHORD: "131111",
			GCHORD: "320003",
			GMAJ7CHORD: "--5432",
			G7CHORD: "320001",
			GMCHORD: "--0333",
			GM7CHORD: "-13030",
		};

		let chordPitchesMap = {};
		for (const [chordName, chordTab] of Object.entries(
			chordStandardTuningTabMap
		)) {
			chordPitchesMap[chordName] = this.calcChordPitches(
				[...chordTab],
				chordTabStringNums
			);
		}

		return chordPitchesMap;
	}

	calcChordPitches(tabFingeringList: string[], chordTabStringNums: string[]) {
		const zip = (a: string[], b: string[]): [string, string][] =>
			Array.from(Array(Math.max(b.length, a.length)), (_, i) => [a[i], b[i]]);

		const zippedFingering = zip(chordTabStringNums, tabFingeringList);
		const fingering = Object.fromEntries(zippedFingering);
		let pitches = [];
		for (const [stringNum, fretVal] of Object.entries(fingering)) {
			const fretNum = parseInt(fretVal);
			if (isNaN(fretNum)) {
				continue;
			}

			const pitch = this.strings[stringNum].at(fretNum);
			pitches.push(pitch);
		}
		return pitches;
	}

	/**
	 * Function to generate a set of TAB fingerings for a guitar object
	 * @param inputPitchString
	 */
	generateTab(inputPitchString: string): [] {
		const pitchLines = this.validateInput(inputPitchString);
		const linePitchFingerings = pitchLines.map(this.genLineFingering, this);
		const lineFingeringOptions = linePitchFingerings.map(
			this.genLineFingeringOptions,
			this
		);
		print(lineFingeringOptions);
		// print(fingeringLineOptions);
		// TODO implement fingering optimizer
		// this.createMultiBeatFingerings(fingeringOptions);

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

				const matchingChords = Object.keys(this.chordPitchesMap).filter(
					(value) => pitchCombos.includes(value)
				);
				if (matchingChords && matchingChords.length) {
					linePitches = this.chordPitchesMap[matchingChords.at(0)];
					break;
				}

				for (const [i, linePitchCombo] of pitchCombos.entries()) {
					if (this.pitchRange.has(linePitchCombo)) {
						inputPitchLine = inputPitchLine.replace(linePitchCombo, "");

						// Add to the pitches in the line if not already present
						if (!linePitches.includes(<PitchName>linePitchCombo)) {
							linePitches.push(<PitchName>linePitchCombo);
						}
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

	/**
	 * Function to get combinations of substring from string
	 * @param inputString
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

	/**
	 * Generate the fingerings for the pitches on the same line/beat
	 * @param linePitches
	 */
	genLineFingering(linePitches: ValidatedPitchInput): LineFingering {
		if (linePitches === "") {
			return "break";
		}

		let linePitchIndivFingerings: PitchFingerings[] = [];
		for (const pitchName of linePitches) {
			const pitchFingerings = this.calcPitchFingerings(pitchName);
			linePitchIndivFingerings.push(pitchFingerings);
		}

		return linePitchIndivFingerings;
	}

	// TODO cache values with memoization for efficiency improvements
	/**
	 * Create fingerings for a given pitch
	 * @param pitch Validated pitch name
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
			fingeringOptions: fingerings,
		};
	}

	/**
	 * Generate fingering options from each line fingerings
	 * @param fingeringLine
	 */
	genLineFingeringOptions(
		fingeringLine: LineFingering
	): FingeringOption[] | MeasureBreak {
		if (fingeringLine === "break") {
			return "break";
		}
		const linePitches = fingeringLine.map((a) => a.pitch);
		const linePitchFingeringOptions = fingeringLine.map(
			(a) => a.fingeringOptions
		);

		// Calculate list of combinations
		let lineFingeringCombosList = this.cartesian(...linePitchFingeringOptions);

		// Only one combination so wrap in enclosing array for processing
		if (!Array.isArray(lineFingeringCombosList.at(0))) {
			lineFingeringCombosList = lineFingeringCombosList.map((a) => [a]);
		}

		const lineFingeringCombos = <Set<Fingering[]>>(
			new Set(lineFingeringCombosList)
		);

		const calc_range = (items: number[], excludeZero = false): number => {
			if (excludeZero === true) {
				items = items.filter((x) => x !== 0);
			}
			return Math.max(...items) - Math.min(...items);
		};

		const calc_average = (items: number[], excludeZero = false): number => {
			if (excludeZero === true) {
				items = items.filter((x) => x !== 0);
			}
			return items.reduce((a: number, b: number) => a + b) / items.length;
		};

		let lineFingeringOptions = [...lineFingeringCombos].reduce(function (
			result: FingeringOption[],
			lineFingeringCombo
		) {
			// Do not include fingering combos with overlapping strings numbers
			const numPitches = lineFingeringCombo.length;
			const uniqueStringNums = new Set(
				lineFingeringCombo.map((a) => a.stringNum)
			);
			if (uniqueStringNums.size !== numPitches) {
				return result;
			}

			const output = {
				avg_fret: calc_average(
					lineFingeringCombo.map((a) => a.fret),
					true
				),
				fret_span: calc_range(
					lineFingeringCombo.map((a) => a.fret),
					true
				),
				fingering: lineFingeringCombo,
			};

			result.push(output);
			return result;
		},
		[]);

		// Remove fingering options with the highest fret spans over the max if
		// fingering options with low fret spans exist
		let fretSpans = lineFingeringOptions.map((a) => a.fret_span);
		let maxFretSpan = Math.max(...fretSpans);
		while (lineFingeringOptions.length > 1 && maxFretSpan > this.maxFretSpan) {
			fretSpans = lineFingeringOptions.map((a) => a.fret_span);
			maxFretSpan = Math.max(...fretSpans);
			const maxFretSpanFingeringIndex = fretSpans.indexOf(maxFretSpan);
			lineFingeringOptions.splice(maxFretSpanFingeringIndex, 1);
		}

		return lineFingeringOptions;
	}

	createMultiBeatFingerings() {}

	/**
	 * Combinate product of N number of lists
	 * @param listOfListsToCombinate
	 * @returns
	 */
	cartesian = (...listOfListsToCombinate: any[][]) =>
		listOfListsToCombinate.reduce((a, b) =>
			a.flatMap((d) => b.map((e) => [d, e].flat()))
		);
};
