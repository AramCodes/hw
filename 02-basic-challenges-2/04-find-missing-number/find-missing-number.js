function findMissingNumber(arrayOfNums) {
    const max = Math.max(...arrayOfNums);
    const min = Math.min(...arrayOfNums);
    let missing;

    for (let i = min; i <= max; i++) {
        if (!arrayOfNums.includes(i)) {
            missing = i;
        }
    }
    return missing;
}

module.exports = findMissingNumber;

// function findMissingNumber(arr) {
//     const expectedSum = ((arr.length + 1) * arr.length) / 2;

//     const actualSum = arr.reduce((acc, curr) => acc + curr, 0);

//     return expectedSum - actualSum;
// }
