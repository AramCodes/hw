function wordFrequencyCounter(str) {
    const fomattedStrArr = str.toLowerCase().split(/\W+/);
    const wordFrequency = new Map();

    if (str.length === 0) {
        return wordFrequency;
    }

    for (const word of fomattedStrArr) {
        if (word === "") continue;

        if (wordFrequency.has(word)) {
            wordFrequency.set(word, wordFrequency.get(word) + 1);
        } else {
            wordFrequency.set(word, 1);
        }
    }

    return wordFrequency;
}

module.exports = wordFrequencyCounter;
