const HashTable = require("./HashTable");

function wordInstanceCounter(str, word) {
    const formatedStr = str.toLowerCase().split(/\W+/);
    const formatedWord = word.toLowerCase();
    const frequencyTable = new HashTable();

    let counter = 0;

    for (const currentWord of formatedStr) {
        if (currentWord === "") continue;

        if (frequencyTable.has(currentWord)) {
            frequencyTable.set(
                currentWord,
                frequencyTable.get(currentWord) + 1
            );
        } else {
            frequencyTable.set(currentWord, 1);
        }

        if (currentWord === formatedWord) {
            counter = frequencyTable.get(currentWord);
        }
    }

    return counter;
}

module.exports = wordInstanceCounter;
