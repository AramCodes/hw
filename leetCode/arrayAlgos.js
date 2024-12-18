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

//Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k. The
//value of |x| is defined as: x if x >= 0. -x if x < 0.
var countKDifference = function (nums, k) {
	//passes all preliminary tests and allows submission
	//runtime beats 59% and memory beats 74% of submissions.
	let pairs = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (Math.abs(nums[i] - nums[j]) === k) {
				pairs++;
			}
		}
	}

	return pairs;
};

//Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty
//string "". A string is palindromic if it reads the same forward and backward.
var firstPalindrome = function (words) {
	//passes all preliminary tests and allows submission
	//runtime beats 43% and memory beats 54% of submissions.
	for (let i = 0; i < words.length; i++) {
		if (words[i] === words[i].split("").reverse().join("")) {
			return words[i];
		}
	}

	return "";
};

//You are given two integer arrays nums1 and nums2 of sizes n and m, respectively. Calculate the following values: answer1 : the number
//of indices i such that nums1[i] exists in nums2. answer2 : the number of indices i such that nums2[i] exists in nums1. Return
//[answer1,answer2].
var findIntersectionValues = function (nums1, nums2) {
	//passes all preliminary tests and allows submission
	//runtime beats 33% and memory beats 57% of submissions.
	const response = [];
	let count1 = 0;
	let count2 = 0;

	for (let i = 0; i < nums1.length; i++) {
		if (nums2.includes(nums1[i])) {
			count1++;
		}
	}

	response.push(count1);

	for (let i = 0; i < nums2.length; i++) {
		if (nums1.includes(nums2[i])) {
			count2++;
		}
	}

	response.push(count2);

	return response;
};

//You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all
//characters in the string appear in the string allowed. Return the number of consistent strings in the array words.
var countConsistentStrings = function (allowed, words) {
	//passes all preliminary tests and allows submission
	//runtime beats 90% and memory beats 97% of submissions.
	let count = 0;

	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		let consistent = true;

		for (let j = 0; j < word.length; j++) {
			if (!allowed.includes(word[j])) {
				consistent = false;
				break;
			}
		}

		if (consistent) {
			count++;
		}
	}

	return count;
};

//There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on
//point 0 with altitude equal 0. You are given an integer array gain of length n where gain[i] is the net gain in altitude between
//points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
var largestAltitude = function (gain) {
	//passes all preliminary tests and allows submission
	//runtime beats 44% and memory beats 19% of submissions.
	let bikerAlt = 0;
	const difPoints = [0];

	for (let i = 0; i < gain.length; i++) {
		bikerAlt += gain[i];
		difPoints.push(bikerAlt);
	}

	return Math.max(...difPoints);
};

var largestAltitude = function (gain) {
	//passes all preliminary tests and allows submission
	//improvement on runtime to 93% and memory to 29% of submissions.
	const difPoints = [0];

	for (let i = 0; i < gain.length; i++) {
		difPoints.push(difPoints[difPoints.length - 1] + gain[i]);
	}

	return Math.max(...difPoints);
};

//Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr. A subarray is a contiguous
//subsequence of the array.

var sumOddLengthSubarrays = function (arr) {
	//passes all preliminary tests and allows submission
	//runtime beats 78% and memory beats 46% of submissions.
	let count = 0;

	function sumBetween(start, end) {
		return arr[end] - (arr[start - 1] || 0);
	}

	for (let i = 1; i < arr.length; i++) {
		arr[i] += arr[i - 1];
	}

	for (let start = 0; start < arr.length; start++) {
		for (let end = start; end < arr.length; end += 2) {
			count += sumBetween(start, end);
		}
	}

	return count;
};

var sumOddLengthSubarrays = function (arr) {};

//209. Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is
//greater than or equal to target. If there is no such subarray, return 0 instead.
var minSubArrayLen = function (target, nums) {
	//passes all preliminary tests and allows submission
	//runtime beats 56% and memory beats 69% of submissions.
	let prev = 0;
	let lowestArray = 0;

	for (let i = 0; i < nums.length; i++) {
		prev += nums[i];
		lowestArray++;

		if (prev >= target) {
			break;
		}
	}

	if (prev < target) {
		return 0;
	}

	for (let i = 1; i < nums.length; i++) {
		const currSum = prev - nums[i - 1];
		if (currSum >= target) {
			lowestArray--;
			prev = currSum;
		} else {
			prev = currSum + nums[i + lowestArray - 1];
		}
	}

	return lowestArray;
};

