const GuitarModule = require("../src/guitar_object.ts");

describe("Guitar Object Config", () => {
	it("has default properties", function () {
		const guitar = new GuitarModule.Guitar();

		expect(guitar.tuningName).toEqual("standard");
		expect(guitar.capo).toEqual(0);
		expect(guitar.strings["1"]).toEqual([
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
		]);
		expect(guitar.strings["2"]).toEqual([
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
		]);
		expect(guitar.strings["3"]).toEqual([
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
		]);
		expect(guitar.strings["4"]).toEqual([
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
		]);
		expect(guitar.strings["5"]).toEqual([
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
		]);
		expect(guitar.strings["6"]).toEqual([
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
		]);
	});

	it("handles improper input", function () {
		let guitar = new GuitarModule.Guitar("random 373 string", -2);
		expect(guitar.tuningName).toEqual("standard");
		expect(guitar.capo).toEqual(0);

		guitar = new GuitarModule.Guitar("lorem ipsum", 15);
		expect(guitar.tuningName).toEqual("standard");
		expect(guitar.capo).toEqual(0);
	});

	it("handles capo input", function () {
		const guitar = new GuitarModule.Guitar("Standard", 3);
		expect(guitar.tuningName).toEqual("standard");
		expect(guitar.capo).toEqual(3);

		expect(guitar.strings["1"]).toEqual([
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
		]);
		expect(guitar.strings["2"]).toEqual([
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
		]);
		expect(guitar.strings["3"]).toEqual([
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
		]);
		expect(guitar.strings["4"]).toEqual([
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
		]);
		expect(guitar.strings["5"]).toEqual([
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
		]);
		expect(guitar.strings["6"]).toEqual([
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
		]);
	});

	it("handles Open G tuning", function () {
		const guitar = new GuitarModule.Guitar("Open G");

		expect(guitar.tuningName).toEqual("openg");
		expect(guitar.strings["1"]).toEqual([
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
		]);
		expect(guitar.strings["2"]).toEqual([
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
		]);
		expect(guitar.strings["3"]).toEqual([
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
		]);
		expect(guitar.strings["4"]).toEqual([
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
		]);
		expect(guitar.strings["5"]).toEqual([
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
		]);
		expect(guitar.strings["6"]).toEqual([
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
		]);
	});

	it("handles Open D tuning", function () {
		const guitar = new GuitarModule.Guitar("Open D");
		expect(guitar.tuningName).toEqual("opend");

		expect(guitar.strings["1"][0]).toEqual("D4");
		expect(guitar.strings["2"][0]).toEqual("A3");
		expect(guitar.strings["3"][0]).toEqual("F#3");
		expect(guitar.strings["4"][0]).toEqual("D3");
		expect(guitar.strings["5"][0]).toEqual("A2");
		expect(guitar.strings["6"][0]).toEqual("D2");
	});

	it("handles C6 tuning", function () {
		const guitar = new GuitarModule.Guitar("C6");
		expect(guitar.tuningName).toEqual("c6");

		expect(guitar.strings["1"][0]).toEqual("E4");
		expect(guitar.strings["2"][0]).toEqual("C4");
		expect(guitar.strings["3"][0]).toEqual("G3");
		expect(guitar.strings["4"][0]).toEqual("C3");
		expect(guitar.strings["5"][0]).toEqual("A2");
		expect(guitar.strings["6"][0]).toEqual("C2");
	});

	it("handles Dsus4 tuning", function () {
		const guitar = new GuitarModule.Guitar("Dsus4");
		expect(guitar.tuningName).toEqual("dsus4");

		expect(guitar.strings["1"][0]).toEqual("D4");
		expect(guitar.strings["2"][0]).toEqual("A3");
		expect(guitar.strings["3"][0]).toEqual("G3");
		expect(guitar.strings["4"][0]).toEqual("D3");
		expect(guitar.strings["5"][0]).toEqual("A2");
		expect(guitar.strings["6"][0]).toEqual("D2");
	});

	it("handles Drop D tuning", function () {
		const guitar = new GuitarModule.Guitar("Drop D");
		expect(guitar.tuningName).toEqual("dropd");

		expect(guitar.strings["1"][0]).toEqual("E4");
		expect(guitar.strings["2"][0]).toEqual("B3");
		expect(guitar.strings["3"][0]).toEqual("G3");
		expect(guitar.strings["4"][0]).toEqual("D3");
		expect(guitar.strings["5"][0]).toEqual("A2");
		expect(guitar.strings["6"][0]).toEqual("D2");
	});

	it("handles Drop C tuning", function () {
		const guitar = new GuitarModule.Guitar("Drop C");
		expect(guitar.tuningName).toEqual("dropc");

		expect(guitar.strings["1"][0]).toEqual("D4");
		expect(guitar.strings["2"][0]).toEqual("A3");
		expect(guitar.strings["3"][0]).toEqual("F3");
		expect(guitar.strings["4"][0]).toEqual("C3");
		expect(guitar.strings["5"][0]).toEqual("G2");
		expect(guitar.strings["6"][0]).toEqual("C2");
	});

	it("handles Open C tuning", function () {
		const guitar = new GuitarModule.Guitar("Open C");
		expect(guitar.tuningName).toEqual("openc");

		expect(guitar.strings["1"][0]).toEqual("E4");
		expect(guitar.strings["2"][0]).toEqual("C4");
		expect(guitar.strings["3"][0]).toEqual("G3");
		expect(guitar.strings["4"][0]).toEqual("C3");
		expect(guitar.strings["5"][0]).toEqual("G2");
		expect(guitar.strings["6"][0]).toEqual("C2");
	});

	it("handles Drop B tuning", function () {
		const guitar = new GuitarModule.Guitar("Drop B");
		expect(guitar.tuningName).toEqual("dropb");

		expect(guitar.strings["1"][0]).toEqual("C#4");
		expect(guitar.strings["2"][0]).toEqual("G#3");
		expect(guitar.strings["3"][0]).toEqual("E3");
		expect(guitar.strings["4"][0]).toEqual("B2");
		expect(guitar.strings["5"][0]).toEqual("F#2");
		expect(guitar.strings["6"][0]).toEqual("B1");
	});

	it("handles Open E tuning", function () {
		const guitar = new GuitarModule.Guitar("Open E");
		expect(guitar.tuningName).toEqual("opene");

		expect(guitar.strings["1"][0]).toEqual("E4");
		expect(guitar.strings["2"][0]).toEqual("B3");
		expect(guitar.strings["3"][0]).toEqual("F3");
		expect(guitar.strings["4"][0]).toEqual("C3");
		expect(guitar.strings["5"][0]).toEqual("G2");
		expect(guitar.strings["6"][0]).toEqual("E2");
	});
});

