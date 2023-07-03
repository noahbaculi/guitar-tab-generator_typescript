# guitar-tab-generator_typescript

October 2022

Guitar tab generator from note names considering difficulty of different finger positions.

Old version:
- [Java](https://github.com/noahbaculi/guitar-tab-generator_java) (2022)

New version:
- [Rust](https://github.com/noahbaculi/guitar-tab-generator) (2023 - )

## Terminal Commands
```shell
# Start TypeScript compiler watcher
tsc

# Start test suite watcher
npm test

# Run script
node ./src/index.ts
```

## Algorithm

### `Input`

String of pitches and chords for where the pitches or chord for each beat is separated by line breaks. Measure breaks are indicated by an empty line.

<details open style="margin-bottom: 2em;">
<summary>Example</summary>

```typescript
Eb4
B4
A2A3

F2B4

Em chord
```

</details>

### `pitchLines <- validateInput()`
Perform the following standardizations to the input string:

- Replace flat pitches with equivalent sharp pitches.
- Convert string to upper case.
- Check that all lines are composed of supported chords or pitches in the range
  of the `Guitar` tuning and capo.
- Convert chords to their composite pitches to allow for alternate tunings.

<details open style="margin-bottom: 2em;">
<summary>Example</summary>

```typescript
[
  [ 'D#4' ],
  [ 'B4' ],
  [ 'A2', 'A3' ],
  '',
  [ 'F2', 'B4' ],
  '',
  [ 'E4', 'B3', 'G3', 'E3', 'B2', 'E2' ]
]
```

</details>

### `linePitchFingerings <- genPitchFingering()`

Generate the fingerings for the individual pitches for each line/beat.

<details open style="margin-bottom: 2em;">
<summary>Example</summary>

```typescript
[
  [
    {
      pitch: 'D#4',
      fingeringOptions: [
        { stringNum: 2, fret: 4 },
        { stringNum: 3, fret: 8 },
        { stringNum: 4, fret: 13 }
      ]
    }
  ],
  [
    {
      pitch: 'B4',
      fingeringOptions: [
        { stringNum: 1, fret: 7 },
        { stringNum: 2, fret: 12 },
        { stringNum: 3, fret: 16 }
      ]
    }
  ],
  [
    {
      pitch: 'A2',
      fingeringOptions: [
        { stringNum: 5, fret: 0 },
        { stringNum: 6, fret: 5 }
      ]
    },
    {
      pitch: 'A3',
      fingeringOptions: [
        { stringNum: 3, fret: 2 },
        { stringNum: 4, fret: 7 },
        { stringNum: 5, fret: 12 },
        { stringNum: 6, fret: 17 }
      ]
    }
  ],
  'break',
  [
    { pitch: 'F2',
      fingeringOptions: [
        { stringNum: 6, fret: 1 }
      ]
    },
    {
      pitch: 'B4',
      fingeringOptions: [
        { stringNum: 1, fret: 7 },
        { stringNum: 2, fret: 12 },
        { stringNum: 3, fret: 16 }
      ]
    }
  ],
  'break',
  [
    {
      pitch: 'E4',
      fingeringOptions: [
        { stringNum: 1, fret: 0 },
        { stringNum: 2, fret: 5 },
        { stringNum: 3, fret: 9 },
        { stringNum: 4, fret: 14 }
      ]
    },
    {
      pitch: 'B3',
      fingeringOptions: [
        { stringNum: 2, fret: 0 },
        { stringNum: 3, fret: 4 },
        { stringNum: 4, fret: 9 },
        { stringNum: 5, fret: 14 }
      ]
    },
    {
      pitch: 'G3',
      fingeringOptions: [
        { stringNum: 3, fret: 0 },
        { stringNum: 4, fret: 5 },
        { stringNum: 5, fret: 10 },
        { stringNum: 6, fret: 15 }
      ]
    },
    {
      pitch: 'E3',
      fingeringOptions: [
        { stringNum: 4, fret: 2 },
        { stringNum: 5, fret: 7 },
        { stringNum: 6, fret: 12 }
      ]
    },
    {
      pitch: 'B2',
      fingeringOptions: [
        { stringNum: 5, fret: 2 },
        { stringNum: 6, fret: 7 }
      ]
    },
    { pitch: 'E2',
      fingeringOptions: [
        { stringNum: 6, fret: 0 }
      ]
    }
  ]
]
```

</details>

### `lineFingeringOptions <- genLineFingeringOptions()`

Generate compatible fingering combinations for each set of pitches for later comparison.

<details open style="margin-bottom: 2em;">
<summary>Example</summary>

```typescript
[
  [
    {
      pitches: [ 'D#4' ],
      avg_fret: 4,
      fret_span: 0,
      fingering: [ { stringNum: 2, fret: 4 } ]
    },
    {
      pitches: [ 'D#4' ],
      avg_fret: 8,
      fret_span: 0,
      fingering: [ { stringNum: 3, fret: 8 } ]
    },
    {
      pitches: [ 'D#4' ],
      avg_fret: 13,
      fret_span: 0,
      fingering: [ { stringNum: 4, fret: 13 } ]
    }
  ],
  [
    {
      pitches: [ 'B4' ],
      avg_fret: 7,
      fret_span: 0,
      fingering: [ { stringNum: 1, fret: 7 } ]
    },
    {
      pitches: [ 'B4' ],
      avg_fret: 12,
      fret_span: 0,
      fingering: [ { stringNum: 2, fret: 12 } ]
    },
    {
      pitches: [ 'B4' ],
      avg_fret: 16,
      fret_span: 0,
      fingering: [ { stringNum: 3, fret: 16 } ]
    }
  ],
  [
    {
      pitches: [ 'A2', 'A3' ],
      avg_fret: 2,
      fret_span: 0,
      fingering: [ { stringNum: 5, fret: 0 }, { stringNum: 3, fret: 2 } ]
    },
    {
      pitches: [ 'A2', 'A3' ],
      avg_fret: 7,
      fret_span: 0,
      fingering: [ { stringNum: 5, fret: 0 }, { stringNum: 4, fret: 7 } ]
    },
    {
      pitches: [ 'A2', 'A3' ],
      avg_fret: 17,
      fret_span: 0,
      fingering: [ { stringNum: 5, fret: 0 }, { stringNum: 6, fret: 17 } ]
    },
    {
      pitches: [ 'A2', 'A3' ],
      avg_fret: 6,
      fret_span: 2,
      fingering: [ { stringNum: 6, fret: 5 }, { stringNum: 4, fret: 7 } ]
    }
  ],
  'break',
  [
    {
      pitches: [ 'F2', 'B4' ],
      avg_fret: 4,
      fret_span: 6,
      fingering: [ { stringNum: 6, fret: 1 }, { stringNum: 1, fret: 7 } ]
    }
  ],
  'break',
  [
    {
      pitches: [ 'E4', 'B3', 'G3', 'E3', 'B2', 'E2' ],
      avg_fret: 2,
      fret_span: 0,
      fingering: [
        { stringNum: 1, fret: 0 },
        { stringNum: 2, fret: 0 },
        { stringNum: 3, fret: 0 },
        { stringNum: 4, fret: 2 },
        { stringNum: 5, fret: 2 },
        { stringNum: 6, fret: 0 }
      ]
    }
  ]
]
```

</details>
