// import { yoyo } from "../src/guitar_tab_generator";
let generator = require("../src/guitar_tab_generator");

it('add', function() {
  expect(generator.hiyoyo("Apple")).toEqual(0);
}); 