describe("Guitar Pitch Input Validation", () => {
	let normalGuitar;
	beforeEach(() => {
		normalGuitar = new GuitarModule.Guitar();
	});

	it("validates normal input", function () {
		const inputString = "A2A3E4\nA7 chord\nA2\nA3\nE4\n\nA2A3";
		expect(normalGuitar.validateInput(inputString)).toEqual([
			["A2", "A3", "E4"],
			["E4", "C#4", "G3", "E3", "A2"],
			["A2"],
			["A3"],
			["E4"],
			"",
			["A2", "A3"],
		]);
	});

	it("handles repeated pitch input", function () {
		expect(normalGuitar.validateInput("A2A3A2E4E4")).toEqual([
			["A2", "A3", "E4"],
		]);
	});

	it("handles flat pitches input", function () {
		expect(normalGuitar.validateInput("C4Ab2F3")).toEqual([
			["C4", "G#2", "F3"],
		]);
	});

	it("handles improper input", function () {
		expect(() => {
			normalGuitar.validateInput("A2Q");
		}).toThrow("Out of range or invalid pitch");
		expect(() => {
			normalGuitar.validateInput("Z87Chord");
		}).toThrow("Out of range or invalid pitch");
	});
});

describe("Guitar Pitch Fingering Calculations", () => {
	it("calculates pitch fingerings correctly with standard tuning, no capo", function () {
		const guitar = new GuitarModule.Guitar();

		expect(guitar.calcPitchFingerings("E2")).toEqual({
			pitch: "E2",
			fingeringOptions: [{ stringNum: 6, fret: 0 }],
		});
		expect(guitar.calcPitchFingerings("G5")).toEqual({
			pitch: "G5",
			fingeringOptions: [{ stringNum: 1, fret: 15 }],
		});
		expect(guitar.calcPitchFingerings("A3")).toEqual({
			pitch: "A3",
			fingeringOptions: [
				{ stringNum: 3, fret: 2 },
				{ stringNum: 4, fret: 7 },
				{ stringNum: 5, fret: 12 },
				{ stringNum: 6, fret: 17 },
			],
		});
		expect(guitar.calcPitchFingerings("A#4")).toEqual({
			pitch: "A#4",
			fingeringOptions: [
				{ stringNum: 1, fret: 6 },
				{ stringNum: 2, fret: 11 },
				{ stringNum: 3, fret: 15 },
			],
		});
	});

	it("calculates pitch fingerings correctly with non-standard tuning, no capo", function () {
		const guitar = new GuitarModule.Guitar("Drop B");

		expect(guitar.tuningName).toEqual("dropb");
		expect(guitar.calcPitchFingerings("E2")).toEqual({
			pitch: "E2",
			fingeringOptions: [{ stringNum: 6, fret: 5 }],
		});
		expect(guitar.calcPitchFingerings("A3")).toEqual({
			pitch: "A3",
			fingeringOptions: [
				{ stringNum: 2, fret: 1 },
				{ stringNum: 3, fret: 5 },
				{ stringNum: 4, fret: 10 },
				{ stringNum: 5, fret: 15 },
			],
		});
		expect(guitar.calcPitchFingerings("A#4")).toEqual({
			pitch: "A#4",
			fingeringOptions: [
				{ stringNum: 1, fret: 9 },
				{ stringNum: 2, fret: 14 },
			],
		});
		expect(() => {
			guitar.calcPitchFingerings("G5");
		}).toThrow("Out of range or invalid pitch");
	});

	it("calculates pitch fingerings correctly with standard tuning, with capo", function () {
		const guitar = new GuitarModule.Guitar("Standard", 4);

		expect(guitar.calcPitchFingerings("A3")).toEqual({
			pitch: "A3",
			fingeringOptions: [
				{ stringNum: 4, fret: 3 },
				{ stringNum: 5, fret: 8 },
				{ stringNum: 6, fret: 13 },
			],
		});
		expect(() => {
			guitar.calcPitchFingerings("E2");
		}).toThrow("Out of range or invalid pitch");
		expect(() => {
			guitar.calcPitchFingerings("G2");
		}).toThrow("Out of range or invalid pitch");
	});
});

describe("Guitar Line Fingerings Calculation", () => {
	it("calculates lines fingerings in correct format", function () {
		const guitar = new GuitarModule.Guitar();

		const pitchLines = [
			["E2"],
			["A2", "A3"],
			"",
			["E4", "C#4", "G3", "E3", "A2"],
		];
		const linePitchFingerings = [
			[{ pitch: "E2", fingeringOptions: [{ stringNum: 6, fret: 0 }] }],
			[
				{
					pitch: "A2",
					fingeringOptions: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 5 },
					],
				},
				{
					pitch: "A3",
					fingeringOptions: [
						{ stringNum: 3, fret: 2 },
						{ stringNum: 4, fret: 7 },
						{ stringNum: 5, fret: 12 },
						{ stringNum: 6, fret: 17 },
					],
				},
			],
			"break",
			[
				{
					pitch: "E4",
					fingeringOptions: [
						{ stringNum: 1, fret: 0 },
						{ stringNum: 2, fret: 5 },
						{ stringNum: 3, fret: 9 },
						{ stringNum: 4, fret: 14 },
					],
				},
				{
					pitch: "C#4",
					fingeringOptions: [
						{ stringNum: 2, fret: 2 },
						{ stringNum: 3, fret: 6 },
						{ stringNum: 4, fret: 11 },
						{ stringNum: 5, fret: 16 },
					],
				},
				{
					pitch: "G3",
					fingeringOptions: [
						{ stringNum: 3, fret: 0 },
						{ stringNum: 4, fret: 5 },
						{ stringNum: 5, fret: 10 },
						{ stringNum: 6, fret: 15 },
					],
				},
				{
					pitch: "E3",
					fingeringOptions: [
						{ stringNum: 4, fret: 2 },
						{ stringNum: 5, fret: 7 },
						{ stringNum: 6, fret: 12 },
					],
				},
				{
					pitch: "A2",
					fingeringOptions: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 5 },
					],
				},
			],
		];

		expect(pitchLines.map(guitar.genPitchFingering, guitar)).toEqual(
			linePitchFingerings
		);
	});
});

