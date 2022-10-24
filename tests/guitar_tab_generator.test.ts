// import { yoyo } from "../src/guitar_tab_generator";
// const TabModule = require("../src/guitar_tab_generator.ts");
const GuitarModule = require("../src/guitar_object.ts");

describe("Guitar Object", () => {
	it("has default properties", function () {
		const guitar = new GuitarModule.Guitar();

		expect(guitar.tuning_name).toEqual("standard");
		expect(guitar.capo).toEqual(0);
		expect(guitar.strings.e).toEqual([
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
		expect(guitar.strings.B).toEqual([
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
		expect(guitar.strings.G).toEqual([
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
		expect(guitar.strings.D).toEqual([
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
		expect(guitar.strings.A).toEqual([
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
		expect(guitar.strings.E).toEqual([
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
		expect(guitar.tuning_name).toEqual("standard");
		expect(guitar.capo).toEqual(0);

		guitar = new GuitarModule.Guitar("lorem ipsum", 15);
		expect(guitar.tuning_name).toEqual("standard");
		expect(guitar.capo).toEqual(0);
	});

	it("handles capo input", function () {
		const guitar = new GuitarModule.Guitar("Standard", 3);
		expect(guitar.tuning_name).toEqual("standard");
		expect(guitar.capo).toEqual(3);

		expect(guitar.strings.e).toEqual([
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
		expect(guitar.strings.B).toEqual([
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
		expect(guitar.strings.G).toEqual([
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
		expect(guitar.strings.D).toEqual([
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
		expect(guitar.strings.A).toEqual([
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
		expect(guitar.strings.E).toEqual([
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

		expect(guitar.tuning_name).toEqual("openg");
		expect(guitar.strings.e).toEqual([
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
		expect(guitar.strings.B).toEqual([
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
		expect(guitar.strings.G).toEqual([
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
		expect(guitar.strings.D).toEqual([
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
		expect(guitar.strings.A).toEqual([
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
		expect(guitar.strings.E).toEqual([
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
		expect(guitar.tuning_name).toEqual("opend");

		expect(guitar.strings.e[0]).toEqual("D4");
		expect(guitar.strings.B[0]).toEqual("A3");
		expect(guitar.strings.G[0]).toEqual("F#3");
		expect(guitar.strings.D[0]).toEqual("D3");
		expect(guitar.strings.A[0]).toEqual("A2");
		expect(guitar.strings.E[0]).toEqual("D2");
	});

	it("handles C6 tuning", function () {
		const guitar = new GuitarModule.Guitar("C6");
		expect(guitar.tuning_name).toEqual("c6");

		expect(guitar.strings.e[0]).toEqual("E4");
		expect(guitar.strings.B[0]).toEqual("C4");
		expect(guitar.strings.G[0]).toEqual("G3");
		expect(guitar.strings.D[0]).toEqual("C3");
		expect(guitar.strings.A[0]).toEqual("A2");
		expect(guitar.strings.E[0]).toEqual("C2");
	});

	it("handles Dsus4 tuning", function () {
		const guitar = new GuitarModule.Guitar("Dsus4");
		expect(guitar.tuning_name).toEqual("dsus4");

		expect(guitar.strings.e[0]).toEqual("D4");
		expect(guitar.strings.B[0]).toEqual("A3");
		expect(guitar.strings.G[0]).toEqual("G3");
		expect(guitar.strings.D[0]).toEqual("D3");
		expect(guitar.strings.A[0]).toEqual("A2");
		expect(guitar.strings.E[0]).toEqual("D2");
	});

	it("handles Drop D tuning", function () {
		const guitar = new GuitarModule.Guitar("Drop D");
		expect(guitar.tuning_name).toEqual("dropd");

		expect(guitar.strings.e[0]).toEqual("E4");
		expect(guitar.strings.B[0]).toEqual("B3");
		expect(guitar.strings.G[0]).toEqual("G3");
		expect(guitar.strings.D[0]).toEqual("D3");
		expect(guitar.strings.A[0]).toEqual("A2");
		expect(guitar.strings.E[0]).toEqual("D2");
	});

	it("handles Drop C tuning", function () {
		const guitar = new GuitarModule.Guitar("Drop C");
		expect(guitar.tuning_name).toEqual("dropc");

		expect(guitar.strings.e[0]).toEqual("D4");
		expect(guitar.strings.B[0]).toEqual("A3");
		expect(guitar.strings.G[0]).toEqual("F3");
		expect(guitar.strings.D[0]).toEqual("C3");
		expect(guitar.strings.A[0]).toEqual("G2");
		expect(guitar.strings.E[0]).toEqual("C2");
	});

	it("handles Open C tuning", function () {
		const guitar = new GuitarModule.Guitar("Open C");
		expect(guitar.tuning_name).toEqual("openc");

		expect(guitar.strings.e[0]).toEqual("E4");
		expect(guitar.strings.B[0]).toEqual("C4");
		expect(guitar.strings.G[0]).toEqual("G3");
		expect(guitar.strings.D[0]).toEqual("C3");
		expect(guitar.strings.A[0]).toEqual("G2");
		expect(guitar.strings.E[0]).toEqual("C2");
	});

	it("handles Drop B tuning", function () {
		const guitar = new GuitarModule.Guitar("Drop B");
		expect(guitar.tuning_name).toEqual("dropb");

		expect(guitar.strings.e[0]).toEqual("C#4");
		expect(guitar.strings.B[0]).toEqual("G#3");
		expect(guitar.strings.G[0]).toEqual("E3");
		expect(guitar.strings.D[0]).toEqual("B2");
		expect(guitar.strings.A[0]).toEqual("F#2");
		expect(guitar.strings.E[0]).toEqual("B1");
	});

	it("handles Open E tuning", function () {
		const guitar = new GuitarModule.Guitar("Open E");
		expect(guitar.tuning_name).toEqual("opene");

		expect(guitar.strings.e[0]).toEqual("E4");
		expect(guitar.strings.B[0]).toEqual("B3");
		expect(guitar.strings.G[0]).toEqual("F3");
		expect(guitar.strings.D[0]).toEqual("C3");
		expect(guitar.strings.A[0]).toEqual("G2");
		expect(guitar.strings.E[0]).toEqual("E2");
	});
});