//Given an array of strings words and a string s, determine if s is an acronym of words. The string s is considered an acronym of
//words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed
//from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"]. Return true if s is an acronym of words, and false
//otherwise.
var isAcronym = function (words, s) {
	//passes all preliminary tests and allows submission
	//runtime beats 98% and memory beats 28% of submissions
	let count = 0;
	const newS = [...s];
	s = s.split("");

	for (let i = 0; i < words.length; i++) {
		for (let j = 0; j < 1; j++) {
			if (newS[j] === words[i][j]) {
				newS.splice(newS.indexOf(words[i][j]), 1);
				count++;
			}
		}
	}

	return count === words.length && count === s.length;
};

//You are given an array of positive integers nums. Alice and Bob are playing a game. In the game, Alice can choose either all
//single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of
//her numbers is strictly greater than the sum of Bob's numbers. Return true if Alice can win this game, otherwise, return false.
var canAliceWin = function (nums) {
	//passes all preliminary tests and allows submission
	//runtime beats 38% and memory beats 84% of submissions
	let single = 0;
	let double = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < 10) {
			single += nums[i];
		} else {
			double += nums[i];
		}
	}

	return single > double || double > single;
};

var canAliceWin = function (nums) {
	//passes all preliminary tests and allows submission
	//major improment on runtime to 65% from 38% and major decrease on memory to 42% from 84%
	const chance = [0, 0];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < 10) {
			chance[0] += nums[i];
		} else {
			chance[1] += nums[i];
		}
	}

	return chance[0] > chance[1] || chance[1] > chance[0];
};

//Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter. Return the
//number of different transformations among all words we have.
var uniqueMorseRepresentations = function (words) {
	//passes all preliminary tests and allows submission
	//runtime beats 80% and memory beats 96% of submissions.
	const morseLetters = [
		".-",
		"-...",
		"-.-.",
		"-..",
		".",
		"..-.",
		"--.",
		"....",
		"..",
		".---",
		"-.-",
		".-..",
		"--",
		"-.",
		"---",
		".--.",
		"--.-",
		".-.",
		"...",
		"-",
		"..-",
		"...-",
		".--",
		"-..-",
		"-.--",
		"--..",
	];
	const letters = "abcdefghijklmnopqrstuvwxyz";
	const morseWords = [];
	let currWord = "";

	for (let i = 0; i < words.length; i++) {
		currWord = "";

		for (let j = 0; j < words[i].length; j++) {
			let index = letters.indexOf(words[i][j]);
			currWord += morseLetters[index];
		}

		morseWords.push(currWord);
	}

	return Array.from(new Set(morseWords)).length;
};

//Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of
//(nums[i]-1)*(nums[j]-1).
var maxProduct = function (nums) {
	//passes all preliminary tests and allows submission
	//runtime beats 64% and memory beats 98% of submissions
	const firstMax = nums.splice(nums.indexOf(Math.max(...nums)), 1);
	const secMax = nums.splice(nums.indexOf(Math.max(...nums)), 1);

	return (secMax[0] - 1) * (firstMax[0] - 1);
};

//The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d). Given an integer array nums, choose four
//distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is
//maximized. Return the maximum such product difference.
var maxProductDifference = function (nums) {
	//passes all preliminary tests and allows submission
	//runtime beats 67% and memory 46%
	nums.sort((a, b) => a - b);

	return nums[nums.length - 2] * nums[nums.length - 1] - nums[1] * nums[0];
};

var maxProductDifference = function (nums) {
	//passes all preliminary tests and allows submission
	//humoungous improvements runtime beats 99.52% from 67% and memory beats 71% from 46%
	const firstMax = nums.splice(nums.indexOf(Math.max(...nums)), 1);
	const secMax = nums.splice(nums.indexOf(Math.max(...nums)), 1);
	const firstMin = nums.splice(nums.indexOf(Math.min(...nums)), 1);
	const secMin = nums.splice(nums.indexOf(Math.min(...nums)), 1);

	return firstMax * secMax - firstMin * secMin;
};

//On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the
//points in the order given by points.
var minTimeToVisitAllPoints = function (points) {
	//passes all preliminary tests and allows submission
	//runtime beats 97% and memory beats 99% of submissions
	let secs = 0;

	for (let i = 1; i < points.length; i++) {
		//for loop checks the difference of the x and y coordinates on the cartesian plane and returns the max to get the
		//diagonal length.
		secs += Math.max(
			Math.abs(points[i][0] - points[i - 1][0]),
			Math.abs(points[i][1] - points[i - 1][1])
		);
	}

	return secs;
};

