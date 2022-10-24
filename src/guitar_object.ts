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

/**
 * Guitar object
 */
exports.Guitar = class Guitar {
	guitarRange = [
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

	strings = {
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

	tuning_name = "standard";
	capo = 0;
	numFrets = 18;

	constructor(tuning_str?: string, capo?: number) {
		// Parse tuning input
		if (tuning_str !== undefined) {
			tuning_str = tuning_str.replace(/\s/g, "").toLowerCase();
			if (tuning_str in tunings) {
				this.tuning_name = tuning_str;
			}
		}

		// Parse capo input
		if (capo !== undefined && Number.isInteger(capo) && 0 < capo && capo < 13) {
			this.capo = capo;
		}

		// Process tuning and capo to string changes
		const tuning: Tuning = tunings[this.tuning_name];
		for (const string in this.strings) {
			const tuningAdj: number = tuning[string];

			// Tune down
			if (tuningAdj < 0) {
				const lowNotePos = this.guitarRange.indexOf(this.strings[string].at(0));
				const newNotes = this.guitarRange.slice(
					lowNotePos + tuningAdj,
					lowNotePos
				);

				// Insert new notes
				this.strings[string] = newNotes.concat(this.strings[string]);
				// Remove old notes
				this.strings[string] = this.strings[string].slice(0, tuningAdj);
			}
			// Tune up
			else if (tuningAdj > 0) {
				const highNotePos = this.guitarRange.indexOf(
					this.strings[string].at(-1)
				);
				const newNotes = this.guitarRange.slice(
					highNotePos + 1,
					highNotePos + tuningAdj + 1
				);

				// Insert new notes
				this.strings[string] = this.strings[string].concat(newNotes);
				// Remove old notes
				this.strings[string] = this.strings[string].slice(tuningAdj);
			}

			// Limit strings to number of frets available
			this.strings[string] = this.strings[string].slice(0, this.numFrets);

			// Limit strings to frets available with capo
			this.strings[string] = this.strings[string].slice(this.capo);
		}
	}
};
