// function mergeSort(nums) {
//     if (nums.length <= 1) {
//         return nums;
//     }

//     const mid = Math.floor(nums.length / 2);
//     const leftSplit = mergeSort(nums.slice(0, mid));
//     const rightSplit = mergeSort(nums.slice(mid));

//     return merge(leftSplit, rightSplit);
// }

// function merge(left, right) {
//     const merged = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             merged.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             merged.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

let defaultCompare = (a, b) => (a > b ? 1 : a < b ? -1 : 0);
// V2
// let mergesort = (
//     array,
//     start = 0,
//     end = array.length,
//     compare = defaultCompare
// ) => {
//     let range = end - start;
//     if (range <= 1) {
//         return array.slice(start, end);
//     }

//     const pivot = Math.floor(range / 2);

//     let left = mergesort(array, start, start + pivot, compare);
//     let right = mergesort(array, start + pivot, end, compare);

//     let sorted = [];

//     while (left.length && right.length) {
//         if (compare(left[0], right[0]) <= 0) {
//             sorted.push(left.shift());
//         } else {
//             sorted.push(right.shift());
//         }
//     }

//     return sorted;
// };

// V3
// let mergesortArraySplit = (
//     array,
//     compare = defaultCompare
//   ) => {
//     if (array.length <= 1) { return array; }

//     let pivot = Math.floor(array.length / 2);

//     let left = mergesortArraySplit(array.slice(0, pivot), compare);
//     let right = mergesortArraySplit(array.slice(pivot, array.length), compare);

//     let sorted = [];
//     let i = 0, j = 0;
//     for (let k = 0; k < array.length; k++) {
//         if (i < left.length && compare(left[i], right[j]) <= 0) {
//             sorted.push(left[i]);
//             i++;
//         } else {
//             sorted.push(right[j]);
//             j++;
//         }
//     }

//     return sorted;
// };
