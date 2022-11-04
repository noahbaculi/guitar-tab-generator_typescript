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

describe("Guitar Fingering Calculations", () => {
	it("calculates fingerings correctly with standard tuning, no capo", function () {
		const guitar = new GuitarModule.Guitar();

		expect(guitar.calcPitchFingerings("E2")).toEqual({
			pitch: "E2",
			fingerings: [{ stringNum: 6, fret: 0 }],
		});
		expect(guitar.calcPitchFingerings("G5")).toEqual({
			pitch: "G5",
			fingerings: [{ stringNum: 1, fret: 15 }],
		});
		expect(guitar.calcPitchFingerings("A3")).toEqual({
			pitch: "A3",
			fingerings: [
				{ stringNum: 3, fret: 2 },
				{ stringNum: 4, fret: 7 },
				{ stringNum: 5, fret: 12 },
				{ stringNum: 6, fret: 17 },
			],
		});
		expect(guitar.calcPitchFingerings("A#4")).toEqual({
			pitch: "A#4",
			fingerings: [
				{ stringNum: 1, fret: 6 },
				{ stringNum: 2, fret: 11 },
				{ stringNum: 3, fret: 15 },
			],
		});
	});

	it("calculates fingerings correctly with non-standard tuning, no capo", function () {
		const guitar = new GuitarModule.Guitar("Drop B");

		expect(guitar.tuningName).toEqual("dropb");
		expect(guitar.calcPitchFingerings("E2")).toEqual({
			pitch: "E2",
			fingerings: [{ stringNum: 6, fret: 5 }],
		});
		expect(guitar.calcPitchFingerings("A3")).toEqual({
			pitch: "A3",
			fingerings: [
				{ stringNum: 2, fret: 1 },
				{ stringNum: 3, fret: 5 },
				{ stringNum: 4, fret: 10 },
				{ stringNum: 5, fret: 15 },
			],
		});
		expect(guitar.calcPitchFingerings("A#4")).toEqual({
			pitch: "A#4",
			fingerings: [
				{ stringNum: 1, fret: 9 },
				{ stringNum: 2, fret: 14 },
			],
		});
		expect(() => {
			guitar.calcPitchFingerings("G5");
		}).toThrow("Out of range or invalid pitch");
	});

	it("calculates fingerings correctly with standard tuning, with capo", function () {
		const guitar = new GuitarModule.Guitar("Standard", 4);

		expect(guitar.calcPitchFingerings("A3")).toEqual({
			pitch: "A3",
			fingerings: [
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

describe("Guitar Fingering Lines Calculations", () => {
	it("calculates fingerings lines in correct format", function () {
		const guitar = new GuitarModule.Guitar();

		const input = [["E2"], ["A2", "A3"], "", ["E4", "C#4", "G3", "E3", "A2"]];
		const output = [
			[{ pitch: "E2", fingerings: [{ stringNum: 6, fret: 0 }] }],
			[
				{
					pitch: "A2",
					fingerings: [
						{ stringNum: 5, fret: 0 },
						{ stringNum: 6, fret: 5 },
					],
				},
				{
					pitch: "A3",
					fingerings: [
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
			],
		];

		expect(input.map(guitar.generateLineFingering, guitar)).toEqual(output);
	});
});
