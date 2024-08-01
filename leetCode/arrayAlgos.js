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
    let peak = Math.ceil(arr.length / 2);
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

var validMountainArray = function (arr) {
    let i = 0;
    //passes all preliminary tests but will not allow submission
    if (arr.length < 3) {
        return false;
    }

    while (i < arr.length && arr[i] < arr[i + 1]) {
        i++;
    }

    while (i < arr.length && arr[i] > arr[i + 1]) {
        i++;
    }

    return i === arr.length - 1;
};

var validMountainArray = function (arr) {
    let i = 0;
    //allows submission and passes all preliminary tests
    while (i < arr.length && i + 1 < arr.length && arr[i] < arr[i + 1]) {
        i++;
    }

    if (i === 0 || i + 1 >= arr.length) {
        return false;
    }

    while (i < arr.length && i + 1 < arr.length) {
        if (arr[i] <= arr[i++ + 1]) {
            return false;
        }
    }

    return true;
};

// Given an array arr of integers, check if there exist two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
var checkIfExist = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (
            //pass all preliminary tests but 1 test failed for sumbmission
            arr.includes(arr[i] * 2) &&
            arr[i] >= 0 &&
            i !== arr.indexOf(arr[i] * 2)
        ) {
            return true;
        }
    }

    return false;
};

var checkIfExist = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        //passes all preliminary test and allows submission
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === 2 * arr[j] || arr[i] === arr[j] / 2) {
                return true;
            }
        }
    }

    return false;
};

// Given an integer array nums of length n, you want to create an array ans of length 2n where
//ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
var getConcatenation = function (nums) {
    // doubles an arrray and return it concatenated
    //passes all preliminary tests and allows submission
    return [...nums, ...nums];
};

//Given an array of integers nums, return the number of good pairs. A pair (i, j) is called good if nums[i] == nums[j] and i < j.
var numIdenticalPairs = function (nums) {
    //passes all preliminary tests and allows submission
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count += 1;
            }
        }
    }

    return count;
};

//There is a programming language with only four operations and one variable X: ++X and X++ increments the value of the variable X by 1.
//--X and X-- decrements the value of the variable X by 1. Initially, the value of X is 0. Given an array of strings operations
//containing a list of operations, return the final value of X after performing all the operations.

var finalValueAfterOperations = function (operations) {
    // passes all preliminary tests and allows submission
    //runtime beats 92% and memorey beats 86% of submissions.
    let x = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "++X" || operations[i] === "X++") x += 1;
        else if (operations[i] === "--X" || operations[i] === "X--") x -= 1;
    }

    return x;
};

//Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
//A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
var buildArray = function (nums) {
    // passes all preliminary tests and allows submission
    //runtime beats 92% and memory beats 85% of submissions. can be improved by removing
    const ans = nums.map((_, inx) => {
        return nums[nums[inx]];
    });

    return ans;
};

//You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.Return the minimum number of operations to make all elements of
//nums divisible by 3.

var minimumOperations = function (nums) {
    let operations = 0;
    // passes all preliminary tests and allows submission
    //runtime beats 78% and memory beats 88% of submissions.

    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] - 1) % 3 === 0 || (nums[i] + 1) % 3 === 0) {
            operations++;
        }
    }

    return operations;
};

//Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].Return the array in the form [x1,y1,x2,y2,...,xn,yn].
var shuffle = function (nums, n) {
    // passes all preliminary tests and allows submission
    //runtime beats 84% and memory beats 20% of submissions.
    const arr = []; // sets empty array
    for (let i = 0; i < n; i++) {
        // loops through the array outter loop grabbing first sub array and inner loop grabbing second sub array
        arr.push(nums[i]);
        for (let j = i + n; j <= i + n; j++) {
            arr.push(nums[j]);
        }
    }

    return arr;
};

//You are given a 0-indexed array of strings words and a character x. Return an array of indices representing the words that contain the character x.
//Note that the returned array may be in any order.
var findWordsContaining = function (words, x) {
    // passes all preliminary tests and allows submission
    //runtime beats 56% and memory beats 34% of submissions.
    const arr = [];
    words.forEach((word, idx) => {
        if (word.includes(x)) {
            arr.push(idx);
        }
    });

    return arr;
};

//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.
var runningSum = function (nums) {
    //room for improvement in memory and runtime (possible solutions:map and reduce, or
    //destructured array and reduce)
    // passes all preliminary tests and allows submission
    //runtime beats 50% and memory beats 45% of submissions.
    let sum = 0;
    let sumArr = [];
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sumArr.push(sum);
    }

    return sumArr;
};

//You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return
//the wealth that the richest customer has. A customer's wealth is the amount of money they have in all their bank accounts. The
//richest customer is the customer that has the maximum wealth.
var maximumWealth = function (accounts) {
    let maxWealth = 0;
    // passes all preliminary tests and allows submission
    //runtime beats 94% and memory beats 58% of submissions.

    for (let i = 0; i < accounts.length; i++) {
        let currMaxWealth = 0;

        for (let j = 0; j < accounts[i].length; j++) {
            currMaxWealth += accounts[i][j];
        }

        if (currMaxWealth > maxWealth) {
            maxWealth = currMaxWealth;
        }
    }

    return maxWealth;
};

//There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the
//ith kid has, and an integer extraCandies, denoting the number of extra candies that you have. Return a boolean array result of
//length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies
//among all the kids, or false otherwise.Note that multiple kids can have the greatest number of candies.
var kidsWithCandies = function (candies, extraCandies) {
    //passes all preliminary tests and allows submission
    //runtime beats 58% and memory beats 32% of submissions. lots of room for improvement
    const result = [];
    const max = Math.max(...candies);

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
};

var kidsWithCandies = function (candies, extraCandies) {
    //even worse than the first solution
    //passes all preliminary tests and allows submission
    //runtime beats 9% and memory beats 40% of submissions. lots of room for improvement (major decrese in runtime performance(-49%) but
    //slight increase in memory performance(+8%))
    const max = Math.max(...candies);
    return candies.map((candy, ind) => {
        // just removal of unused parameter increases runtime significantly(+31%) (_ instead of candy)
        return candies[ind] + extraCandies >= max;
    });
};