describe("Guitar Line Fingering Options Calculation", () => {
	it("calculates line fingerings options in correct format", function () {
		const guitar = new GuitarModule.Guitar();

		const linePitchFingerings = [
			[
				{
					pitch: "D#4",
					fingeringOptions: [
						{ stringNum: 2, fret: 4 },
						{ stringNum: 3, fret: 8 },
						{ stringNum: 4, fret: 13 },
					],
				},
			],
			[
				{
					pitch: "B4",
					fingeringOptions: [
						{ stringNum: 1, fret: 7 },
						{ stringNum: 2, fret: 12 },
						{ stringNum: 3, fret: 16 },
					],
				},
			],
			[
				{ pitch: "F2", fingeringOptions: [{ stringNum: 6, fret: 1 }] },
				{
					pitch: "B4",
					fingeringOptions: [
						{ stringNum: 1, fret: 7 },
						{ stringNum: 2, fret: 12 },
						{ stringNum: 3, fret: 16 },
					],
				},
			],
			[
				{
					pitch: "A2",
					fingeringOptions: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 5 },
					],
				},
				{
					pitch: "A3",
					fingeringOptions: [
						{ stringNum: 3, fret: 2 },
						{ stringNum: 4, fret: 7 },
						{ stringNum: 5, fret: 12 },
						{ stringNum: 6, fret: 17 },
					],
				},
			],
			"break",
			[
				{
					pitch: "E4",
					fingeringOptions: [
						{ stringNum: 1, fret: 0 },
						{ stringNum: 2, fret: 5 },
						{ stringNum: 3, fret: 9 },
						{ stringNum: 4, fret: 14 },
					],
				},
				{
					pitch: "B3",
					fingeringOptions: [
						{ stringNum: 2, fret: 0 },
						{ stringNum: 3, fret: 4 },
						{ stringNum: 4, fret: 9 },
						{ stringNum: 5, fret: 14 },
					],
				},
				{
					pitch: "G3",
					fingeringOptions: [
						{ stringNum: 3, fret: 0 },
						{ stringNum: 4, fret: 5 },
						{ stringNum: 5, fret: 10 },
						{ stringNum: 6, fret: 15 },
					],
				},
				{
					pitch: "E3",
					fingeringOptions: [
						{ stringNum: 4, fret: 2 },
						{ stringNum: 5, fret: 7 },
						{ stringNum: 6, fret: 12 },
					],
				},
				{
					pitch: "B2",
					fingeringOptions: [
						{ stringNum: 5, fret: 2 },
						{ stringNum: 6, fret: 7 },
					],
				},
				{ pitch: "E2", fingeringOptions: [{ stringNum: 6, fret: 0 }] },
			],
		];
		const lineFingeringOptions = [
			[
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 4 }],
				},
				{
					avg_fret: 8,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 8 }],
				},
				{
					avg_fret: 13,
					fret_span: 0,
					fingering: [{ stringNum: 4, fret: 13 }],
				},
			],
			[
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 1, fret: 7 }],
				},
				{
					avg_fret: 12,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 12 }],
				},
				{
					avg_fret: 16,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 16 }],
				},
			],
			[
				{
					avg_fret: 4,
					fret_span: 6,
					fingering: [
						{ stringNum: 6, fret: 1 },
						{ stringNum: 1, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 3, fret: 2 },
					],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 4, fret: 7 },
					],
				},
				{
					avg_fret: 17,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 17 },
					],
				},
				{
					avg_fret: 6,
					fret_span: 2,
					fingering: [
						{ stringNum: 6, fret: 5 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			"break",
			[
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [
						{ stringNum: 1, fret: 0 },
						{ stringNum: 2, fret: 0 },
						{ stringNum: 3, fret: 0 },
						{ stringNum: 4, fret: 2 },
						{ stringNum: 5, fret: 2 },
						{ stringNum: 6, fret: 0 },
					],
				},
			],
		];

		expect(
			linePitchFingerings.map(guitar.genLineFingeringOptions, guitar)
		).toEqual(lineFingeringOptions);
	});

	it("handles improper input", function () {
		const guitar = new GuitarModule.Guitar();
		const linePitchFingerings = [
			[
				{ pitch: "E2", fingeringOptions: [{ stringNum: 6, fret: 0 }] },
				{ pitch: "F2", fingeringOptions: [{ stringNum: 6, fret: 1 }] },
				{ pitch: "F#2", fingeringOptions: [{ stringNum: 6, fret: 2 }] },
			],
		];
		expect(() => {
			linePitchFingerings.map(guitar.genLineFingeringOptions, guitar);
		}).toThrow("an impossible combination");
	});
});

