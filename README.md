# guitar-tab

## Algorithm

### `Input`

String of pitches and chords for where the pitches or chord for each beat is separated by line breaks. Measure breaks are indicated by an empty line.

<details open style="margin-bottom: 2em;">
<summary>Example</summary>

```typescript
Eb4
A2A3

Em chord
```

</details>

### `validateInput()`

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
  [ 'A2', 'A3' ],
  '',
  [ 'E4', 'B3', 'G3', 'E3', 'B2', 'E2' ]
]
```

</details>

### `generateLineFingerings()`

Generate the fingerings for the individual pitches for each line/beat.

<details open style="margin-bottom: 2em;">
<summary>Example</summary>

```typescript
[
  [
    {
      pitch: 'D#4',
      fingerings: [
        { stringNum: 2, fret: 4 },
        { stringNum: 3, fret: 8 },
        { stringNum: 4, fret: 13 }
      ]
    }
  ],
  [
    {
      pitch: 'A2',
      fingerings: [
        { stringNum: 5, fret: 0 },
        { stringNum: 6, fret: 5 }
      ]
    },
    {
      pitch: 'A3',
      fingerings: [
        { stringNum: 3, fret: 2 },
        { stringNum: 4, fret: 7 },
        { stringNum: 5, fret: 12 },
        { stringNum: 6, fret: 17 }
      ]
    }
  ],
  'break',
  [
    {
      pitch: 'E4',
      fingerings: [
        { stringNum: 1, fret: 0 },
        { stringNum: 2, fret: 5 },
        { stringNum: 3, fret: 9 },
        { stringNum: 4, fret: 14 }
      ]
    },
    {
      pitch: 'B3',
      fingerings: [
        { stringNum: 2, fret: 0 },
        { stringNum: 3, fret: 4 },
        { stringNum: 4, fret: 9 },
        { stringNum: 5, fret: 14 }
      ]
    },
    {
      pitch: 'G3',
      fingerings: [
        { stringNum: 3, fret: 0 },
        { stringNum: 4, fret: 5 },
        { stringNum: 5, fret: 10 },
        { stringNum: 6, fret: 15 }
      ]
    },
    {
      pitch: 'E3',
      fingerings: [
        { stringNum: 4, fret: 2 },
        { stringNum: 5, fret: 7 },
        { stringNum: 6, fret: 12 }
      ]
    },
    {
      pitch: 'B2',
      fingerings: [
        { stringNum: 5, fret: 2 },
        { stringNum: 6, fret: 7 }
      ]
    },
    { pitch: 'E2', fingerings: [
        { stringNum: 6, fret: 0 }
      ]
    }
  ]
]
```

</details>

### `createFingeringOptions()`

Generate compatible fingering combinations for each set of pitches for later comparison.

<details open style="margin-bottom: 2em;">
<summary>Example</summary>

```typescript

```

</details>