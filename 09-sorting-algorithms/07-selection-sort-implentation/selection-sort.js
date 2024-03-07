function selectionSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }

    return nums;
}

module.exports = selectionSort;

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       let minIndex = i;

//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }

//       if (minIndex !== i) {
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//       }
//     }

//     return arr;
// }
