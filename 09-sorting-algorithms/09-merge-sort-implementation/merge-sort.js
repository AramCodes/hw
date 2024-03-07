function mergeSort(nums) {
    if (nums.length <= 1) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);
    const leftSplit = mergeSort(nums.slice(0, mid));
    const rightSplit = mergeSort(nums.slice(mid));

    return merge(leftSplit, rightSplit);
}

function merge(left, right) {
    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        } else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

module.exports = mergeSort;
