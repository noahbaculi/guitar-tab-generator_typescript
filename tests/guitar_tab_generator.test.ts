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
});

describe("Guitar Fingering Option Criteria Calculation", () => {
	let normalGuitar;
	beforeEach(() => {
		normalGuitar = new GuitarModule.Guitar();
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
				avg_fret_stddev: 2.0548046676563256,
				avg_fret_steps: [3, -5],
				avg_fret_steps_stddev_smoothness: 4,
				combo_score: 2.249324200890693,
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
				avg_fret_stddev: 1.4142135623730951,
				avg_fret_steps: [3, 0],
				avg_fret_steps_stddev_smoothness: 1.5,
				combo_score: 1.4227922061357856,
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
				avg_fret_stddev: 5.557777333511022,
				avg_fret_steps: [3, 10],
				avg_fret_steps_stddev_smoothness: 3.5,
				combo_score: 5.351999600159919,
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
				avg_fret_stddev: 1.247219128924647,
				avg_fret_steps: [3, -1],
				avg_fret_steps_stddev_smoothness: 2,
				combo_score: 1.3224972160321824,
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
				avg_fret_stddev: 4.320493798938574,
				avg_fret_steps: [8, -10],
				avg_fret_steps_stddev_smoothness: 9,
				combo_score: 4.788444419044716,
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
				avg_fret_stddev: 3.2998316455372216,
				avg_fret_steps: [8, -5],
				avg_fret_steps_stddev_smoothness: 6.5,
				combo_score: 3.6198484809834994,
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
				avg_fret_stddev: 5.354126134736337,
				avg_fret_steps: [8, 5],
				avg_fret_steps_stddev_smoothness: 1.5,
				combo_score: 4.968713521262703,
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
				avg_fret_stddev: 3.39934634239519,
				avg_fret_steps: [8, -6],
				avg_fret_steps_stddev_smoothness: 7,
				combo_score: 3.759411708155671,
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
				avg_fret_stddev: 6.18241233033047,
				avg_fret_steps: [12, -14],
				avg_fret_steps_stddev_smoothness: 13,
				combo_score: 6.864171097297423,
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
				avg_fret_stddev: 5.0990195135927845,
				avg_fret_steps: [12, -9],
				avg_fret_steps_stddev_smoothness: 10.5,
				combo_score: 5.639117562233506,
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
				avg_fret_stddev: 5.90668171555645,
				avg_fret_steps: [12, 1],
				avg_fret_steps_stddev_smoothness: 5.5,
				combo_score: 5.866013544000805,
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
				avg_fret_stddev: 5.2493385826745405,
				avg_fret_steps: [12, -10],
				avg_fret_steps_stddev_smoothness: 11,
				combo_score: 5.824404724407087,
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
				avg_fret_stddev: 2.6246692913372702,
				avg_fret_steps: [-1, -5],
				avg_fret_steps_stddev_smoothness: 2,
				combo_score: 2.5622023622035432,
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
				avg_fret_stddev: 0.4714045207910317,
				avg_fret_steps: [-1, 0],
				avg_fret_steps_stddev_smoothness: 0.5,
				combo_score: 0.4742640687119285,
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
				avg_fret_stddev: 4.4969125210773475,
				avg_fret_steps: [-1, 10],
				avg_fret_steps_stddev_smoothness: 5.5,
				combo_score: 4.597221268969613,
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
				avg_fret_stddev: 0.816496580927726,
				avg_fret_steps: [-1, -1],
				avg_fret_steps_stddev_smoothness: 0,
				combo_score: 0.7348469228349535,
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
				avg_fret_stddev: 4.109609335312651,
				avg_fret_steps: [4, -10],
				avg_fret_steps_stddev_smoothness: 7,
				combo_score: 4.3986484017813865,
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
				avg_fret_stddev: 2.160246899469287,
				avg_fret_steps: [4, -5],
				avg_fret_steps_stddev_smoothness: 4.5,
				combo_score: 2.394222209522358,
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
				avg_fret_stddev: 3.681787005729087,
				avg_fret_steps: [4, 5],
				avg_fret_steps_stddev_smoothness: 0.5,
				combo_score: 3.3636083051561783,
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
				avg_fret_stddev: 2.494438257849294,
				avg_fret_steps: [4, -6],
				avg_fret_steps_stddev_smoothness: 5,
				combo_score: 2.744994432064365,
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
				avg_fret_stddev: 5.734883511361751,
				avg_fret_steps: [8, -14],
				avg_fret_steps_stddev_smoothness: 11,
				combo_score: 6.261395160225577,
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
				avg_fret_stddev: 4.027681991198191,
				avg_fret_steps: [8, -9],
				avg_fret_steps_stddev_smoothness: 8.5,
				combo_score: 4.474913792078373,
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
				avg_fret_stddev: 4.027681991198191,
				avg_fret_steps: [8, 1],
				avg_fret_steps_stddev_smoothness: 3.5,
				combo_score: 3.9749137920783726,
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
				avg_fret_stddev: 4.320493798938574,
				avg_fret_steps: [8, -10],
				avg_fret_steps_stddev_smoothness: 9,
				combo_score: 4.788444419044716,
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
				avg_fret_stddev: 4.4969125210773475,
				avg_fret_steps: [-6, -5],
				avg_fret_steps_stddev_smoothness: 0.5,
				combo_score: 4.097221268969613,
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
				avg_fret_stddev: 2.8284271247461903,
				avg_fret_steps: [-6, 0],
				avg_fret_steps_stddev_smoothness: 3,
				combo_score: 2.845584412271571,
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
				avg_fret_stddev: 4.109609335312651,
				avg_fret_steps: [-6, 10],
				avg_fret_steps_stddev_smoothness: 8,
				combo_score: 4.498648401781386,
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
				avg_fret_stddev: 3.0912061651652345,
				avg_fret_steps: [-6, -1],
				avg_fret_steps_stddev_smoothness: 2.5,
				combo_score: 3.0320855486487113,
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
				avg_fret_stddev: 4.96655480858378,
				avg_fret_steps: [-1, -10],
				avg_fret_steps_stddev_smoothness: 4.5,
				combo_score: 4.919899327725402,
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
				avg_fret_stddev: 2.6246692913372702,
				avg_fret_steps: [-1, -5],
				avg_fret_steps_stddev_smoothness: 2,
				combo_score: 2.5622023622035432,
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
				avg_fret_stddev: 2.160246899469287,
				avg_fret_steps: [-1, 5],
				avg_fret_steps_stddev_smoothness: 3,
				combo_score: 2.2442222095223583,
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
				avg_fret_stddev: 3.0912061651652345,
				avg_fret_steps: [-1, -6],
				avg_fret_steps_stddev_smoothness: 2.5,
				combo_score: 3.0320855486487113,
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
				avg_fret_stddev: 6.018490028422596,
				avg_fret_steps: [3, -14],
				avg_fret_steps_stddev_smoothness: 8.5,
				combo_score: 6.266641025580336,
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
				avg_fret_stddev: 3.7416573867739413,
				avg_fret_steps: [3, -9],
				avg_fret_steps_stddev_smoothness: 6,
				combo_score: 3.9674916480965474,
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
				avg_fret_stddev: 1.699673171197595,
				avg_fret_steps: [3, 1],
				avg_fret_steps_stddev_smoothness: 1,
				combo_score: 1.6297058540778355,
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
				avg_fret_stddev: 4.189935029992179,
				avg_fret_steps: [3, -10],
				avg_fret_steps_stddev_smoothness: 6.5,
				combo_score: 4.420941526992961,
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
				avg_fret_stddev: 2.0548046676563256,
				avg_fret_steps: [3, -5],
				avg_fret_steps_stddev_smoothness: 4,
				combo_score: 2.249324200890693,
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
				avg_fret_stddev: 1.4142135623730951,
				avg_fret_steps: [3, 0],
				avg_fret_steps_stddev_smoothness: 1.5,
				combo_score: 1.4227922061357856,
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
				avg_fret_stddev: 5.557777333511022,
				avg_fret_steps: [3, 10],
				avg_fret_steps_stddev_smoothness: 3.5,
				combo_score: 5.351999600159919,
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
				avg_fret_stddev: 1.247219128924647,
				avg_fret_steps: [3, -1],
				avg_fret_steps_stddev_smoothness: 2,
				combo_score: 1.3224972160321824,
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
				avg_fret_stddev: 4.320493798938574,
				avg_fret_steps: [8, -10],
				avg_fret_steps_stddev_smoothness: 9,
				combo_score: 4.788444419044716,
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
				avg_fret_stddev: 3.2998316455372216,
				avg_fret_steps: [8, -5],
				avg_fret_steps_stddev_smoothness: 6.5,
				combo_score: 3.6198484809834994,
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
				avg_fret_stddev: 5.354126134736337,
				avg_fret_steps: [8, 5],
				avg_fret_steps_stddev_smoothness: 1.5,
				combo_score: 4.968713521262703,
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
				avg_fret_stddev: 3.39934634239519,
				avg_fret_steps: [8, -6],
				avg_fret_steps_stddev_smoothness: 7,
				combo_score: 3.759411708155671,
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
				avg_fret_stddev: 6.18241233033047,
				avg_fret_steps: [12, -14],
				avg_fret_steps_stddev_smoothness: 13,
				combo_score: 6.864171097297423,
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
				avg_fret_stddev: 5.0990195135927845,
				avg_fret_steps: [12, -9],
				avg_fret_steps_stddev_smoothness: 10.5,
				combo_score: 5.639117562233506,
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
				avg_fret_stddev: 5.90668171555645,
				avg_fret_steps: [12, 1],
				avg_fret_steps_stddev_smoothness: 5.5,
				combo_score: 5.866013544000805,
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
				avg_fret_stddev: 5.2493385826745405,
				avg_fret_steps: [12, -10],
				avg_fret_steps_stddev_smoothness: 11,
				combo_score: 5.824404724407087,
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
				avg_fret_stddev: 2.6246692913372702,
				avg_fret_steps: [-1, -5],
				avg_fret_steps_stddev_smoothness: 2,
				combo_score: 2.5622023622035432,
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
				avg_fret_stddev: 0.4714045207910317,
				avg_fret_steps: [-1, 0],
				avg_fret_steps_stddev_smoothness: 0.5,
				combo_score: 0.4742640687119285,
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
				avg_fret_stddev: 4.4969125210773475,
				avg_fret_steps: [-1, 10],
				avg_fret_steps_stddev_smoothness: 5.5,
				combo_score: 4.597221268969613,
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
				avg_fret_stddev: 0.816496580927726,
				avg_fret_steps: [-1, -1],
				avg_fret_steps_stddev_smoothness: 0,
				combo_score: 0.7348469228349535,
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
				avg_fret_stddev: 4.109609335312651,
				avg_fret_steps: [4, -10],
				avg_fret_steps_stddev_smoothness: 7,
				combo_score: 4.3986484017813865,
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
				avg_fret_stddev: 2.160246899469287,
				avg_fret_steps: [4, -5],
				avg_fret_steps_stddev_smoothness: 4.5,
				combo_score: 2.394222209522358,
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
				avg_fret_stddev: 3.681787005729087,
				avg_fret_steps: [4, 5],
				avg_fret_steps_stddev_smoothness: 0.5,
				combo_score: 3.3636083051561783,
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
				avg_fret_stddev: 2.494438257849294,
				avg_fret_steps: [4, -6],
				avg_fret_steps_stddev_smoothness: 5,
				combo_score: 2.744994432064365,
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
				avg_fret_stddev: 5.734883511361751,
				avg_fret_steps: [8, -14],
				avg_fret_steps_stddev_smoothness: 11,
				combo_score: 6.261395160225577,
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
				avg_fret_stddev: 4.027681991198191,
				avg_fret_steps: [8, -9],
				avg_fret_steps_stddev_smoothness: 8.5,
				combo_score: 4.474913792078373,
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
				avg_fret_stddev: 4.027681991198191,
				avg_fret_steps: [8, 1],
				avg_fret_steps_stddev_smoothness: 3.5,
				combo_score: 3.9749137920783726,
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
				avg_fret_stddev: 4.320493798938574,
				avg_fret_steps: [8, -10],
				avg_fret_steps_stddev_smoothness: 9,
				combo_score: 4.788444419044716,
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
				avg_fret_stddev: 4.4969125210773475,
				avg_fret_steps: [-6, -5],
				avg_fret_steps_stddev_smoothness: 0.5,
				combo_score: 4.097221268969613,
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
				avg_fret_stddev: 2.8284271247461903,
				avg_fret_steps: [-6, 0],
				avg_fret_steps_stddev_smoothness: 3,
				combo_score: 2.845584412271571,
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
				avg_fret_stddev: 4.109609335312651,
				avg_fret_steps: [-6, 10],
				avg_fret_steps_stddev_smoothness: 8,
				combo_score: 4.498648401781386,
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
				avg_fret_stddev: 3.0912061651652345,
				avg_fret_steps: [-6, -1],
				avg_fret_steps_stddev_smoothness: 2.5,
				combo_score: 3.0320855486487113,
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
				avg_fret_stddev: 4.96655480858378,
				avg_fret_steps: [-1, -10],
				avg_fret_steps_stddev_smoothness: 4.5,
				combo_score: 4.919899327725402,
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
				avg_fret_stddev: 2.6246692913372702,
				avg_fret_steps: [-1, -5],
				avg_fret_steps_stddev_smoothness: 2,
				combo_score: 2.5622023622035432,
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
				avg_fret_stddev: 2.160246899469287,
				avg_fret_steps: [-1, 5],
				avg_fret_steps_stddev_smoothness: 3,
				combo_score: 2.2442222095223583,
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
				avg_fret_stddev: 3.0912061651652345,
				avg_fret_steps: [-1, -6],
				avg_fret_steps_stddev_smoothness: 2.5,
				combo_score: 3.0320855486487113,
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
				avg_fret_stddev: 6.018490028422596,
				avg_fret_steps: [3, -14],
				avg_fret_steps_stddev_smoothness: 8.5,
				combo_score: 6.266641025580336,
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
				avg_fret_stddev: 3.7416573867739413,
				avg_fret_steps: [3, -9],
				avg_fret_steps_stddev_smoothness: 6,
				combo_score: 3.9674916480965474,
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
				avg_fret_stddev: 1.699673171197595,
				avg_fret_steps: [3, 1],
				avg_fret_steps_stddev_smoothness: 1,
				combo_score: 1.6297058540778355,
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
				avg_fret_stddev: 4.189935029992179,
				avg_fret_steps: [3, -10],
				avg_fret_steps_stddev_smoothness: 6.5,
				combo_score: 4.420941526992961,
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
});
