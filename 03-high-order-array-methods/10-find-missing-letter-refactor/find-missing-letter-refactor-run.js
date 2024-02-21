const findMissingLetter = require("./find-missing-letter-refactor");

const result = findMissingLetter(["a", "b", "c", "e"]);
const result2 = findMissingLetter(["A", "B", "C", "E"]);

console.log(result, result2);
