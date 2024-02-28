function longestConsecutiveSequence(numArr) {
    const numSet = new Set(numArr);

    let sequenceLength = 0;

    if (numSet.size > 0) {
        sequenceLength = 1;
    }

    numSet.forEach((num) => {
        if (numSet.has(num + 1)) {
            sequenceLength += 1;
        }
    });

    return sequenceLength;
}

module.exports = longestConsecutiveSequence;

// function longestConsecutiveSequence(nums) {
//     const numSet = new Set(nums);

//     let longestSequence = 0;

//     for (const num of numSet) {
//       if (!numSet.has(num - 1)) {
//         let currentNum = num;
//         let currentSequence = 1;

//         while (numSet.has(currentNum + 1)) {
//           currentNum++;
//           currentSequence++;
//         }

//         longestSequence = Math.max(longestSequence, currentSequence);
//       }
//     }

//     return longestSequence;
// }
