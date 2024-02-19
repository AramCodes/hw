function findMissingLetter(letterArray) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const startInd = letters.indexOf(letterArray[0]);

    for (let i = 0; i < letterArray.length; i++) {
        if (letterArray[i] !== letters[startInd + i]) {
            return letters[startInd + i];
        }
    }

    return "";
}

module.exports = findMissingLetter;

// function findMissingLetter(arr) {
//     const start = arr[0].charCodeAt(0);
//
//     for (let i = 1; i < arr.length; i++) {
//       const current = arr[i].charCodeAt(0);
//
//       if (current - start > 1) {
//         return String.fromCharCode(start + 1);
//       }
//
//       start = current;
//     }
//
//     return '';
// }
