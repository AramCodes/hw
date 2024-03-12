function twoSum(numArr, total) {
    const numSet = new Set(numArr);

    const results = [];

    numArr.forEach((num, ind) => {
        if (numSet.has(total - num)) {
            results.push(ind);
        }
    });

    return results;
}

module.exports = twoSum;

// function twoSum(nums, target) {
//     const numSet = new Set();

//     for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i];

//       if (numSet.has(complement)) {
//         return [nums.indexOf(complement), i];
//       }

//       numSet.add(nums[i]);
//     }

//     return [];
// }

// function twoSum(numbers, target) {
//     for (var i = 0; i < numbers.length-1; i++) {
//         for (var j = i+1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) return [i, j];
//         }
//     }
// }