describe("Guitar Fingering Option Criteria Calculation", () => {
	let normalGuitar;
	beforeEach(() => {
		normalGuitar = new GuitarModule.Guitar();
	});

	it("calculates fingering option criteria for 1 beat", function () {
		const blockFingeringCombosList = [
			[
				{
					avg_fret: 0,
					fret_span: 0,
					fingering: [{ stringNum: 5, fret: 0 }],
				},
			],
			[
				{
					avg_fret: 5,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 5 }],
				},
			],
		];

		const blockFingeringOptionsList = [
			{
				avg_frets: [],
				avg_fret_val: 0,
				avg_fret_stddev: 0,
				avg_fret_steps: [],
				avg_fret_steps_stddev_smoothness: 0,
				combo_score: 0,
				combo: [
					{
						avg_fret: 0,
						fret_span: 0,
						fingering: [{ stringNum: 5, fret: 0 }],
					},
				],
			},
			{
				avg_frets: [5],
				avg_fret_val: 5,
				avg_fret_stddev: 0,
				avg_fret_steps: [],
				avg_fret_steps_stddev_smoothness: 0,
				combo_score: 0.005,
				combo: [
					{
						avg_fret: 5,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 5 }],
					},
				],
			},
		];

		expect(
			blockFingeringCombosList.map(
				normalGuitar.calcFingeringOptionCriteria,
				normalGuitar
			)
		).toEqual(blockFingeringOptionsList);
	});

	it("calculates fingering option criteria for 3 beats", function () {
		const blockFingeringCombosList = [
			[
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 4 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 1, fret: 7 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 3, fret: 2 },
					],
				},
			],
			[
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 4 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 1, fret: 7 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 4 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 1, fret: 7 }],
				},
				{
					avg_fret: 17,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 17 },
					],
				},
			],
			[
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 4 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 1, fret: 7 }],
				},
				{
					avg_fret: 6,
					fret_span: 2,
					fingering: [
						{ stringNum: 6, fret: 5 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 4 }],
				},
				{
					avg_fret: 12,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 12 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 3, fret: 2 },
					],
				},
			],
			[
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 4 }],
				},
				{
					avg_fret: 12,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 12 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 4 }],
				},
				{
					avg_fret: 12,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 12 }],
				},
				{
					avg_fret: 17,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 17 },
					],
				},
			],
			[
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 4 }],
				},
				{
					avg_fret: 12,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 12 }],
				},
				{
					avg_fret: 6,
					fret_span: 2,
					fingering: [
						{ stringNum: 6, fret: 5 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 4 }],
				},
				{
					avg_fret: 16,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 16 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 3, fret: 2 },
					],
				},
			],
			[
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 4 }],
				},
				{
					avg_fret: 16,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 16 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 4 }],
				},
				{
					avg_fret: 16,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 16 }],
				},
				{
					avg_fret: 17,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 17 },
					],
				},
			],
			[
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 4 }],
				},
				{
					avg_fret: 16,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 16 }],
				},
				{
					avg_fret: 6,
					fret_span: 2,
					fingering: [
						{ stringNum: 6, fret: 5 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 8,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 8 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 1, fret: 7 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 3, fret: 2 },
					],
				},
			],
			[
				{
					avg_fret: 8,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 8 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 1, fret: 7 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 8,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 8 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 1, fret: 7 }],
				},
				{
					avg_fret: 17,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 17 },
					],
				},
			],
			[
				{
					avg_fret: 8,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 8 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 1, fret: 7 }],
				},
				{
					avg_fret: 6,
					fret_span: 2,
					fingering: [
						{ stringNum: 6, fret: 5 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 8,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 8 }],
				},
				{
					avg_fret: 12,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 12 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 3, fret: 2 },
					],
				},
			],
			[
				{
					avg_fret: 8,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 8 }],
				},
				{
					avg_fret: 12,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 12 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 8,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 8 }],
				},
				{
					avg_fret: 12,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 12 }],
				},
				{
					avg_fret: 17,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 17 },
					],
				},
			],
			[
				{
					avg_fret: 8,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 8 }],
				},
				{
					avg_fret: 12,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 12 }],
				},
				{
					avg_fret: 6,
					fret_span: 2,
					fingering: [
						{ stringNum: 6, fret: 5 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 8,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 8 }],
				},
				{
					avg_fret: 16,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 16 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 3, fret: 2 },
					],
				},
			],
			[
				{
					avg_fret: 8,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 8 }],
				},
				{
					avg_fret: 16,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 16 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 8,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 8 }],
				},
				{
					avg_fret: 16,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 16 }],
				},
				{
					avg_fret: 17,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 17 },
					],
				},
			],
			[
				{
					avg_fret: 8,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 8 }],
				},
				{
					avg_fret: 16,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 16 }],
				},
				{
					avg_fret: 6,
					fret_span: 2,
					fingering: [
						{ stringNum: 6, fret: 5 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 13,
					fret_span: 0,
					fingering: [{ stringNum: 4, fret: 13 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 1, fret: 7 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 3, fret: 2 },
					],
				},
			],
			[
				{
					avg_fret: 13,
					fret_span: 0,
					fingering: [{ stringNum: 4, fret: 13 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 1, fret: 7 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 13,
					fret_span: 0,
					fingering: [{ stringNum: 4, fret: 13 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 1, fret: 7 }],
				},
				{
					avg_fret: 17,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 17 },
					],
				},
			],
			[
				{
					avg_fret: 13,
					fret_span: 0,
					fingering: [{ stringNum: 4, fret: 13 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 1, fret: 7 }],
				},
				{
					avg_fret: 6,
					fret_span: 2,
					fingering: [
						{ stringNum: 6, fret: 5 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 13,
					fret_span: 0,
					fingering: [{ stringNum: 4, fret: 13 }],
				},
				{
					avg_fret: 12,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 12 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 3, fret: 2 },
					],
				},
			],
			[
				{
					avg_fret: 13,
					fret_span: 0,
					fingering: [{ stringNum: 4, fret: 13 }],
				},
				{
					avg_fret: 12,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 12 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 13,
					fret_span: 0,
					fingering: [{ stringNum: 4, fret: 13 }],
				},
				{
					avg_fret: 12,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 12 }],
				},
				{
					avg_fret: 17,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 17 },
					],
				},
			],
			[
				{
					avg_fret: 13,
					fret_span: 0,
					fingering: [{ stringNum: 4, fret: 13 }],
				},
				{
					avg_fret: 12,
					fret_span: 0,
					fingering: [{ stringNum: 2, fret: 12 }],
				},
				{
					avg_fret: 6,
					fret_span: 2,
					fingering: [
						{ stringNum: 6, fret: 5 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 13,
					fret_span: 0,
					fingering: [{ stringNum: 4, fret: 13 }],
				},
				{
					avg_fret: 16,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 16 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 3, fret: 2 },
					],
				},
			],
			[
				{
					avg_fret: 13,
					fret_span: 0,
					fingering: [{ stringNum: 4, fret: 13 }],
				},
				{
					avg_fret: 16,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 16 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
			[
				{
					avg_fret: 13,
					fret_span: 0,
					fingering: [{ stringNum: 4, fret: 13 }],
				},
				{
					avg_fret: 16,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 16 }],
				},
				{
					avg_fret: 17,
					fret_span: 0,
					fingering: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 17 },
					],
				},
			],
			[
				{
					avg_fret: 13,
					fret_span: 0,
					fingering: [{ stringNum: 4, fret: 13 }],
				},
				{
					avg_fret: 16,
					fret_span: 0,
					fingering: [{ stringNum: 3, fret: 16 }],
				},
				{
					avg_fret: 6,
					fret_span: 2,
					fingering: [
						{ stringNum: 6, fret: 5 },
						{ stringNum: 4, fret: 7 },
					],
				},
			],
		];

		const blockFingeringOptionsList = [
			{
				avg_frets: [4, 7, 2],
				avg_fret_val: 4.333333333333333,
				avg_fret_stddev: 2.0548046676563256,
				avg_fret_steps: [3, -5],
				avg_fret_steps_stddev_smoothness: 4,
				combo_score: 2.459138000989659,
				combo: [
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 4 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 1, fret: 7 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 3, fret: 2 },
						],
					},
				],
			},
			{
				avg_frets: [4, 7, 7],
				avg_fret_val: 6,
				avg_fret_stddev: 1.4142135623730951,
				avg_fret_steps: [3, 0],
				avg_fret_steps_stddev_smoothness: 1.5,
				combo_score: 1.5702135623730953,
				combo: [
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 4 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 1, fret: 7 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [4, 7, 17],
				avg_fret_val: 9.333333333333334,
				avg_fret_stddev: 5.557777333511022,
				avg_fret_steps: [3, 10],
				avg_fret_steps_stddev_smoothness: 3.5,
				combo_score: 5.917110666844355,
				combo: [
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 4 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 1, fret: 7 }],
					},
					{
						avg_fret: 17,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 6, fret: 17 },
						],
					},
				],
			},
			{
				avg_frets: [4, 7, 6],
				avg_fret_val: 5.666666666666667,
				avg_fret_stddev: 1.247219128924647,
				avg_fret_steps: [3, -1],
				avg_fret_steps_stddev_smoothness: 2,
				combo_score: 1.4528857955913137,
				combo: [
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 4 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 1, fret: 7 }],
					},
					{
						avg_fret: 6,
						fret_span: 2,
						fingering: [
							{ stringNum: 6, fret: 5 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [4, 12, 2],
				avg_fret_val: 6,
				avg_fret_stddev: 4.320493798938574,
				avg_fret_steps: [8, -10],
				avg_fret_steps_stddev_smoothness: 9,
				combo_score: 5.2264937989385745,
				combo: [
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 4 }],
					},
					{
						avg_fret: 12,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 12 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 3, fret: 2 },
						],
					},
				],
			},
			{
				avg_frets: [4, 12, 7],
				avg_fret_val: 7.666666666666667,
				avg_fret_stddev: 3.2998316455372216,
				avg_fret_steps: [8, -5],
				avg_fret_steps_stddev_smoothness: 6.5,
				combo_score: 3.9574983122038883,
				combo: [
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 4 }],
					},
					{
						avg_fret: 12,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 12 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [4, 12, 17],
				avg_fret_val: 11,
				avg_fret_stddev: 5.354126134736337,
				avg_fret_steps: [8, 5],
				avg_fret_steps_stddev_smoothness: 1.5,
				combo_score: 5.515126134736337,
				combo: [
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 4 }],
					},
					{
						avg_fret: 12,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 12 }],
					},
					{
						avg_fret: 17,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 6, fret: 17 },
						],
					},
				],
			},
			{
				avg_frets: [4, 12, 6],
				avg_fret_val: 7.333333333333333,
				avg_fret_stddev: 3.39934634239519,
				avg_fret_steps: [8, -6],
				avg_fret_steps_stddev_smoothness: 7,
				combo_score: 4.1066796757285235,
				combo: [
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 4 }],
					},
					{
						avg_fret: 12,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 12 }],
					},
					{
						avg_fret: 6,
						fret_span: 2,
						fingering: [
							{ stringNum: 6, fret: 5 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [4, 16, 2],
				avg_fret_val: 7.333333333333333,
				avg_fret_stddev: 6.18241233033047,
				avg_fret_steps: [12, -14],
				avg_fret_steps_stddev_smoothness: 13,
				combo_score: 7.489745663663803,
				combo: [
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 4 }],
					},
					{
						avg_fret: 16,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 16 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 3, fret: 2 },
						],
					},
				],
			},
			{
				avg_frets: [4, 16, 7],
				avg_fret_val: 9,
				avg_fret_stddev: 5.0990195135927845,
				avg_fret_steps: [12, -9],
				avg_fret_steps_stddev_smoothness: 10.5,
				combo_score: 6.158019513592785,
				combo: [
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 4 }],
					},
					{
						avg_fret: 16,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 16 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [4, 16, 17],
				avg_fret_val: 12.333333333333334,
				avg_fret_stddev: 5.90668171555645,
				avg_fret_steps: [12, 1],
				avg_fret_steps_stddev_smoothness: 5.5,
				combo_score: 6.4690150488897835,
				combo: [
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 4 }],
					},
					{
						avg_fret: 16,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 16 }],
					},
					{
						avg_fret: 17,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 6, fret: 17 },
						],
					},
				],
			},
			{
				avg_frets: [4, 16, 6],
				avg_fret_val: 8.666666666666666,
				avg_fret_stddev: 5.2493385826745405,
				avg_fret_steps: [12, -10],
				avg_fret_steps_stddev_smoothness: 11,
				combo_score: 6.358005249341208,
				combo: [
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 4 }],
					},
					{
						avg_fret: 16,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 16 }],
					},
					{
						avg_fret: 6,
						fret_span: 2,
						fingering: [
							{ stringNum: 6, fret: 5 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [8, 7, 2],
				avg_fret_val: 5.666666666666667,
				avg_fret_stddev: 2.6246692913372702,
				avg_fret_steps: [-1, -5],
				avg_fret_steps_stddev_smoothness: 2,
				combo_score: 2.830335958003937,
				combo: [
					{
						avg_fret: 8,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 8 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 1, fret: 7 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 3, fret: 2 },
						],
					},
				],
			},
			{
				avg_frets: [8, 7, 7],
				avg_fret_val: 7.333333333333333,
				avg_fret_stddev: 0.4714045207910317,
				avg_fret_steps: [-1, 0],
				avg_fret_steps_stddev_smoothness: 0.5,
				combo_score: 0.528737854124365,
				combo: [
					{
						avg_fret: 8,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 8 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 1, fret: 7 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [8, 7, 17],
				avg_fret_val: 10.666666666666666,
				avg_fret_stddev: 4.4969125210773475,
				avg_fret_steps: [-1, 10],
				avg_fret_steps_stddev_smoothness: 5.5,
				combo_score: 5.057579187744014,
				combo: [
					{
						avg_fret: 8,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 8 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 1, fret: 7 }],
					},
					{
						avg_fret: 17,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 6, fret: 17 },
						],
					},
				],
			},
			{
				avg_frets: [8, 7, 6],
				avg_fret_val: 7,
				avg_fret_stddev: 0.816496580927726,
				avg_fret_steps: [-1, -1],
				avg_fret_steps_stddev_smoothness: 0,
				combo_score: 0.823496580927726,
				combo: [
					{
						avg_fret: 8,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 8 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 1, fret: 7 }],
					},
					{
						avg_fret: 6,
						fret_span: 2,
						fingering: [
							{ stringNum: 6, fret: 5 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [8, 12, 2],
				avg_fret_val: 7.333333333333333,
				avg_fret_stddev: 4.109609335312651,
				avg_fret_steps: [4, -10],
				avg_fret_steps_stddev_smoothness: 7,
				combo_score: 4.816942668645985,
				combo: [
					{
						avg_fret: 8,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 8 }],
					},
					{
						avg_fret: 12,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 12 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 3, fret: 2 },
						],
					},
				],
			},
			{
				avg_frets: [8, 12, 7],
				avg_fret_val: 9,
				avg_fret_stddev: 2.160246899469287,
				avg_fret_steps: [4, -5],
				avg_fret_steps_stddev_smoothness: 4.5,
				combo_score: 2.619246899469287,
				combo: [
					{
						avg_fret: 8,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 8 }],
					},
					{
						avg_fret: 12,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 12 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [8, 12, 17],
				avg_fret_val: 12.333333333333334,
				avg_fret_stddev: 3.681787005729087,
				avg_fret_steps: [4, 5],
				avg_fret_steps_stddev_smoothness: 0.5,
				combo_score: 3.74412033906242,
				combo: [
					{
						avg_fret: 8,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 8 }],
					},
					{
						avg_fret: 12,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 12 }],
					},
					{
						avg_fret: 17,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 6, fret: 17 },
						],
					},
				],
			},
			{
				avg_frets: [8, 12, 6],
				avg_fret_val: 8.666666666666666,
				avg_fret_stddev: 2.494438257849294,
				avg_fret_steps: [4, -6],
				avg_fret_steps_stddev_smoothness: 5,
				combo_score: 3.0031049245159607,
				combo: [
					{
						avg_fret: 8,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 8 }],
					},
					{
						avg_fret: 12,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 12 }],
					},
					{
						avg_fret: 6,
						fret_span: 2,
						fingering: [
							{ stringNum: 6, fret: 5 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [8, 16, 2],
				avg_fret_val: 8.666666666666666,
				avg_fret_stddev: 5.734883511361751,
				avg_fret_steps: [8, -14],
				avg_fret_steps_stddev_smoothness: 11,
				combo_score: 6.843550178028417,
				combo: [
					{
						avg_fret: 8,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 8 }],
					},
					{
						avg_fret: 16,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 16 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 3, fret: 2 },
						],
					},
				],
			},
			{
				avg_frets: [8, 16, 7],
				avg_fret_val: 10.333333333333334,
				avg_fret_stddev: 4.027681991198191,
				avg_fret_steps: [8, -9],
				avg_fret_steps_stddev_smoothness: 8.5,
				combo_score: 4.8880153245315245,
				combo: [
					{
						avg_fret: 8,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 8 }],
					},
					{
						avg_fret: 16,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 16 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [8, 16, 17],
				avg_fret_val: 13.666666666666666,
				avg_fret_stddev: 4.027681991198191,
				avg_fret_steps: [8, 1],
				avg_fret_steps_stddev_smoothness: 3.5,
				combo_score: 4.3913486578648575,
				combo: [
					{
						avg_fret: 8,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 8 }],
					},
					{
						avg_fret: 16,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 16 }],
					},
					{
						avg_fret: 17,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 6, fret: 17 },
						],
					},
				],
			},
			{
				avg_frets: [8, 16, 6],
				avg_fret_val: 10,
				avg_fret_stddev: 4.320493798938574,
				avg_fret_steps: [8, -10],
				avg_fret_steps_stddev_smoothness: 9,
				combo_score: 5.230493798938574,
				combo: [
					{
						avg_fret: 8,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 8 }],
					},
					{
						avg_fret: 16,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 16 }],
					},
					{
						avg_fret: 6,
						fret_span: 2,
						fingering: [
							{ stringNum: 6, fret: 5 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [13, 7, 2],
				avg_fret_val: 7.333333333333333,
				avg_fret_stddev: 4.4969125210773475,
				avg_fret_steps: [-6, -5],
				avg_fret_steps_stddev_smoothness: 0.5,
				combo_score: 4.554245854410681,
				combo: [
					{
						avg_fret: 13,
						fret_span: 0,
						fingering: [{ stringNum: 4, fret: 13 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 1, fret: 7 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 3, fret: 2 },
						],
					},
				],
			},
			{
				avg_frets: [13, 7, 7],
				avg_fret_val: 9,
				avg_fret_stddev: 2.8284271247461903,
				avg_fret_steps: [-6, 0],
				avg_fret_steps_stddev_smoothness: 3,
				combo_score: 3.1374271247461905,
				combo: [
					{
						avg_fret: 13,
						fret_span: 0,
						fingering: [{ stringNum: 4, fret: 13 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 1, fret: 7 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [13, 7, 17],
				avg_fret_val: 12.333333333333334,
				avg_fret_stddev: 4.109609335312651,
				avg_fret_steps: [-6, 10],
				avg_fret_steps_stddev_smoothness: 8,
				combo_score: 4.921942668645984,
				combo: [
					{
						avg_fret: 13,
						fret_span: 0,
						fingering: [{ stringNum: 4, fret: 13 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 1, fret: 7 }],
					},
					{
						avg_fret: 17,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 6, fret: 17 },
						],
					},
				],
			},
			{
				avg_frets: [13, 7, 6],
				avg_fret_val: 8.666666666666666,
				avg_fret_stddev: 3.0912061651652345,
				avg_fret_steps: [-6, -1],
				avg_fret_steps_stddev_smoothness: 2.5,
				combo_score: 3.349872831831901,
				combo: [
					{
						avg_fret: 13,
						fret_span: 0,
						fingering: [{ stringNum: 4, fret: 13 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 1, fret: 7 }],
					},
					{
						avg_fret: 6,
						fret_span: 2,
						fingering: [
							{ stringNum: 6, fret: 5 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [13, 12, 2],
				avg_fret_val: 9,
				avg_fret_stddev: 4.96655480858378,
				avg_fret_steps: [-1, -10],
				avg_fret_steps_stddev_smoothness: 4.5,
				combo_score: 5.42555480858378,
				combo: [
					{
						avg_fret: 13,
						fret_span: 0,
						fingering: [{ stringNum: 4, fret: 13 }],
					},
					{
						avg_fret: 12,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 12 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 3, fret: 2 },
						],
					},
				],
			},
			{
				avg_frets: [13, 12, 7],
				avg_fret_val: 10.666666666666666,
				avg_fret_stddev: 2.6246692913372702,
				avg_fret_steps: [-1, -5],
				avg_fret_steps_stddev_smoothness: 2,
				combo_score: 2.8353359580039372,
				combo: [
					{
						avg_fret: 13,
						fret_span: 0,
						fingering: [{ stringNum: 4, fret: 13 }],
					},
					{
						avg_fret: 12,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 12 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [13, 12, 17],
				avg_fret_val: 14,
				avg_fret_stddev: 2.160246899469287,
				avg_fret_steps: [-1, 5],
				avg_fret_steps_stddev_smoothness: 3,
				combo_score: 2.474246899469287,
				combo: [
					{
						avg_fret: 13,
						fret_span: 0,
						fingering: [{ stringNum: 4, fret: 13 }],
					},
					{
						avg_fret: 12,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 12 }],
					},
					{
						avg_fret: 17,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 6, fret: 17 },
						],
					},
				],
			},
			{
				avg_frets: [13, 12, 6],
				avg_fret_val: 10.333333333333334,
				avg_fret_stddev: 3.0912061651652345,
				avg_fret_steps: [-1, -6],
				avg_fret_steps_stddev_smoothness: 2.5,
				combo_score: 3.351539498498568,
				combo: [
					{
						avg_fret: 13,
						fret_span: 0,
						fingering: [{ stringNum: 4, fret: 13 }],
					},
					{
						avg_fret: 12,
						fret_span: 0,
						fingering: [{ stringNum: 2, fret: 12 }],
					},
					{
						avg_fret: 6,
						fret_span: 2,
						fingering: [
							{ stringNum: 6, fret: 5 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [13, 16, 2],
				avg_fret_val: 10.333333333333334,
				avg_fret_stddev: 6.018490028422596,
				avg_fret_steps: [3, -14],
				avg_fret_steps_stddev_smoothness: 8.5,
				combo_score: 6.878823361755929,
				combo: [
					{
						avg_fret: 13,
						fret_span: 0,
						fingering: [{ stringNum: 4, fret: 13 }],
					},
					{
						avg_fret: 16,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 16 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 3, fret: 2 },
						],
					},
				],
			},
			{
				avg_frets: [13, 16, 7],
				avg_fret_val: 12,
				avg_fret_stddev: 3.7416573867739413,
				avg_fret_steps: [3, -9],
				avg_fret_steps_stddev_smoothness: 6,
				combo_score: 4.353657386773941,
				combo: [
					{
						avg_fret: 13,
						fret_span: 0,
						fingering: [{ stringNum: 4, fret: 13 }],
					},
					{
						avg_fret: 16,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 16 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
			{
				avg_frets: [13, 16, 17],
				avg_fret_val: 15.333333333333334,
				avg_fret_stddev: 1.699673171197595,
				avg_fret_steps: [3, 1],
				avg_fret_steps_stddev_smoothness: 1,
				combo_score: 1.8150065045309285,
				combo: [
					{
						avg_fret: 13,
						fret_span: 0,
						fingering: [{ stringNum: 4, fret: 13 }],
					},
					{
						avg_fret: 16,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 16 }],
					},
					{
						avg_fret: 17,
						fret_span: 0,
						fingering: [
							{ stringNum: 5, fret: 0 },
							{ stringNum: 6, fret: 17 },
						],
					},
				],
			},
			{
				avg_frets: [13, 16, 6],
				avg_fret_val: 11.666666666666666,
				avg_fret_stddev: 4.189935029992179,
				avg_fret_steps: [3, -10],
				avg_fret_steps_stddev_smoothness: 6.5,
				combo_score: 4.851601696658846,
				combo: [
					{
						avg_fret: 13,
						fret_span: 0,
						fingering: [{ stringNum: 4, fret: 13 }],
					},
					{
						avg_fret: 16,
						fret_span: 0,
						fingering: [{ stringNum: 3, fret: 16 }],
					},
					{
						avg_fret: 6,
						fret_span: 2,
						fingering: [
							{ stringNum: 6, fret: 5 },
							{ stringNum: 4, fret: 7 },
						],
					},
				],
			},
		];

		expect(
			blockFingeringCombosList.map(
				normalGuitar.calcFingeringOptionCriteria,
				normalGuitar
			)
		).toEqual(blockFingeringOptionsList);
	});

	it("calculates fingering option criteria for 8 beats", function () {
		const blockFingeringCombosList = [
			[
				{
					avg_fret: 0,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 0 }],
				},
				{
					avg_fret: 1,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 1 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 2 }],
				},
				{
					avg_fret: 3,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 3 }],
				},
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 4 }],
				},
				{
					avg_fret: 0,
					fret_span: 0,
					fingering: [{ stringNum: 5, fret: 0 }],
				},
				{
					avg_fret: 1,
					fret_span: 0,
					fingering: [{ stringNum: 5, fret: 1 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [{ stringNum: 5, fret: 2 }],
				},
			],
			[
				{
					avg_fret: 0,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 0 }],
				},
				{
					avg_fret: 1,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 1 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 2 }],
				},
				{
					avg_fret: 3,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 3 }],
				},
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 4 }],
				},
				{
					avg_fret: 0,
					fret_span: 0,
					fingering: [{ stringNum: 5, fret: 0 }],
				},
				{
					avg_fret: 1,
					fret_span: 0,
					fingering: [{ stringNum: 5, fret: 1 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 7 }],
				},
			],
			[
				{
					avg_fret: 0,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 0 }],
				},
				{
					avg_fret: 1,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 1 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 2 }],
				},
				{
					avg_fret: 3,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 3 }],
				},
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 4 }],
				},
				{
					avg_fret: 0,
					fret_span: 0,
					fingering: [{ stringNum: 5, fret: 0 }],
				},
				{
					avg_fret: 6,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 6 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [{ stringNum: 5, fret: 2 }],
				},
			],
			[
				{
					avg_fret: 0,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 0 }],
				},
				{
					avg_fret: 1,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 1 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 2 }],
				},
				{
					avg_fret: 3,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 3 }],
				},
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 4 }],
				},
				{
					avg_fret: 0,
					fret_span: 0,
					fingering: [{ stringNum: 5, fret: 0 }],
				},
				{
					avg_fret: 6,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 6 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 7 }],
				},
			],
			[
				{
					avg_fret: 0,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 0 }],
				},
				{
					avg_fret: 1,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 1 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 2 }],
				},
				{
					avg_fret: 3,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 3 }],
				},
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 4 }],
				},
				{
					avg_fret: 5,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 5 }],
				},
				{
					avg_fret: 1,
					fret_span: 0,
					fingering: [{ stringNum: 5, fret: 1 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [{ stringNum: 5, fret: 2 }],
				},
			],
			[
				{
					avg_fret: 0,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 0 }],
				},
				{
					avg_fret: 1,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 1 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 2 }],
				},
				{
					avg_fret: 3,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 3 }],
				},
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 4 }],
				},
				{
					avg_fret: 5,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 5 }],
				},
				{
					avg_fret: 1,
					fret_span: 0,
					fingering: [{ stringNum: 5, fret: 1 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 7 }],
				},
			],
			[
				{
					avg_fret: 0,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 0 }],
				},
				{
					avg_fret: 1,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 1 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 2 }],
				},
				{
					avg_fret: 3,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 3 }],
				},
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 4 }],
				},
				{
					avg_fret: 5,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 5 }],
				},
				{
					avg_fret: 6,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 6 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [{ stringNum: 5, fret: 2 }],
				},
			],
			[
				{
					avg_fret: 0,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 0 }],
				},
				{
					avg_fret: 1,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 1 }],
				},
				{
					avg_fret: 2,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 2 }],
				},
				{
					avg_fret: 3,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 3 }],
				},
				{
					avg_fret: 4,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 4 }],
				},
				{
					avg_fret: 5,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 5 }],
				},
				{
					avg_fret: 6,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 6 }],
				},
				{
					avg_fret: 7,
					fret_span: 0,
					fingering: [{ stringNum: 6, fret: 7 }],
				},
			],
		];

		const blockFingeringOptionsList = [
			{
				avg_frets: [1, 2, 3, 4, 1, 2],
				avg_fret_val: 2.1666666666666665,
				avg_fret_stddev: 1.0671873729054748,
				avg_fret_steps: [1, 1, 1, -3, 1],
				avg_fret_steps_stddev_smoothness: 1.6,
				combo_score: 1.2293540395721414,
				combo: [
					{
						avg_fret: 0,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 0 }],
					},
					{
						avg_fret: 1,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 1 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 2 }],
					},
					{
						avg_fret: 3,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 3 }],
					},
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 4 }],
					},
					{
						avg_fret: 0,
						fret_span: 0,
						fingering: [{ stringNum: 5, fret: 0 }],
					},
					{
						avg_fret: 1,
						fret_span: 0,
						fingering: [{ stringNum: 5, fret: 1 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [{ stringNum: 5, fret: 2 }],
					},
				],
			},
			{
				avg_frets: [1, 2, 3, 4, 1, 7],
				avg_fret_val: 3,
				avg_fret_stddev: 2.0816659994661326,
				avg_fret_steps: [1, 1, 1, -3, 6],
				avg_fret_steps_stddev_smoothness: 2.85657137141714,
				combo_score: 2.3703231366078468,
				combo: [
					{
						avg_fret: 0,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 0 }],
					},
					{
						avg_fret: 1,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 1 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 2 }],
					},
					{
						avg_fret: 3,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 3 }],
					},
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 4 }],
					},
					{
						avg_fret: 0,
						fret_span: 0,
						fingering: [{ stringNum: 5, fret: 0 }],
					},
					{
						avg_fret: 1,
						fret_span: 0,
						fingering: [{ stringNum: 5, fret: 1 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 7 }],
					},
				],
			},
			{
				avg_frets: [1, 2, 3, 4, 6, 2],
				avg_fret_val: 3,
				avg_fret_stddev: 1.632993161855452,
				avg_fret_steps: [1, 1, 1, 2, -4],
				avg_fret_steps_stddev_smoothness: 2.1354156504062622,
				combo_score: 1.8495347268960782,
				combo: [
					{
						avg_fret: 0,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 0 }],
					},
					{
						avg_fret: 1,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 1 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 2 }],
					},
					{
						avg_fret: 3,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 3 }],
					},
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 4 }],
					},
					{
						avg_fret: 0,
						fret_span: 0,
						fingering: [{ stringNum: 5, fret: 0 }],
					},
					{
						avg_fret: 6,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 6 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [{ stringNum: 5, fret: 2 }],
					},
				],
			},
			{
				avg_frets: [1, 2, 3, 4, 6, 7],
				avg_fret_val: 3.8333333333333335,
				avg_fret_stddev: 2.1147629234082532,
				avg_fret_steps: [1, 1, 1, 2, 1],
				avg_fret_steps_stddev_smoothness: 0.4,
				combo_score: 2.1585962567415864,
				combo: [
					{
						avg_fret: 0,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 0 }],
					},
					{
						avg_fret: 1,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 1 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 2 }],
					},
					{
						avg_fret: 3,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 3 }],
					},
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 4 }],
					},
					{
						avg_fret: 0,
						fret_span: 0,
						fingering: [{ stringNum: 5, fret: 0 }],
					},
					{
						avg_fret: 6,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 6 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 7 }],
					},
				],
			},
			{
				avg_frets: [1, 2, 3, 4, 5, 1, 2],
				avg_fret_val: 2.5714285714285716,
				avg_fret_stddev: 1.3997084244475304,
				avg_fret_steps: [1, 1, 1, 1, -4, 1],
				avg_fret_steps_stddev_smoothness: 1.863389981249825,
				combo_score: 1.5886188511439416,
				combo: [
					{
						avg_fret: 0,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 0 }],
					},
					{
						avg_fret: 1,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 1 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 2 }],
					},
					{
						avg_fret: 3,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 3 }],
					},
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 4 }],
					},
					{
						avg_fret: 5,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 5 }],
					},
					{
						avg_fret: 1,
						fret_span: 0,
						fingering: [{ stringNum: 5, fret: 1 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [{ stringNum: 5, fret: 2 }],
					},
				],
			},
			{
				avg_frets: [1, 2, 3, 4, 5, 1, 7],
				avg_fret_val: 3.2857142857142856,
				avg_fret_stddev: 2.0503857277724746,
				avg_fret_steps: [1, 1, 1, 1, -4, 6],
				avg_fret_steps_stddev_smoothness: 2.886751345948129,
				combo_score: 2.342346576653002,
				combo: [
					{
						avg_fret: 0,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 0 }],
					},
					{
						avg_fret: 1,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 1 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 2 }],
					},
					{
						avg_fret: 3,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 3 }],
					},
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 4 }],
					},
					{
						avg_fret: 5,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 5 }],
					},
					{
						avg_fret: 1,
						fret_span: 0,
						fingering: [{ stringNum: 5, fret: 1 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 7 }],
					},
				],
			},
			{
				avg_frets: [1, 2, 3, 4, 5, 6, 2],
				avg_fret_val: 3.2857142857142856,
				avg_fret_stddev: 1.665986255670086,
				avg_fret_steps: [1, 1, 1, 1, 1, -4],
				avg_fret_steps_stddev_smoothness: 1.863389981249825,
				combo_score: 1.8556109680807829,
				combo: [
					{
						avg_fret: 0,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 0 }],
					},
					{
						avg_fret: 1,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 1 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 2 }],
					},
					{
						avg_fret: 3,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 3 }],
					},
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 4 }],
					},
					{
						avg_fret: 5,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 5 }],
					},
					{
						avg_fret: 6,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 6 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [{ stringNum: 5, fret: 2 }],
					},
				],
			},
			{
				avg_frets: [1, 2, 3, 4, 5, 6, 7],
				avg_fret_val: 4,
				avg_fret_stddev: 2,
				avg_fret_steps: [1, 1, 1, 1, 1, 1],
				avg_fret_steps_stddev_smoothness: 0,
				combo_score: 2.004,
				combo: [
					{
						avg_fret: 0,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 0 }],
					},
					{
						avg_fret: 1,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 1 }],
					},
					{
						avg_fret: 2,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 2 }],
					},
					{
						avg_fret: 3,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 3 }],
					},
					{
						avg_fret: 4,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 4 }],
					},
					{
						avg_fret: 5,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 5 }],
					},
					{
						avg_fret: 6,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 6 }],
					},
					{
						avg_fret: 7,
						fret_span: 0,
						fingering: [{ stringNum: 6, fret: 7 }],
					},
				],
			},
		];

		expect(
			blockFingeringCombosList.map(
				normalGuitar.calcFingeringOptionCriteria,
				normalGuitar
			)
		).toEqual(blockFingeringOptionsList);
	});
});
