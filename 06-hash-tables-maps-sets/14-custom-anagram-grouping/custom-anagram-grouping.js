const HashTable = require("./HashTable");

function anagramGrouping(strArr) {
    const anagramGroups = new HashTable();

    strArr.forEach((str) => {
        const sortedChars = str.split("").sort().join("");

        if (anagramGroups.has(sortedChars)) {
            anagramGroups.get(sortedChars).push(str);
        } else {
            anagramGroups.set(sortedChars, [str]);
        }
    });

    return anagramGroups.getValues();
}

module.exports = anagramGrouping;
