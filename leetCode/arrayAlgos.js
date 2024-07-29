// palindrome is number return true else return false
const isPalindrome = function (x) {
    let xReversed = x + "";
    xReversed = xReversed.split("").reverse().join("");

    if (x === Number(xReversed)) {
        return true;
    }
    return false;
};

//Given a roman numeral, convert it to an integer.
var romanToInt = function (s) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let num = 0;

    s.split("").forEach((letter, ind) => {
        if (map[letter] < map[s[ind + 1]]) {
            num -= map[letter];
        } else {
            num += map[letter];
        }
    });

    return num;
};
//second solution using for loop
var romanToInt2 = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let num = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        let next = s[i + 1];

        if (map[curr] < map[next]) {
            num -= map[curr];
        } else {
            num += map[curr];
        }
    }

    return num;
};

//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be
//changed. Then return the number of elements in nums which are not equal to val.
var removeElement = function (nums, val) {
    let num1 = 0;
    let num2 = 0;

    while (num2 < nums.length) {
        if (nums[num2] !== val) {
            nums[num1] = nums[num2];
            num1 += 1;
        }

        num2 += 1;
    }

    // nums.filter(num => {  doesn't work because it returns a new array
    //     if (num !== val) {
    //         newNums.push(num) ;
    //     }
    // })

    return num1;
};

//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears
//only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
var removeDuplicates = function (nums) {
    // nums = nums.sort();  no need to double filter and sort the array... skews the results
    // nums = [ ...new Set(nums) ];
    let num1 = 0;
    let num2 = 1;

    while (num2 < nums.length) {
        if (nums[num1] !== nums[num2]) {
            num1 += 1;
            nums[num1] = nums[num2];
        }

        num2 += 1;
    }

    return num1 + 1;
};

//Search Insert Position
//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where
//it would be if it were inserted in order.You must write an algorithm with O(log n) runtime complexity.
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }

    return nums.length;
};

// let left = 0;
// let right = nums.length - 1; takes too long

// while( left <= right) {
//     let mid = left + Math.floor( (right - left) / 2);

//     if ( nums[mid] === target ) {
//         return mid;
//     }

//     if ( nums[mid] > target ) {
//         rigth = mid - 1;
//     }
//     else {
//         left = mid + 1;
//     }
// }

// return left;

//Remove One element to make array strictly increasing
//Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false if otherwise.
//If the array is already strictly increasing, return true
var canBeIncreasing = function (nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            count += 1;
            if (nums[i] <= nums[i - 2] && nums[i + 1] <= nums[i - 1]) {
                return false;
            }
        }
    }

    return count <= 1;
};

//You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.Given an integer array flowerbed
// containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the
// no-adjacent-flowers rule and false otherwise.
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        // loop through the 2D flowerbed
        if (
            flowerbed[i] === 0 && // if the current flowerbed is empty
            flowerbed[i - 1] !== 1 && // if the previous flowerbed is not used
            flowerbed[i + 1] !== 1 // if the next flowerbed is not used
        ) {
            flowerbed[i] = 1; // sets flowerbed
            count += 1; // increments amount of free beds
        }
    }

    return count >= n;
};
//Given an array of integers arr, return true if and only if it is a valid mountain array.
var validMountainArray = function (arr) {
    let peak = Math.floor(arr.length / 2);
    let count = 0;
    //passes all preliminary tests but will not allow submission check tommorrow
    if (arr.length >= 3) {
        for (let i = 0; i < peak; i++) {
            if (
                arr[i] < arr[i + 1] &&
                arr[arr.length - (1 + i)] < arr[arr.length - (2 + i)]
            ) {
                count += 4;
            }
        }
    }

    return count >= arr.length ? true : false;
};