function anagramGrouping(strArr) {
    const anagramGroups = new Map();

    strArr.forEach((str) => {
        const sortedChars = str.split("").sort().join("");

        if (anagramGroups.has(sortedChars)) {
            anagramGroups.get(sortedChars).push(str);
        } else {
            anagramGroups.set(sortedChars, [str]);
        }
    });

    return Array.from(anagramGroups.values());
}

module.exports = anagramGrouping;

// function anagramGrouping(words) {
//     const anagramGroups = new Map();

//     for (const word of words) {
//         const sortedChars = word.split("").sort().join("");

//         if (anagramGroups.has(sortedChars)) {
//             anagramGroups.get(sortedChars).push(word);
//         } else {
//             anagramGroups.set(sortedChars, [word]);
//         }
//     }

//     return Array.from(anagramGroups.values());
// }
