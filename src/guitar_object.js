var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Guitar_instances, _Guitar_generateChordPitches, _a;
const util = require("util");
/**
 * Console Log objects to full depth
 * @param objs Objects to print
 */
function print(...objs) {
    for (const obj of objs) {
        console.log(util.inspect(obj, { showHidden: false, depth: null, colors: true }));
    }
}
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
function createTuning(string6TuningAdj, string5TuningAdj, string4TuningAdj, string3TuningAdj, string2TuningAdj, string1TuningAdj) {
    return {
        1: string1TuningAdj,
        2: string2TuningAdj,
        3: string3TuningAdj,
        4: string4TuningAdj,
        5: string5TuningAdj,
        6: string6TuningAdj,
    };
}
/**
 * Guitar object
 */
exports.Guitar = (_a = class Guitar {
        constructor(tuningName, capo) {
            _Guitar_instances.add(this);
            this.guitarRangeTotal = [
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
            this.strings = {
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
            // chords
            this.tuningName = "standard";
            this.capo = 0;
            this.numFrets = 18;
            this.chordPitchesMap = __classPrivateFieldGet(this, _Guitar_instances, "m", _Guitar_generateChordPitches).call(this);
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
            const tuning = tunings[this.tuningName];
            for (const stringNum in this.strings) {
                const tuningAdj = tuning[stringNum];
                // Tune down
                if (tuningAdj < 0) {
                    const lowNotePos = this.guitarRangeTotal.indexOf(this.strings[stringNum].at(0));
                    const newNotes = this.guitarRangeTotal.slice(lowNotePos + tuningAdj, lowNotePos);
                    // Insert new notes
                    this.strings[stringNum] = newNotes.concat(this.strings[stringNum]);
                    // Remove old notes
                    this.strings[stringNum] = this.strings[stringNum].slice(0, tuningAdj);
                }
                // Tune up
                else if (tuningAdj > 0) {
                    const highNotePos = this.guitarRangeTotal.indexOf(this.strings[stringNum].at(-1));
                    const newNotes = this.guitarRangeTotal.slice(highNotePos + 1, highNotePos + tuningAdj + 1);
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
        calcChordPitches(tabFingeringList, chordTabStringNums) {
            const zip = (a, b) => Array.from(Array(Math.max(b.length, a.length)), (_, i) => [a[i], b[i]]);
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
         * @returns Empty List
         */
        generateTab(inputPitchString) {
            const pitchLines = this.validateInput(inputPitchString);
            const fingeringLines = this.generateLineFingerings(pitchLines);
            // TODO implement multi pitch combiner and optimizer
            this.createFingeringOptions(fingeringLines);
            return [];
        }
        validateInput(inputPitchString) {
            let pitchLines = [];
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
                inputPitchString = inputPitchString.replace(replace, flatsToSharps[flatString]);
            }
            // Validate lines of pitches against of Guitar's pitchRange
            let errorStrings = [];
            const inputPitchLines = inputPitchString.split("\n");
            for (const [lineNum, inputPitchLineOrig] of inputPitchLines.entries()) {
                let inputPitchLine = inputPitchLineOrig;
                inputPitchLine = inputPitchLine.replace(/\s/g, "");
                if (inputPitchLine === "") {
                    pitchLines.push("");
                    continue;
                }
                let linePitches = [];
                while (inputPitchLine !== "") {
                    const pitchCombos = this.getStringCombinations(inputPitchLine);
                    const matchingChords = Object.keys(this.chordPitchesMap).filter((value) => pitchCombos.includes(value));
                    if (matchingChords && matchingChords.length) {
                        linePitches = this.chordPitchesMap[matchingChords.at(0)];
                        break;
                    }
                    for (const [i, linePitchCombo] of pitchCombos.entries()) {
                        if (this.pitchRange.has(linePitchCombo)) {
                            inputPitchLine = inputPitchLine.replace(linePitchCombo, "");
                            // Add to the pitches in the line if not already present
                            if (!linePitches.includes(linePitchCombo)) {
                                linePitches.push(linePitchCombo);
                            }
                            break;
                        }
                        if (i === pitchCombos.length - 1) {
                            errorStrings.push(`Line ${lineNum} - '${inputPitchLine}' in '${inputPitchLineOrig}'`);
                            inputPitchLine = "";
                        }
                    }
                }
                pitchLines.push(linePitches);
            }
            // Throw aggregated invalid pitch error
            if (errorStrings.length > 0) {
                throw new Error(`Out of range or invalid pitches:\n${errorStrings.join("\n")}`);
            }
            return pitchLines;
        }
        generateLineFingerings(pitchLines) {
            let pitchLineFingerings = [];
            for (const linePitches of pitchLines) {
                if (linePitches === "") {
                    pitchLineFingerings.push("break");
                    continue;
                }
                let linePitchIndivFingerings = [];
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
        calcPitchFingerings(pitch) {
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
        getStringCombinations(inputString) {
            let list_of_strings = [];
            for (let i = 0; i < inputString.length; i++) {
                for (let j = i + 1; j < inputString.length + 1; j++) {
                    list_of_strings.push(inputString.slice(i, j));
                }
            }
            return list_of_strings;
        }
        createFingeringOptions(fingeringLines) {
            // let fingeringOptions: {
            // 	pitches: PitchName[];
            // 	fingerings: [];
            // };
            for (const fingeringLine of fingeringLines) {
                if (fingeringLine === "break") {
                    continue;
                }
                // let linePitchFingerings = [];
                // const linePitchFingerings = fingeringLine.map(
                // 	({ fingerings }): Fingering => fingerings
                // );
                const linePitchFingerings = fingeringLine.map((a) => a.fingerings);
                console.log("linePitchFingerings : ", linePitchFingerings);
                // for (const linePitchFingering of linePitchFingerings) {
                // 	console.log("linePitchFingering : ", linePitchFingering);
                // }
                // * Working!!!
                // const f = (a, b) =>
                // 	[].concat(...a.map((d) => b.map((e) => [].concat(d, e))));
                // const cartesian = (a: any[], b: any[], ...c: any[]) =>
                // 	b ? cartesian(f(a, b), ...c) : a;
                // // console.log(cartesian([1, 2], [10, 20], [100, 200, 300], [1000]));
                // console.log(cartesian(...linePitchFingerings));
                // const expectedOut = [
                // 	[
                // 		{ stringNum: 5, fret: 0 },
                // 		{ stringNum: 3, fret: 2 },
                // 	],
                // 	[
                // 		{ stringNum: 5, fret: 0 },
                // 		{ stringNum: 4, fret: 7 },
                // 	],
                // 	[
                // 		{ stringNum: 5, fret: 0 },
                // 		{ stringNum: 5, fret: 12 },
                // 	],
                // 	[
                // 		{ stringNum: 5, fret: 0 },
                // 		{ stringNum: 6, fret: 17 },
                // 	],
                // 	[
                // 		{ stringNum: 6, fret: 5 },
                // 		{ stringNum: 3, fret: 2 },
                // 	],
                // 	[
                // 		{ stringNum: 6, fret: 5 },
                // 		{ stringNum: 4, fret: 7 },
                // 	],
                // 	[
                // 		{ stringNum: 6, fret: 5 },
                // 		{ stringNum: 5, fret: 12 },
                // 	],
                // 	[
                // 		{ stringNum: 6, fret: 5 },
                // 		{ stringNum: 6, fret: 17 },
                // 	],
                // ];
                const cartesian = (...a) => a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
                // console.log(cartesian([1, 2], [10, 20], [100, 200, 300], [1000]));
                console.log(cartesian(...linePitchFingerings));
                // for (const linePitch of fingeringLine) {
                // 	console.log("linePitch : ", linePitch);
                // 	const linePitchFingering = linePitch.fingerings;
                // 	console.log("linePitchFingering : ", linePitchFingering);
                // 	// linePitch.map(({ email }) => email);
                // 	linePitchFingerings.push(linePitchFingering);
                // 	console.log("---");
                // }
                // for (const [stringNum, fretNum] of linePitchFingerings) {
                // 	console.log(stringNum, fretNum);
                // }
                break;
            }
            // TODO wtf is going on here??
            function getStringCombinations(inputString) {
                let list_of_strings = [];
                // * loop through first set of guitar pitches
                for (let i = 0; i < inputString.length; i++) {
                    for (let j = i + 1; j < inputString.length + 1; j++) {
                        // ! something isn't working here
                        list_of_strings.push(inputString.slice(i, j));
                        // ? try parallelization
                    }
                }
                return list_of_strings;
            }
        }
    },
    _Guitar_instances = new WeakSet(),
    _Guitar_generateChordPitches = function _Guitar_generateChordPitches() {
        // Chord tabs in string order from 6 to 1 (EADGBe)
        const chordTabStringNums = [..."654321"];
        // TODO add more chords like sharp chords
        const chordStandardTuningTabMap = {
            ACHORD: "-02220",
            AMAJ7CHORD: "-02120",
            A7CHORD: "-02020",
            AMCHORD: "-02210",
            AM7CHORD: "-02010",
            BCHORD: "--4442",
            BMAJ7CHORD: "22130-",
            B7CHORD: "-21202",
            BMCHORD: "--4432",
            BM7CHORD: "-20202",
            CCHORD: "-32010",
            CMAJ7CHORD: "-32000",
            C7CHORD: "-32310",
            CMCHORD: "-310--",
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
            FMCHORD: "--3111",
            FM7CHORD: "131111",
            GCHORD: "320003",
            GMAJ7CHORD: "3-0002",
            G7CHORD: "320001",
            GMCHORD: "--0333",
            GM7CHORD: "-13030",
        };
        let chordPitchesMap = {};
        for (const [chordName, chordTab] of Object.entries(chordStandardTuningTabMap)) {
            chordPitchesMap[chordName] = this.calcChordPitches([...chordTab], chordTabStringNums);
        }
        return chordPitchesMap;
    },
    _a);