//You are given a 0-indexed integer array nums and an integer k. Your task is to perform the following operation exactly k times in
//order to maximize your score: 1. Select an element m from nums. 2. Remove the selected element m from the array. 3. Add a new element
//with a value of m + 1 to the array. 4. Increase your score by m. 5. Return the maximum score you can achieve after performing the
//operation exactly k times.
var maximizeSum = function (nums, k) {
	//passes all preliminary tests and allows submission
	//runtime beats 25% and memory beats 8% of submissions.Needs drastic improvement
	let max = 0;
	let m;

	while (k > 0) {
		m = Number(nums.splice(nums.indexOf(Math.max(...nums)), 1));
		max += m;
		nums.push(m + 1);
		k--;
	}

	return max;
};

var maximizeSum = function (nums, k) {
	//passes all preliminary tests and allows submission
	//Improvements made, runtime beats 22%, down from 25%, and memory 15%, up from 8%, of submissions.
	let max = 0;
	let m;

	for (let i = 0; i < k; i++) {
		m = Number(nums.splice(nums.indexOf(Math.max(...nums)), 1));
		max += m;
		nums.push(m + 1);
	}

	return max;
};

var maximizeSum = function (nums, k) {
	//passes all preliminary tests and allows submission
	//Improvements made runtime beats 60%, up from 22%, and memory beats 39%, up from 8%, of submissions.
	let max = 0;
	let m;

	for (let i = 0; i < k; i++) {
		m = Math.max(...nums);
		nums.splice(nums.indexOf(m), 1);
		nums.push(m + 1);
		max += m;
	}

	return max;
};

// A distinct string is a string that is present only once in an array. Given an array of strings arr, and an integer k, return the
// kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "". Note that the strings are
// considered in the order in which they appear in the array.
var kthDistinct = function (arr, k) {
	//passes all preliminary tests and allows submission
	//runtime beats 78% and memory beats 60% of submissions.
	const hash = {};

	for (let i = 0; i < arr.length; i++) {
		if (!hash[arr[i]]) {
			hash[arr[i]] = 1;
		} else {
			hash[arr[i]] += 1;
		}
	}

	for (let string in hash) {
		if (hash[string] === 1) {
			if (k === 1) {
				return string;
			} else if (k > 1) {
				k--;
			}
		}
	}

	return "";
};

var kthDistinct = function (arr, k) {
	//passes all preliminary tests and allows submission
	//runtime decreased from 78% to 25% and memory increased from 60% to 96% of submissions.
	const distinct = arr.filter(
		(value) => arr.indexOf(value) == arr.lastIndexOf(value)
	);

	return distinct[k - 1] || "";
};

//You are given two arrays of equal length, nums1 and nums2. Each element in nums1 has been increased (or decreased
//in the case of negative) by an integer, represented by the variable x. As a result, nums1 becomes equal to nums2.
//Two arrays are considered equal when they contain the same integers with the same frequencies. Return the integer
//x.
var addedInteger = function (nums1, nums2) {
	//passes all preliminary tests and allows submission
	//runtime beats 60% and memory beats 35% of submissions.
	nums1.sort((a, b) => a - b);

	nums2.sort((a, b) => a - b);

	return nums2[0] - nums1[0];
};

var addedInteger = function (nums1, nums2) {
	//passes all preliminary tests and allows submission
	//major improvements up to 92% on runtime and 61% on memory
	const first = Math.min(...nums1);
	const second = Math.min(...nums2);

	return second - first;
};

//You are given a 0-indexed array of strings details. Each element of details provides information about a given passenger compressed
//into a string of length 15. The system is such that: The first ten characters consist of the phone number of passengers. The next
//character denotes the gender of the person. The following two characters are used to indicate the age of the person. The last two
//characters determine the seat allotted to that person. Return the number of passengers who are strictly more than 60 years old.
var countSeniors = function (details) {
	//passes all preliminary tests and allows submission
	//runtime beats 28% and memory beats 16% of submissions
	let count = 0;
	let age;

	for (let i = 0; i < details.length; i++) {
		age = Number(details[i].slice(11, 13));

		if (age > 60) {
			count++;
		}
	}

	return count;
};

