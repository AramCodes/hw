function countVowels(str) {
    let count = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u"
        ) {
            count++;
        }
    }
    return count;
}

module.exports = countVowels;
// or same thing but with a switch statement
// make the switch statement version of the function above
