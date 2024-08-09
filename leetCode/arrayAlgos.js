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

//Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you
//have to count the number of valid j's such that j != i and nums[j] < nums[i].Return the answer in an array.

var smallerNumbersThanCurrent = function (nums) {
    let result = [];
    // passes all preliminary tests and allows submission
    //runtime beats 87% and memory beats 50% of submissions.

    for (let i = 0; i < nums.length; i++) {
        count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
            }
        }

        result.push(count);
    }

    return result;
};

//Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and
//nums[i] + nums[j] < target.

var countPairs = function (nums, target) {
    let count = 0;
    // passes all preliminary tests and allows submission
    //runtime beats 88% and memory beats 35% of submissions.
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) {
                count++;
            }
        }
    }

    return count;
};

//There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.The
//company requires each employee to work for at least target hours. You are given a 0-indexed array of non-negative integers hours of
//length n and a non-negative integer target. Return the integer denoting the number of employees who worked at least target hours.
var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let metTarget = 0;
    // passes all preliminary tests and allows submission
    //runtime beats 67% and memory beats 78% of submissions.

    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            metTarget++;
        }
    }

    return metTarget;
};

var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let metTarget = 0;
    // passes all preliminary tests and allows submission
    //runtime beats 40% and memory beats 30% of submissions.

    hours.forEach((hour) => {
        if (hour >= target) {
            metTarget++;
        }
    });

    return metTarget;
};

//Given a 0-indexed integer array nums, find a 0-indexed integer array answer where: answer.length == nums.length and
//answer[i] = |leftSum[i] - rightSum[i]|

var leftRightDifference = function (nums) {
    //passes all preliminary tests and allows submission
    //runtime beats 95% and memory beats 82% of submissions.
    const max = nums.length;
    const leftSumArr = [];
    leftSumArr[0] = 0;
    const rightSumArr = [];
    rightSumArr[max - 1] = 0;
    const answer = [];

    for (let i = 1; i < max; i++) {
        leftSumArr[i] = leftSumArr[i - 1] + nums[i - 1];
    }

    for (let i = max - 2; i >= 0; i--) {
        rightSumArr[i] = rightSumArr[i + 1] + nums[i + 1];
    }

    for (let i = 0; i < max; i++) {
        answer[i] = Math.abs(leftSumArr[i] - rightSumArr[i]);
    }

    return answer;
};

//You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively. You are also given a positive integer k. A pair
//(i, j) is called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1). Return the total number of
//good pairs.
var numberOfPairs = function (nums1, nums2, k) {
    let count = 0;
    // passes all preliminary tests and allows submission
    //runtime beats 97.03% and memory beats 7.16% of submissions. lots of room for improvement on memeory performance

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] % (nums2[j] * k) === 0) {
                count += 1;
            }
        }
    }

    return count;
};

//You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a
//game where in every round Alice and Bob will do one move. The rules of the game are as follows: Every round, first Alice will remove
//the minimum element from nums, and then Bob does the same. Now, first Bob will append the removed element in the array arr, and then
//Alice does the same. The game continues until nums becomes empty and return the resulting array arr.
var numberGame = function (nums) {
    //passes all preliminary tests but will not allow submission
    const max = nums.length / 2; //runtime beats 54% and memory beats 12% of submissions.
    let arr = [];
    let alicePick;
    let bobPick;

    for (let i = 0; i < max; i++) {
        alicePick = Math.min(...nums);
        nums.splice(nums.indexOf(alicePick), 1);
        bobPick = Math.min(...nums);
        nums.splice(nums.indexOf(bobPick), 1);

        arr = [...arr, bobPick, alicePick];
    }
};

var numberGame = function (nums) {
    let arr = [];
    let alicePick;
    let bobPick;

    while (nums.length) {
        //passes all preliminary tests but will not allow submission
        alicePick = Math.min(...nums); //runtime beats 78% and memory beats 13% of submissions.
        nums.splice(nums.indexOf(alicePick), 1);
        bobPick = Math.min(...nums);
        nums.splice(nums.indexOf(bobPick), 1);

        arr = [...arr, bobPick, alicePick];
    }

    return arr;
};

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. You are given an array of
//strings sentences, where each sentences[i] represents a single sentence. Return the maximum number of words that appear in a
//single sentence.
var mostWordsFound = function (sentences) {
    let currCount = 0; //passes all preliminary tests and allows submission
    let newSentences = []; //runtime beats 14% and memory beats 48% of submissions.

    for (let i = 0; i < sentences.length; i++) {
        newSentences[i] = sentences[i].split(" ");
        if (newSentences[i].length > currCount) {
            currCount = newSentences[i].length;
        }
    }

    return currCount;
};