var countSeniors = function (details) {
	//passes all preliminary tests and allows submission
	// medium improvements runtime up 37% from 28% and memory up 63% from 16% of submissions
	let count = 0;

	for (let i = 0; i < details.length; i++) {
		if (Number(details[i].slice(11, 13)) > 60) {
			count++;
		}
	}

	return count;
};

//You are given a 1-indexed integer array nums of length n. An element nums[i] of nums is called special if i divides n, i.e.
//n % i == 0. Return the sum of the squares of all special elements of nums.
var sumOfSquares = function (nums) {
	//passes all preliminary tests and allows submission
	//runtime beats 62% and memory beats 30% of submissions
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums.length % (i + 1) === 0) {
			sum += nums[i] * nums[i];
		}
	}

	return sum;
};

var sumOfSquares = function (nums) {
	//passes all preliminary tests and allows submission
	//improvement on runtime to 75% up from 62% and memory stayed the same at 30% of submissions
	let sum = 0;

	nums.forEach((num, i) => {
		if (nums.length % (i + 1) === 0) {
			sum += nums[i] * nums[i];
		}
	});

	return sum;
};

var sumOfSquares = function (nums) {
	//passes all preliminary tests and allows submission
	// great improvement on runtime to 91% up from 75% and memory up to 92% from 30% of submissions
	let sum = 0;

	nums.forEach((_, i) => {
		if (nums.length % (i + 1) === 0) {
			sum += nums[i] * nums[i];
		}
	});

	return sum;
};

//You are given a 0-indexed array words consisting of distinct strings. The string words[i] can be paired
//with the string words[j] if: The string words[i] is equal to the reversed string of words[j]. 0 <= i < j
//< words.length. Return the maximum number of pairs that can be formed from the array words. Note that
//each string can belong in at most one pair.
var maximumNumberOfStringPairs = function (words) {
	//passes all preliminary tests and allows submission
	//runtime beats 80% and memory beats 36% of all submissions
	const arr = [];

	for (let i = 0; i < words.length; i++) {
		for (let j = i + 1; j < words.length; j++) {
			if ([...words[i]].reverse().join("") === words[j]) {
				arr.push(words[i]);
			}
		}
	}

	return arr.length;
};

//Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets. A triplet (arr[i], arr[j], arr[k]) is good if the following
//conditions are true: 1. 0 <= i < j < k < arr.length 2. |arr[i] - arr[j]| <= a 3. |arr[j] - arr[k]| <= b 4. |arr[i] - arr[k]| <= c. Where |x| denotes the absolute value of x.
//Return the number of good triplets.
var countGoodTriplets = function (arr, a, b, c) {
	//passes all preliminary tests and allows submission
	//runtime beats 29% and memory beats 62% of all submissions
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			for (let k = j + 1; k < arr.length; k++) {
				if (
					Math.abs(arr[i] - arr[j]) <= a &&
					Math.abs(arr[j] - arr[k]) <= b &&
					Math.abs(arr[i] - arr[k]) <= c
				) {
					count++;
				}
			}
		}
	}

	return count;
};

//A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in
//non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected
//height of the ith student in line. You are given an integer array heights representing the current order that the students are
//standing in. Each heights[i] is the height of the ith student in line (0-indexed). Return the number of indices where
//heights[i] != expected[i].
var heightChecker = function (heights) {
	//passes passes all preliminary tests and allows submission
	//runtimes beats 66% and memory beats 79% of all submissions
	let count = 0;
	const expected = heights.slice().sort((a, b) => a - b);

	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== expected[i]) {
			count++;
		}
	}

	return count;
};

var heightChecker = function (heights) {
	//passes passes all preliminary tests and allows submission
	//runtime increase to 71% from 66% and memory decreased from 79% to 70%
	let count = 0;
	const expected = heights.slice().sort((a, b) => a - b);

	heights.forEach((height, i) => {
		if (heights[i] !== expected[i]) {
			count++;
		}
	});

	return count;
};

//Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after
//separating them in the same order they appear in nums. To separate the digits of an integer is to get all the digits it has
//in the same order. For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].
var separateDigits = function (nums) {
	//passes all preliminary tests and allows submission
	//runtime beats 30% and memory beats 33% of all submissions.
	let digits = nums.toString().split("");

	digits = digits.filter(function (item) {
		return item !== ",";
	});

	digits = digits.map(Number);

	return digits;
};

