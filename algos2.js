// binary search
/* Typical comparison function */
const defaultCompare = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

/* Version 1:
    O(n)
    Fixed memory
    Loops
*/
const binarySearchWithLoops = (array, element, compare = defaultCompare) => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor((right + left) / 2);

        switch (compare(element, array[middle])) {
            case -1: {
                right = middle - 1;
                break;
            }
            case 1: {
                left = middle + 1;
                break;
            }
            default: {
                return middle;
            }
        }
    }

    return -1;
};

/* Version 2:
    O(n)
    Fixed memory
    Recursion
*/

const binarySearchWithRecursion = (
    array,
    element,
    compare = defaultCompare,
    left = 0,
    right = array.length - 1
) => {
    if (left > right) {
        return -1;
    }

    const middle = Math.floor((right + left) / 2);
    const compareResult = compare(element, array[middle]);

    return compareResult === -1
        ? binarySearchWithRecursion(array, element, compare, left, middle - 1)
        : compareResult === 1
        ? binarySearchWithRecursion(array, element, compare, middle + 1, right)
        : middle;
};

/* Version 3:
    O(n)
    Fixed memory
    Tail Recursion
*/

const binarySearchWithTailRecursion = (
    array,
    element,
    compare = defaultCompare,
    left = 0,
    right = array.length - 1
) => {
    if (left > right) {
        return -1;
    }

    const middle = Math.floor((right + left) / 2);
    const compareResult = compare(element, array[middle]);

    if (compareResult === 0) {
        return middle;
    }

    const boundaries =
        compareResult === -1 ? [left, middle - 1] : [middle + 1, right];

    return binarySearchWithRecursion(array, element, compare, ...boundaries);
};

export {
    binarySearchWithLoops,
    binarySearchWithRecursion,
    binarySearchWithTailRecursion,
};