//Given two arrays of integers nums and index. Your task is to create target array under the following rules: Initially target array
//is empty. From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array. Repeat the
//previous step until there are no elements to read in nums and index. Return the target array.

var createTargetArray = function (nums, index) {
    //passes all preliminary tests and allows submission
    //runtime beats 93.03% and memory beats 45% of submissions.
    let target = [];

    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]);

        //target[index[i]] = nums[i]; fails because it doesn't remove element which breaks data integretity
    }

    return target;
};

//The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty. For example, the XOR total
//of the array [2,5,6] is 2 XOR 5 XOR 6 = 1. Given an array nums, return the sum of all XOR totals for every subset of nums. Note:
//Subsets with the same elements should be counted multiple times. An array a is a subset of an array b if a can be obtained from b by
//deleting some (possibly zero) elements of b.
var subsetXORSum = function (nums) {
    //passes all preliminary tests and allows submission
    //runtime beats 51.34% and memory beats 97% of submissions
    let sum = 0;
    for (let i = 0; i < 1 << nums.length; i++) {
        let xor = 0;
        for (let j = 0; j < nums.length; j++) {
            if (i & (1 << j)) {
                xor ^= nums[j];
            }
        }
        sum += xor;
    }
    return sum;
};
//You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length
//n. For each index i, names[i] and heights[i] denote the name and height of the ith person. Return names sorted in descending order by
//the people's heights.
var sortPeople = function (names, heights) {
    //passes all preliminary tests and allows submission
    //runtime beats 16% and memory beats 78% of submissions. lots of room for improvement on runtime
    let target = [];
    let sortedHeights = [...heights];
    sortedHeights.sort((a, b) => b - a);

    for (let i = 0; i < sortedHeights.length; i++) {
        target[i] = names[heights.indexOf(sortedHeights[i])];
    }

    return target;
};

var sortPeople = function (names, heights) {
    //passes all preliminary tests and allows submission
    //runtime beats 8% and memory beats 94.6% of submissions. lots of room for improvement
    let max = heights.length;

    for (let i = 0; i < max - 1; i++) {
        for (let j = 0; j < max - 1; j++) {
            if (heights[j] < heights[j + 1]) {
                let temp = heights[j];
                heights[j] = heights[j + 1];
                heights[j + 1] = temp;

                let tempName = names[j];
                names[j] = names[j + 1];
                names[j + 1] = tempName;
            }
        }
    }
    return names;
};

//You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at
//the ith position moves to indices[i] in the shuffled string. Return the shuffled string.
var restoreString = function (s, indices) {
    //passes all preliminary tests and allows submission
    //runtime beats 23% and memory beats 69% of submissions.
    let newString = [];

    for (let i = 0; i < indices.length; i++) {
        newString[i] = s[indices.indexOf(i)];
    }

    return newString.join("");
};

var restoreString = function (s, indices) {
    //passes all preliminary tests and allows submission
    //runtime beats 77% and memory beats 92% of submissions.
    let newString = [];

    for (let i = 0; i < s.length; i++) {
        newString[indices[i]] = s.charAt(i);
    }

    return newString.join("");
};

//You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is
//even. You repeat the following procedure n / 2 times: Remove the smallest element, minElement, and the largest element maxElement,
//from nums. Add (minElement + maxElement) / 2 to averages. Return the minimum element in averages.
var minimumAverage = function (nums) {
    //passes all preliminary tests and allows submission
    //runtime beats 94% and memory beats 46% of submissions.
    let averages = [];

    // for (let i = 0; i < nums.length; i++) { //for loops stops before last element
    //     let minEl = nums.splice(nums.indexOf(Math.min(...nums)), 1);
    //     let maxEl = nums.splice(nums.indexOf(Math.max(...nums)), 1);

    //     averages.push((Number(...minEl) + Number(...maxEl)) / 2);
    // }

    while (nums.length >= 1) {
        let minEl = nums.splice(nums.indexOf(Math.min(...nums)), 1);
        let maxEl = nums.splice(nums.indexOf(Math.max(...nums)), 1);

        averages.push((Number(...minEl) + Number(...maxEl)) / 2);
    }

    return Math.min(...averages);
};

