function findMaxNumber(arr) {
    return Math.max(...arr);
}

module.exports = findMaxNumber;

// const findMaxNumber = (numbers) => {
//     return numbers.reduce((max, curr) => (curr > max ? curr : max), numbers[0]);
// };
//  or
// function findMaxNumber(arr) {
//     const sortedArray = arr.sort((a, b) => a - b);
//     return sortedArray[sortedArray.length - 1];
// }
