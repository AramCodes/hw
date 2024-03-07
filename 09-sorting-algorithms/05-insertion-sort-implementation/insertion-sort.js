function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i;
        while (j > 0 && nums[j] < nums[j - 1]) {
            [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
            j--;
        }
    }

    return nums;
}

module.exports = insertionSort;

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {

//       const currentElement = arr[i];

//       let j = i - 1;

//       while (j >= 0 && arr[j] > currentElement) {
//         arr[j + 1] = arr[j];
//         j--;
//       }

//       arr[j + 1] = currentElement;
//     }

//     return arr;
// }
