const GuitarModule = require("../src/guitar_object.js");
const guitar = new GuitarModule.Guitar("opene", 0);
console.log(guitar.strings);
for (const string in guitar.strings) {
    console.log(`${string} | ${guitar.strings[string][0]}`);
}
