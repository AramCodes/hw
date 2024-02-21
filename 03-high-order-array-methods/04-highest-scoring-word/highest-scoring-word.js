function highestScoringWord(string) {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    const scores = string.split(" ").map((word) => {
        const letterArr = word.toString().split("");
        let score = letterArr.reduce((acc, curr) => {
            return acc + letters.indexOf(curr) + 1;
        }, 0);

        return score;
    });

    const highestScore = Math.max(...scores);

    const highestIndex = scores.indexOf(highestScore);

    return string.split(" ")[highestIndex];
}

module.exports = highestScoringWord;

// Solution 1
// function highestScoringWord(str) {
//     const words = str.split(' ');
//     const scores = words.map((word) =>
//       Array.from(word).reduce(
//         (score, letter) => score + letter.charCodeAt(0) - 96,
//         0
//       )
//     );
//     const highestScore = Math.max(...scores);
//     const highestIndex = scores.indexOf(highestScore);
//     return words[highestIndex];
// }
