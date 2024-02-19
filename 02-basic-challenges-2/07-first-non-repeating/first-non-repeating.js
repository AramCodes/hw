function findFirstNonRepeatingCharacter(str) {
    const arr = str
        .split("")
        .filter((char) => str.indexOf(char) === str.lastIndexOf(char));

    return arr[0] || null;
}

module.exports = findFirstNonRepeatingCharacter;
