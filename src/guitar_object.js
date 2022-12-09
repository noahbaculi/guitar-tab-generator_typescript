var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Guitar_instances, _Guitar_generateChordPitches, _a;
/**
 * Console Log objects to full depth
 * @param objs Objects to print
 */
function print(...objs) {
    for (const obj of objs) {
        console.dir(obj, { depth: null });
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
        const calcChordPitches = (tabFingeringList, chordTabStringNums) => {
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
        };
        let chordPitchesMap = {};
        for (const [chordName, chordTab] of Object.entries(chordStandardTuningTabMap)) {
            chordPitchesMap[chordName] = calcChordPitches([...chordTab], chordTabStringNums);
        }
        return chordPitchesMap;
    },
    _a);
exports.Arrangement = class Arrangement {
    /**
     * Class to generate a set of TAB fingerings for a guitar object
     * @param inputPitchString
     */
    constructor(guitar, inputPitchString) {
        // TODO cache values with memoization for efficiency improvements
        /**
         * Create fingerings for a given pitch
         */
        this.calcPitchFingerings = (pitch) => {
            let fingerings = [];
            for (const [stringNumKey, stringVals] of Object.entries(this.guitarStrings)) {
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
        this.calcAverage = (items, excludeZero = false) => {
            if (excludeZero === true) {
                items = items.filter((x) => x !== 0);
            }
            if (items.length === 0) {
                return 0;
            }
            return items.reduce((a, b) => a + b) / items.length;
        };
        /**
         * Calculate the selection criteria and score for a fingering option combination
         */
        this.calcFingeringOptionCriteria = (combo) => {
            const avgFrets = combo.map((x) => x.avg_fret).filter((a) => a !== 0);
            const avgFretsVal = this.calcAverage(avgFrets);
            /**
             * Calculate the standard deviation of an array
             */
            const calcStdDev = (arr) => {
                if (arr.length === 0) {
                    return 0;
                }
                const len = arr.length;
                const mean = arr.reduce((a, b) => a + b) / len;
                const variance = arr.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / len;
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
            const calcDiffs = (arr) => {
                return arr.slice(1).map((val, index) => val - arr[index]);
            };
            const avgFretDiffs = calcDiffs(avgFrets);
            const avgFretSmoothness = calcStdDev(avgFretDiffs); // lower is smoother
            // Percentage weightings are arbitrary. Main contributor is
            // still the dispersion of the average frets (StdDec).
            // The smoothness component is mostly meant to distinguish
            // fingering options with the same average fret dispersions.
            // The average fret value is included to preference lower fret values.
            const score = avgFretStdDev + 0.1 * avgFretSmoothness + 0.001 * avgFretsVal;
            return {
                avg_frets: avgFrets,
                avg_fret_val: avgFretsVal,
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
        this.cartesian = (arr) => {
            // Return list of each element if only one list is received
            if (arr.length === 1) {
                return arr.flat().map((a) => [a]);
            }
            return arr.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
        };
        this.guitarStrings = guitar.strings;
        const guitarChordPitchesMap = guitar.chordPitchesMap;
        const guitarPitchRange = guitar.pitchRange;
        this.pitchLines = this.validateInput(inputPitchString, guitarChordPitchesMap, guitarPitchRange);
        this.linePitchFingerings = this.pitchLines.map(this.genPitchFingering, this);
        const maxFretSpan = 4;
        this.lineFingeringOptions = this.linePitchFingerings.map((x) => this.genLineFingeringOptions(x, maxFretSpan), this);
        this.bestFingerings = this.optimizeFingerings(this.lineFingeringOptions);
    }
    // TODO add comment support for input strings
    validateInput(inputPitchString, chordPitchesMap, pitchRange) {
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
                /**
                 * Function to get combinations of substrings from string
                 */
                const getStringCombinations = (inputString) => {
                    let list_of_substrings = [];
                    for (let i = 0; i < inputString.length; i++) {
                        for (let j = i + 1; j < inputString.length + 1; j++) {
                            list_of_substrings.push(inputString.slice(i, j));
                        }
                    }
                    return list_of_substrings;
                };
                const pitchCombos = getStringCombinations(inputPitchLine);
                const matchingChords = Object.keys(chordPitchesMap).filter((value) => pitchCombos.includes(value));
                if (matchingChords && matchingChords.length) {
                    linePitches = chordPitchesMap[matchingChords.at(0)];
                    break;
                }
                for (const [i, linePitchCombo] of pitchCombos.entries()) {
                    if (pitchRange.has(linePitchCombo)) {
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
    /**
     * Generate the fingerings for the pitches on the same line/beat
     */
    genPitchFingering(linePitches) {
        if (linePitches === "") {
            return "break";
        }
        let linePitchIndivFingerings = [];
        for (const pitchName of linePitches) {
            const pitchFingerings = this.calcPitchFingerings(pitchName);
            linePitchIndivFingerings.push(pitchFingerings);
        }
        return linePitchIndivFingerings;
    }
    /**
     * Generate fingering options from each line fingerings
     */
    genLineFingeringOptions(fingeringLine, maxFretSpan) {
        if (fingeringLine === "break") {
            return "break";
        }
        const linePitches = fingeringLine.map((a) => a.pitch);
        const linePitchFingeringOptions = fingeringLine.map((a) => a.fingeringOptions);
        // Calculate list of combinations
        let lineFingeringCombosList = this.cartesian(linePitchFingeringOptions);
        const lineFingeringCombos = new Set(lineFingeringCombosList);
        const calcRange = (items, excludeZero = false) => {
            if (excludeZero === true) {
                items = items.filter((x) => x !== 0);
            }
            if (items.length === 0) {
                return 0;
            }
            return Math.max(...items) - Math.min(...items);
        };
        let lineFingeringOptions = [...lineFingeringCombos].reduce((result, lineFingeringCombo) => {
            // Do not include fingering combos with overlapping strings numbers
            const numPitches = lineFingeringCombo.length;
            const uniqueStringNums = new Set(lineFingeringCombo.map((a) => a.stringNum));
            if (uniqueStringNums.size !== numPitches) {
                if (lineFingeringCombos.size === 1) {
                    const errOutputCombo = JSON.stringify(lineFingeringCombo);
                    const errOutput = `Fingerings for the pitches ${linePitches} is an impossible combination of ${errOutputCombo}.'`;
                    throw new Error(errOutput);
                }
                else {
                    return result;
                }
            }
            const output = {
                pitches: linePitches,
                avg_fret: this.calcAverage(lineFingeringCombo.map((a) => a.fret), true),
                fret_span: calcRange(lineFingeringCombo.map((a) => a.fret), true),
                fingering: lineFingeringCombo,
            };
            result.push(output);
            return result;
        }, []);
        // Remove fingering options with the highest fret spans over the max while
        // fingering options with low fret spans exist
        let fretSpans = lineFingeringOptions.map((a) => a.fret_span);
        let biggestFretSpan = Math.max(...fretSpans);
        while (lineFingeringOptions.length > 1 && biggestFretSpan > maxFretSpan) {
            fretSpans = lineFingeringOptions.map((a) => a.fret_span);
            biggestFretSpan = Math.max(...fretSpans);
            const maxFretSpanFingeringIndex = fretSpans.indexOf(biggestFretSpan);
            lineFingeringOptions.splice(maxFretSpanFingeringIndex, 1);
        }
        return lineFingeringOptions;
    }
    optimizeFingerings(lineFingeringOptions) {
        const splitArrayOn = (arr, delimiter, limit = 100) => {
            let sublists = [];
            let count = 0;
            while (arr.includes(delimiter)) {
                count++;
                if (count > limit) {
                    throw new Error(`Array split delimiter limit reached.`);
                }
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
        const lineFingeringOptionsBlocks = splitArrayOn(lineFingeringOptions, "break");
        // TODO Investigate progressive calculation technique where a block
        // TODO would move for each beat consideration to include previously chosen
        // TODO fingerings but also future fingering options
        // Calculate the most optimal fingering option for each block
        const bestFingeringOptionBlocks = lineFingeringOptionsBlocks.map((lineFingeringOptionsBlock) => {
            // Check for excessive block size to avoid exponential memory
            // usage from cartesian()
            let lineFingeringOptionsSubBlocks = [lineFingeringOptionsBlock];
            if (lineFingeringOptionsBlock.length > 8) {
                /**
                 * Split array into array of arrays of a specified chunk size
                 */
                const chunkArray = (array, chunkSize) => {
                    const numberOfChunks = Math.ceil(array.length / chunkSize);
                    return [...Array(numberOfChunks)].map((_, index) => {
                        return array.slice(index * chunkSize, (index + 1) * chunkSize);
                    });
                };
                lineFingeringOptionsSubBlocks = chunkArray(lineFingeringOptionsBlock, 8);
            }
            const bestSubBlockOptionFingerings = lineFingeringOptionsSubBlocks.map((lineFingeringOptionsSubBlock) => {
                // Calculate list of combinations
                const blockFingeringCombosList = this.cartesian(lineFingeringOptionsSubBlock);
                // Calculate block combo selection criteria and score
                const blockFingeringOptionsList = blockFingeringCombosList.map(this.calcFingeringOptionCriteria);
                // Find option with the lowest score. Could combine with the
                // calculation step to lower memory footprint but combining would
                // impede debuggability
                const bestBlockOption = blockFingeringOptionsList.reduce((lowest, current) => lowest.combo_score < current.combo_score ? lowest : current);
                return bestBlockOption.combo;
            });
            const bestSubBlockOptionFingering = [].concat(...bestSubBlockOptionFingerings.flat());
            return bestSubBlockOptionFingering;
        });
        const convertFingeringObjectToMap = (lineFingerings) => {
            const defaultLineFingering = new Map([
                [1, null],
                [2, null],
                [3, null],
                [4, null],
                [5, null],
                [6, null],
            ]);
            return lineFingerings.reduce((map, stringDatum) => map.set(stringDatum.stringNum, stringDatum.fret), defaultLineFingering);
        };
        const bestFingeringBlocks = bestFingeringOptionBlocks.map((fingeringOptions) => fingeringOptions.map((fingeringOption) => {
            return new Map([
                ["pitches", fingeringOption.pitches],
                ["stringToFretFingering", convertFingeringObjectToMap(fingeringOption.fingering)],
            ]);
        }));
        // Add back measure breaks and flatten
        const interleave = (arr, delimiter) => [].concat(...arr.map((n) => [n, delimiter])).slice(0, -1);
        const bestFingerings = interleave(bestFingeringBlocks, "break").flat();
        return bestFingerings;
    }
};