//use of arrow function instead of function keyword saw massive improvments
var separateDigits = function (nums) {
	//passes all preliminary tests and allows submission
	//runtime increased from 30% to 83% and memory from 33% to 67%
	let digits = nums.toString().split("");

	digits = digits.filter((item) => {
		return item !== ",";
	});

	digits = digits.map(Number);

	return digits;
};

//Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where: answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
//answer[1] is a list of all distinct integers in nums2 which are not present in nums1. Note that the integers in the lists may be
//returned in any order.
var findDifference = function (nums1, nums2) {
	//passes all preliminary tests and allows submission
	//runtime beats 6% and memory beats 93%
	const answer = [[], []];
	const length = Math.max(nums1.length, nums2.length);

	for (let i = 0; i < length; i++) {
		if (
			!nums2.includes(nums1[i]) &&
			!answer[0].includes(nums1[i]) &&
			typeof nums1[i] !== "undefined"
		) {
			answer[0].push(nums1[i]);
		}

		if (
			!nums1.includes(nums2[i]) &&
			!answer[1].includes(nums2[i]) &&
			typeof nums2[i] !== "undefined"
		) {
			answer[1].push(nums2[i]);
		}
	}

	return answer;
};
//optimized solution but uses set can't use since entered through array problems
var findDifference = function (nums1, nums2) {
	//passes all preliminary tests and allows submission
	//runtime increased from 6% to 85% and memory decreased from 93% to 82%
	const set1 = new Set(nums1);
	const set2 = new Set(nums2);

	for (let num of nums1) {
		if (set2.has(num)) {
			set1.delete(num);
			set2.delete(num);
		}
	}

	return [[...set1], [...set2]];
};

//Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image. To flip an image
//horizontally means that each row of the image is reversed. For example, flipping [1,1,0] horizontally results in [0,1,1]. To invert
//an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0,1,1] results in [1,0,0].
var flipAndInvertImage = function (image) {
	//passes all preliminary tests and allows submission
	//runtime beats 89% and memory beats 70% of submissions.
	for (let i = 0; i < image.length; i++) {
		for (let j = 0; j < image[i].length; j++) {
			image[i].reverse();

			if (image[i][j] === 0) {
				image[i][j] = 1;
			} else if (image[i][j] === 1) {
				image[i][j] = 0;
			}
		}
	}

	return image;
};

//You are given a 0-indexed integer array batteryPercentages having length n, denoting the battery percentages of n 0-indexed devices. Your task is to test each device i in
//order from 0 to n - 1, by performing the following test operations: If batteryPercentages[i] is greater than 0: 1. Increment the count of tested devices. 2. Decrease the
//battery percentage of all devices with indices j in the range [i + 1, n - 1] by 1, ensuring their battery percentage never goes below 0, i.e, batteryPercentages[j] =
//max(0, batteryPercentages[j] - 1). 3. Move to the next device. 4. Otherwise, move to the next device without performing any test. 5. Return an integer denoting the number
//of devices that will be tested after performing the test operations in order.
var countTestedDevices = function (batteryPercentages) {
	//passes all preliminary tests and allows submission
	//runtime beats 21% and memory beats 13%of all submission. major room for improvement
	let count = 0;

	for (let i = 0; i < batteryPercentages.length; i++) {
		if (batteryPercentages[i] > 0) {
			count++;
			for (let j = i + 1; j < batteryPercentages.length; j++) {
				batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
			}
		}
	}

	return count;
};

// switched outter loop to a for each and saw drastic improvements
var countTestedDevices = function (batteryPercentages) {
	//passes all preliminary tests and allows submission
	//runtime increased to 50% from 21% and memory increased to 73% from 13%
	let count = 0;

	batteryPercentages.forEach((_, i) => {
		if (batteryPercentages[i] > 0) {
			count++;
			for (let j = i + 1; j < batteryPercentages.length; j++) {
				batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
			}
		}
	});

	return count;
};

//using pertage parameter further increased ranking
var countTestedDevices = function (batteryPercentages) {
	//passes all preliminary tests and allows submission
	//runtime increased to 80% from 50% and memory decreased to 73% from 69%
	let count = 0;

	batteryPercentages.forEach((percentatge, i) => {
		if (percentatge > 0) {
			count++;
			for (let j = i + 1; j < batteryPercentages.length; j++) {
				batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
			}
		}
	});

	return count;
};

//Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have
//the same frequency, sort them in
//decreasing order. Return the sorted array.
var frequencySort = function (nums) {
	//passes all preliminary tests and allows submission
	//runtime beats 74% and memory beats 60% of all submissions
	const freqMap = new Map();

	for (let num of nums) {
		freqMap.set(num, (freqMap.get(num) || 0) + 1);
	}

	return nums.sort((a, b) => {
		if (freqMap.get(a) === freqMap.get(b)) {
			return b - a;
		}
		return freqMap.get(a) - freqMap.get(b);
	});
};

//Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that
//nums[i] == nums[j] and (i * j) is divisible by k.

var countPairs = function (nums, k) {
	//passes all preliminary tests and allows submission
	//runtime beats 14% and memory beats 84%
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j < nums.length; j++) {
			if (nums[i] === nums[j] && (i * j) % k === 0 && i < j) {
				count++;
			}
		}
	}

	return count;
};

//i+1 instead of 1
var countPairs = function (nums, k) {
	//passes all preliminary tests and allows submission
	//increased runtime from 14% to 75% and decreased memory from 84% to 47%
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j] && (i * j) % k === 0 && i < j) {
				count++;
			}
		}
	}

	return count;
};

//You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return
//the destination city, that is, the city without any path outgoing to another city. It is guaranteed that the graph of paths forms a
//line without any loop, therefore, there will be exactly one destination city.
var destCity = function (paths) {
	//passes all preliminary test but doesn't allow submissions
	//runtime beats 59% and memory beats 97% of all submissions.
	while (paths.length > 1) {
		const head = paths.shift();

		for (let i = 0; i < paths.length; i++) {
			if (head[0] === paths[i][1]) {
				paths[i][1] = head[1];
				break;
			}

			if (head[1] === paths[i][0]) {
				paths[i][0] = head[0];
				break;
			}
		}
	}
	return paths[0][1];
};

//Given an integer array hours representing times in hours, return an integer denoting the number of pairs i, j where i < j and
//hours[i] + hours[j] forms a complete day. A complete day is defined as a time duration that is an exact multiple of 24 hours. For
//example, 1 day is 24 hours, 2 days is 48 hours, 3 days is 72 hours, and so on.
var countCompleteDayPairs = function (hours) {
	//passes all preliminary test but doesn't allow submissions
	//runtime beats 12% and memory beats 68% of all submissions.
	let count = 0;

	for (let i = 0; i < hours.length; i++) {
		for (let j = i + 1; j < hours.length; j++) {
			if ((hours[i] + hours[j]) % 24 === 0) {
				count++;
			}
		}
	}

	return count;
};

//A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
//s[i] == 'I' if perm[i] < perm[i + 1], and s[i] == 'D' if perm[i] > perm[i + 1]. Given a string s, reconstruct the permutation perm
//and return it. If there are multiple valid permutations perm, return any of them.
var diStringMatch = function (s) {
	//passes all preliminary test but doesn't allow submissions
	//runtime beats 57% and memory beats 87% of all submissions.
	let low = 0;
	let high = s.length;
	const out = [];

	for (let i = 0; i < s.length + 1; i++) {
		if (s[i] === "I") {
			out[i] = low;
			low++;
		} else {
			out[i] = high;
			high--;
		}
	}

	return out;
};

//You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1. For
//example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3]. Return the minimum number of operations
//needed to make nums strictly increasing. An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i <
//nums.length - 1. An array of length 1 is trivially strictly increasing.
var minOperations = function (nums) {
	//passes all preliminary test but doesn't allow submissions
	//runtime beats 36% and memory beats 99.29% of all submissions.
	let count = 0;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] <= nums[i - 1]) {
			count += nums[i - 1] - nums[i] + 1;
			nums[i] = nums[i - 1] + 1;
		}
	}

	return count;
};

var minOperations = function (nums) {
	//passes all preliminary test but doesn't allow submissions
	//runtime beats 63% and memory beats 43% of all submissions.
	let count = 0;
	let dif;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= nums[i + 1]) {
			dif = Math.abs(nums[i + 1] - nums[i]);
			count += dif + 1;
			nums[i + 1] += dif + 1;
		}
	}

	return count;
};

//removed math.abs and switch position to make memory gains
var minOperations = function (nums) {
	//passes all preliminary test but doesn't allow submissions
	//runtime beats 63% and memory beats 53% from 43% of all submissions.
	let count = 0;
	let dif;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= nums[i + 1]) {
			dif = nums[i] - nums[i + 1];
			count += dif + 1;
			nums[i + 1] += dif + 1;
		}
	}

	return count;
};
