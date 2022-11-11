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

type ValidatedLinePitchInput = PitchName[] | "";

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
		const tunings = {
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

		/**
		 * Calculate the pitches for a list of tab fingerings
		 */
		const calcChordPitches = (
			tabFingeringList: string[],
			chordTabStringNums: string[]
		) => {
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
		};

		let chordPitchesMap = {};
		for (const [chordName, chordTab] of Object.entries(
			chordStandardTuningTabMap
		)) {
			chordPitchesMap[chordName] = calcChordPitches(
				[...chordTab],
				chordTabStringNums
			);
		}

		return chordPitchesMap;
	}

	/**
	 * Function to generate a set of TAB fingerings for a guitar object
	 * @param inputPitchString
	 */
	generateTab(inputPitchString: string): (Fingering[] | "break")[] {
		const pitchLines = this.validateInput(inputPitchString);
		const linePitchFingerings = pitchLines.map(this.genPitchFingering, this);
		const lineFingeringOptions = linePitchFingerings.map(
			this.genLineFingeringOptions,
			this
		);
		const bestFingerings = this.optimizeFingerings(lineFingeringOptions);
		return bestFingerings;
	}

	validateInput(inputPitchString: string): ValidatedLinePitchInput[] {
		let pitchLines: ValidatedLinePitchInput[] = [];

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
				/**
				 * Function to get combinations of substrings from string
				 */
				const getStringCombinations = (inputString: string): string[] => {
					let list_of_substrings: string[] = [];
					for (let i = 0; i < inputString.length; i++) {
						for (let j = i + 1; j < inputString.length + 1; j++) {
							list_of_substrings.push(inputString.slice(i, j));
						}
					}
					return list_of_substrings;
				};

				const pitchCombos = getStringCombinations(inputPitchLine);

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

	// TODO cache values with memoization for efficiency improvements
	/**
	 * Create fingerings for a given pitch
	 */
	calcPitchFingerings = (pitch: PitchName): PitchFingerings => {
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
	};

	/**
	 * Generate the fingerings for the pitches on the same line/beat
	 */
	genPitchFingering(
		linePitches: ValidatedLinePitchInput
	): PitchFingerings[] | "break" {
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

	/**
	 * Generate fingering options from each line fingerings
	 */
	genLineFingeringOptions(
		fingeringLine: PitchFingerings[] | "break"
	): FingeringOption[] | "break" {
		if (fingeringLine === "break") {
			return "break";
		}
		const linePitches = fingeringLine.map((a) => a.pitch);
		const linePitchFingeringOptions = fingeringLine.map(
			(a) => a.fingeringOptions
		);

		// Calculate list of combinations
		let lineFingeringCombosList = this.cartesian(linePitchFingeringOptions);

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
			if (items.length === 0) {
				return 0;
			}
			return Math.max(...items) - Math.min(...items);
		};

		const calc_average = (items: number[], excludeZero = false): number => {
			if (excludeZero === true) {
				items = items.filter((x) => x !== 0);
			}
			if (items.length === 0) {
				return 0;
			}
			return items.reduce((a: number, b: number) => a + b) / items.length;
		};

		let lineFingeringOptions = [...lineFingeringCombos].reduce(
			(result: FingeringOption[], lineFingeringCombo) => {
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
			[]
		);

		// Remove fingering options with the highest fret spans over the max while
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

	optimizeFingerings(lineFingeringOptions: (FingeringOption[] | "break")[]) {
		const splitArrayOn = (arr: any[], delimiter: any, limit = 100) => {
			let sublists = [];
			let count = 0;
			while (arr.includes(delimiter)) {
				if (count > limit) {
					throw new Error(`Array split delimiter limit reached.`);
				}
				count++;
				const breakIndex = arr.indexOf(delimiter);
				const sublist = arr.slice(0, breakIndex);
				if (sublist.length !== 0) {
					sublists.push(sublist);
				}
				arr.splice(0, breakIndex + 1);
			}

			if (arr.length !== 0) {
				sublists.push(arr);
			}
			return sublists;
		};

		// Split list of options into sublists separated by measure breaks
		const lineFingeringOptionsBlocks = <FingeringOption[][][]>(
			splitArrayOn(lineFingeringOptions, "break")
		);

		// Calculate the most optimal fingering option for each block
		const bestFingeringOptionBlocks = lineFingeringOptionsBlocks.map(
			(lineFingeringOptionsBlock) => {
				// Calculate list of combinations
				if (lineFingeringOptionsBlock.length > 8) {
					//
					print(lineFingeringOptionsBlock);
					throw new Error();
				}
				const blockFingeringCombosList = <FingeringOption[][]>(
					this.cartesian(lineFingeringOptionsBlock)
				);

				// Handle case where there is only one option
				if (blockFingeringCombosList.length === 1) {
					return <FingeringOption[]>(<unknown>blockFingeringCombosList);
				}

				// Calculate block combo selection criteria and score
				const blockFingeringOptionsList = blockFingeringCombosList.map(
					this.calcFingeringOptionCriteria
				);

				// Find option with the lowest score. Could combine with the
				// calculation step to lower memory footprint but combining would
				// impede debuggability
				const bestBlockOption = blockFingeringOptionsList.reduce(
					(lowest, current) =>
						lowest.combo_score < current.combo_score ? lowest : current
				);
				return bestBlockOption.combo;
			}
		);

		const bestFingeringsNoBreaks = bestFingeringOptionBlocks.map(
			(fingeringOptions) =>
				fingeringOptions.map((fingeringOption) => fingeringOption.fingering)
		);

		// Add back measure breaks and flatten
		const interleave = (arr: any[], delimiter: any) =>
			[].concat(...arr.map((n) => [n, delimiter])).slice(0, -1);
		const bestFingerings = <(Fingering[] | "break")[]>(
			interleave(bestFingeringsNoBreaks, "break").flat()
		);
		return bestFingerings;
	}

	/**
	 * Calculate the selection criteria and score for a fingering option combination
	 */
	calcFingeringOptionCriteria = (combo: FingeringOption[]) => {
		const avgFrets = combo.map((x) => x.avg_fret).filter((a) => a !== 0);

		/**
		 * Calculate the standard deviation of an array
		 */
		const calcStdDev = (arr: number[]) => {
			const len = arr.length;
			const mean = arr.reduce((a, b) => a + b) / len;
			const variance =
				arr.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / len;
			return Math.sqrt(variance);
		};
		const avgFretStdDev = calcStdDev(avgFrets);

		// Calculate a score that includes smoothness to account
		//  for the ordering of the average frets for each beat
		//  Ex: average frets of [7, 7, 8] is preferred over [7, 8, 7]

		// Calculate smoothness from the StdDev of the
		// differences

		/**
		 * Calculate the differences between between pairs of consecutive elements
		 */
		const calcDiffs = (arr: number[]) => {
			return arr.slice(1).map((val, index) => val - arr[index]);
		};

		const avgFretDiffs = calcDiffs(avgFrets);
		const avgFretSmoothness = calcStdDev(avgFretDiffs);

		// Percentage weightings are arbitrary. Main contributor is
		// still the dispersion of the average frets (StdDec). The
		// extra smoothness component is mostly meant to distinguish
		// fingering options with the same average fret dispersions.
		const score = 0.9 * avgFretStdDev + 0.1 * avgFretSmoothness;

		return {
			avg_frets: avgFrets,
			avg_fret_stddev: avgFretStdDev,
			avg_fret_steps: avgFretDiffs,
			avg_fret_steps_stddev_smoothness: avgFretSmoothness,
			combo_score: score,
			combo: combo,
		};
	};

	/**
	 * Combinate product of N number of lists
	 */
	cartesian = (arr: any[][]) => {
		// Return list of each element if only one list is received
		if (arr.length === 1) {
			return arr.flat().map((a) => [a]);
		}
		return arr.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
	};
};