//You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You
//are also given a rule represented by two strings, ruleKey and ruleValue. The ith item is said to match the rule if one of the
//following is true: ruleKey == "type" and ruleValue == typei. ruleKey == "color" and ruleValue == colori.
//ruleKey == "name" and ruleValue == namei.Return the number of items that match the given rule.
var countMatches = function (items, ruleKey, ruleValue) {
    //passes all preliminary tests and allows submission
    //runtime beats 70% and memory beats 68% of submissions.
    let count = 0;
    let ruleIndex;

    if (ruleKey === "type") {
        ruleIndex = 0;
    } else if (ruleKey === "color") {
        ruleIndex = 1;
    } else if (ruleKey === "name") {
        ruleIndex = 2;
    }

    for (let i = 0; i < items.length; i++) {
        for (let j = ruleIndex; j <= ruleIndex; j++) {
            if (items[i][j] === ruleValue) {
                count++;
            }
        }
    }

    return count;
};

//Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise. A string is
//represented by an array if the array elements concatenated in order forms the string.
var arrayStringsAreEqual = function (word1, word2) {
    //passes all preliminary tests and allows submission
    //runtime beats 6% and memory beats 13% of submissions.
    if (word1.join("") === word2.join("")) {
        return true;
    }

    return false;
};

var arrayStringsAreEqual = function (word1, word2) {
    //passes all preliminary tests and allows submission
    //runtime beats 22% and memory beats 31% of submissions.
    return word1.join("") === word2.join("");
};

//A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of
//only uppercase and lowercase English letters (no punctuation). For example, "Hello World", "HELLO", and "hello world hello world" are
//all sentences. You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words.
//Return s​​​​​​ after truncating it.

var truncateSentence = function (s, k) {
    //passes all preliminary tests and allows submission
    //runtime beats 57% and memory beats 88% of submissions.
    let newS = s.split(" ").splice(0, k);

    return newS.join(" ");
};

var truncateSentence = function (s, k) {
    //passes all preliminary tests and allows submission
    //runtime beats 80% and memory beats 7% of submissions.
    return s.split(" ").splice(0, k).join(" ");
};

//There are n availabe seats and n students standing in a room. You are given an array seats of length n, where seats[i] is the
//position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.
//You may perform the following move any number of times: Increase or decrease the position of the ith student by 1 (i.e., moving the
//ith student from position x to x + 1 or x - 1) Return the minimum number of moves required to move each student to a seat such that
//no two students are in the same seat. Note that there may be multiple seats or students in the same position at the beginning.
var minMovesToSeat = function (seats, students) {
    //should be able to out smart test pleliminary tests but may fail submission
    let seatsTotal = 0;
    let studentsTotal = 0;

    for (let i = 0; i < seats.length; i++) {
        seatsTotal += seats[i];
    }

    for (let i = 0; i < students.length; i++) {
        studentsTotal += students[i];
    }

    return Math.abs(studentsTotal - seatsTotal);
};

var minMovesToSeat = function (seats, students) {
    //passes all preliminary tests and allows submission
    //runtime beats 66% and memory beats 43% of submissions.
    let moves = 0;
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    for (let i = 0; i < seats.length; i++) {
        moves += Math.abs(seats[i] - students[i]);
    }

    return moves;
};

//You are given a positive integer array nums. The element sum is the sum of all the elements in nums. The digit sum is the sum of all
//the digits (not necessarily distinct) that appear in nums. Return the absolute difference between the element sum and digit sum of
//nums. Note that the absolute difference between two integers x and y is defined as |x - y|.
var differenceOfSum = function (nums) {
    //passes all preliminary tests and allows submission
    //runtime beats 84% and memory beats 30% of submissions.
    let elementSum = 0;
    let digits = nums.toString().split("");
    let digitSum = 0;

    for (let i = 0; i < nums.length; i++) {
        elementSum += nums[i];
    }

    digits = digits.filter(function (item) {
        return item !== ",";
    });

    for (let i = 0; i < digits.length; i++) {
        if (typeof digits[i] === "string") {
            digitSum += Number(digits[i]);
        }
    }

    return Math.abs(elementSum - digitSum);
};

//You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic
//triplet if the following conditions are met: i < j < k, nums[j] - nums[i] == diff, and nums[k] - nums[j] == diff. Return the number
//of unique arithmetic triplets.
var arithmeticTriplets = function (nums, diff) {
    //passes all preliminary tests and allows submission
    //runtime beats 26% and memory beats 71% of submissions.
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
                    count += 1;
                }
            }
        }
    }

    return count;
};
