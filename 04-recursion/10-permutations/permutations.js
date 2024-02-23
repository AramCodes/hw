function permutations(string) {
    // Create an array to store the permutations
    const result = [];

    if (string.length === 0) {
        result.push("");
        return result;
    }

    for (let i = 0; i < string.length; i++) {
        const firstLetter = string[i];
        const restOfString = string.slice(0, i) + string.slice(i + 1);

        const subPermutations = permutations(restOfString);

        for (let j = 0; j < subPermutations.length; j++) {
            result.push(firstLetter + subPermutations[j]);
        }
    }

    return result;
}

module.exports = permutations;
