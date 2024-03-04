const DoublyLinkedList = require("./DoublyLinkedList");

function findPairSum(nums, target) {
    const linkedList = new DoublyLinkedList();

    nums.forEach((num) => linkedList.append(num));

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        if (linkedList.contains(difference)) {
            return [nums[i], difference];
        } else {
            return null;
        }
    }
}

module.exports = findPairSum;

// function findPairSum(nums, targetSum) {
//     const seen = new DoublyLinkedList();

//     for (const num of nums) {
//         const difference = targetSum - num;
//         if (seen.contains(difference)) {
//             return [difference, num];
//         }

//         seen.append(num);
//     }

//     return null;
// }
