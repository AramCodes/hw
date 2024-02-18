const countOccurrences = (str, char) => {
    count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
};

module.exports = countOccurrences;
