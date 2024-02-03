// Takes in an object and returns the key with largest value

function locateLargestKey(obj) {
    let max = 0;
    let maxKey = "";

    for (let char in obj) {
        if (obj[char] > max) {
            max = obj[char];
            maxKey = char;
        }
    }
    return maxKey;
}

// Takes in an object property, and value and adds new key/value pair and return boolean if property exist

function addNewProperty(obj, propName, propValue) {
    obj[propName] = propValue;

    obj.hasOwnProperty(propName);
}

// Function that takes in an object and returns the number of key it has

function countKeys(obj) {
    let keys = Object.keys(obj);
    return keys.length;
}

// Function that return an array of values from an object

function getObjectValues(obj) {
    return Object.values(obj);
}

// Function checks if string is a palindrom

function isPalindrome(str) {
    if (str === str.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

// Function returns all keys of a passed in object to an array

function keysToArray(obj) {
    let arr = [];

    for (let key in obj) {
        arr.push(key);
    }

    return arr;
}

// Function takes in array of numbers and returns "The first two numbers are [firstNumber] and
// [secondNumber]." if input is valid

function printNumbers(numbers) {
    const [firstNumber, secondNumber] = numbers;

    if (numbers.length < 2) {
        return "The arguments provided are invalid.";
    } else if (
        typeof firstNumber === "number" &&
        typeof secondNumber === "number"
    ) {
        return `The first two numbers are ${firstNumber} and ${secondNumber}.`;
    } else {
        return "The arguments provided are invalid.";
    }
}

// Function takes in an array of numbers, usesset so that only unique numbers mater, returns an unique array

function uniqueValues(arr) {
    const unique = new Set(arr);

    const array = Array.from(unique);

    return array;
}

// or

function removeDupesFromArray(arr) {
    const uniqueItems = [];

    arr.forEach((item) => {
        if (!uniqueItems.includes(item)) {
            uniqueItems.push(item);
        }
    });
    return uniqueItems;
}

// or

function removeDupesFromArray(arr) {
    return [...new Set(arr)];
}

// Function takes in an object destructures properties, and displays messageif all props are there or error if one is missing

function printPersonInfo(person) {
    const { name, age, address } = person;

    if (!name || !age || !address) {
        return "Missing required key-value pair(s).";
    } else {
        let message = `The person's name is ${name}, they are ${age} years old, and they live at ${address}.`;
        return message;
    }
}

// Function takes an array of numbers and return those numbers using an arrow function

function sumNumbers(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const sum = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

    return sum;
}

// Function merges two arrays using spread operator

function mergeArrays(arr1, arr2) {
    let array = arr1.concat(...arr2);

    return array;
}

// Function takes any amount or arrays and returns an array with all max values of inputed arrays

function largestNumbers(...arrays) {
    const largestNums = [];
    arrays.forEach((array) => {
        largestNums.push(Math.max(...array));
    });
    return largestNums;

    // Async function returns "[name] is [age] years old" after awaiting a delay

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function returnValueAfterDelay(ms, name) {
        await delay(ms);
        return name;
    }

    async function main(name, age, delay) {
        //Add your code below
        await returnValueAfterDelay(delay, main);

        return `${name} is ${age} years old.`;
    }

    // Function uses a calback to check if number is even then returns a new array of even numbers based on the true or false response of the calback

    let callback = (number) => {
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    };

    function filterEvens(array, callback) {
        let newArr = [];

        array.forEach((number) => {
            if (callback(number)) {
                newArr.push(number);
            }
        });

        return newArr;
    }

    // Function called delay that will be passed an integer representing time in milliseconds and returns a Promise that resolves after that amount of time.

    function delay(time) {
        return new Promise((resolve) =>
            setTimeout(() => resolve("Times up!"), time)
        );
    }

    // Function that return drcleiameter give a radius and logs it in a object called circle

    function createCircle(radius) {
        let circle = {
            diameter: getDiameter(radius),
        };
        return circle;
    }

    function getDiameter(radius) {
        return radius * 2;
    }

    // functions that calculate off of PI

    const PI = 3.14;

    function calculateCircleArea(radius) {
        return PI * radius ** 2;
    }

    function calculateSphereVolume(radius) {
        let volume = (4 / 3) * PI * radius ** 3;

        return Number(volume.toFixed(2));
    }

    // Function uses call function between two function to get sum and the apply discount

    function calculateTotal(numbers) {
        const sum = numbers.reduce((el, curr) => el + curr);
        return sum;
    }
    function discountedTotal(numbers, discount) {
        const discountedNumbers = numbers.map((el) => el - el * discount);
        return calculateTotal.call(null, discountedNumbers);
    }

    // Function uses apply betwwen two functions to get sum

    function sum(num1, num2, num3) {
        return num1 + num2 + num3;
    }

    function sumArray(array) {
        return sum.apply(null, array);
    }

    // Class uses another class and outer function to calculate through constructor injection

    class Circle {
        constructor(radius, areaCalculator) {
            this.radius = radius;
            this.areaCalculator = areaCalculator; //this is constructor injection
        }

        getArea() {
            return this.areaCalculator.calculate(this.radius);
        }
    }

    class AreaCalculator {
        calculate(radius) {
            return 3.14 * radius ** 2;
        }
    }

    function main(radius) {
        let areaCalculator = new AreaCalculator();
        let circle = new Circle(radius, areaCalculator);
        return circle.getArea();
    }

    // time conversion

    let cadena = ":" + s[3] + s[4] + ":" + s[6] + s[7];
    if (s.includes("PM")) {
        let hora = parseInt(s[0] + s[1]) + 12;
        if (hora == 24) {
            return "12" + cadena;
        }
        return hora + cadena;
    } else {
        if (s.substring(0, 2) == "12") {
            return "00" + cadena;
        }
        return s.replace("AM", "");
    }

    // find a unique item in an array

    const result = arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));

    // add diagonals in a matrix and get difference of their absolute values

    return Math.abs(arr.reduce((s, r, i) => (s += r[i] - r.reverse()[i]), 0));

    // *********
    // count how many times(occrrences of) a value occurs in an array as another array

    function countingSort(arr) {
        let bucket = Array(100).fill(0);
        for (let i = 0; i < arr.length; i++) {
            bucket[arr[i]]++;
        }
        return bucket;
    }

    // ******Panick string**********
    function panic(str) {
        return str.split(" ").join(" 😱 ").toUpperCase() + "!";
    }

    // ******Whisper **************
    function whisper(str) {
        if (str.endsWith("!")) {
            return "shh... " + str.slice(0, -1).toLowerCase();
        }
        return "shh... " + str.toLowerCase();
    }

    // **********Alt Caps******************
    function altCaps(str) {
        // assemble each character back into a new string
        let newStr = "";
        // loop through the string
        for (let i = 0; i < str.length; i++) {
            // uppercase every character with an even index
            if (i % 2 === 0) {
                newStr += str[i].toUpperCase();
            } else {
                newStr += str[i];
            }
        }
        return newStr;
    }

    // ***********Helper Function uppercase every word using two functions***********
    function capitalizeWord(word) {
        return word[0].toUpperCase() + word.slice(1);
    }

    function toTitleCase(str) {
        let newStr = str.split(" ");
        let newCap = newStr.map((word) => {
            return capitalizeWord(word);
        });

        return newCap.join(" ");
    }

    // *****not fizzBuzz********
    function awardBonuses() {
        for (let i = 1; i < 101; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("JACKPOT! 1 Million and a Yatch");
            } else if (i % 3 === 0) {
                console.log("Vaction");
            } else if (i % 5 === 0) {
                console.log("100,000 bonus");
            } else {
                console.log(":(");
            }
        }
    }

    // *********Emojify***********************
    const emojis = {
        smile: "😊",
        angry: "😠",
        party: "🎉",
        heart: "💜",
        cat: "🐱",
        dog: "🐕",
    };

    function emojifyWord(word) {
        if (!word.startsWith(":") && !word.endsWith(":")) return word;

        const slice = word.slice(1, -1);
        if (emojis[slice]) {
            return emojis[slice];
        } else {
            return slice;
        }
    }

    function emojifyPhrase(phrase) {
        const newPhrase = phrase.split(" ").map((word) => emojifyWord(word));
        console.log(newPhrase.join(" "));
    }

    console.log(emojifyWord(":heart:"));
    console.log(emojifyWord(":flower:"));
    console.log(emojifyWord("elephant"));

    console.log(emojifyPhrase("I :heart: my :cat:"));
    console.log(emojifyPhrase("I :heart: my :elephant:"));

    // ************anagram*****************************************
    function isAnagram(str1, str2) {
        let count = 0;

        for (let i = 0; i < str1.length; i++) {
            if (str2.includes(str1[i])) {
                count++;
            }
        }

        if (count === str1.length && count === str2.length) {
            return true;
        }
        return false;
    }

    // or

    function isAnagram(str1, str2) {
        if (str1.length !== str2.length) return false;

        const newStr1 = str1.split("").sort().join("");
        const newStr2 = str2.split("").sort().join("");
        return newStr1 === newStr2;
    }

    // *******************reversed string************************************
    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    // or

    function reverseString(str) {
        let reversedString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversedString += str[i];
        }
        return reversedString;
    }

    // and

    function reverseStringsInArray(arr) {
        return arr.map((item) => reverseString(item));
    }

    // *****************palindromes*********************************************
    function isPalindrome(str) {
        if (str === str.split("").reverse().join("")) {
            return true;
        }
        return false;
    }

    // or

    function isPalindrome(str) {
        // reverse the word using a backward for loop to create a new string
        let reverseStr = "";

        for (let i = str.length - 1; i >= 0; i--) {
            reverseStr += str[i];
        }

        // compare the new string to the original word - are they equal?
        return reverseStr === str;
    }

    // ***********************Remove Dupplicates*******************************************
    // brute force

    function removeDupeChars(chars) {
        let dupesRemoved = "";

        for (let i = 0; i < chars.length; i++) {
            if (!dupesRemoved.includes(chars[i])) {
                dupesRemoved += chars[i];
            }
        }

        return dupesRemoved;
    }

    // *******************Frequency of letters*************************************************

    function countChars(str) {
        const count = {};

        // remove all spaces and lowercase all characters of the input str
        const name = str.toLowerCase().split(" ").join("");

        // loop through the letters of the string
        for (let i = 0; i < name.length; i++) {
            // if the character is not the obj, add it, give it a value of 1
            if (!count[name[i]]) {
                count[name[i]] = 1;
            } else {
                // if the character is already in the object, increment that char's value
                count[name[i]] += 1;
            }
        }

        return count;
    }

    // ***************************Turn into an Array************************************************

    function flatten(arr) {
        return arr.flat();
    }

    or;

    function flatten(arr) {
        const newArr = [];

        arr.forEach((element) => {
            if (Array.isArray(element)) {
                element.forEach((item) => newArr.push(item));
            } else {
                newArr.push(element);
            }
        });
        return newArr;
    }

    // *********************** Add up an array**********************************************

    function sumArray(arr) {
        return arr.reduce((total, cur) => {
            return (total += cur);
        });
    }

    or;

    function sumArray(arr) {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    // ***********************Evil corp data farm*********************************************
    function transformData(data) {
        return data.map((person) => {
            const full = `${person.name.first} ${person.name.last}`;
            const formattedDOB = new Date(person.dob.date).toDateString();

            return {
                fullName: full,
                birthday: formattedDOB,
            };
        });
    }

    // or

    function transformData(data) {
        return data.map(({ name, dob }) => {
            return {
                fullName: `${name.first} ${name.last}`,
                birthday: new Date(dob.date).toDateString(),
            };
        });
    }

    // *************Return free podcat out of data array ***************************
    function getFreePodcasts(data) {
        return data
            .filter((item) => item.paid === false)
            .map((podcast) => {
                return {
                    title: podcast.title,
                    rating: podcast.rating,
                    paid: podcast.paid,
                };
            });
    }

    // **************** get on sale candy **************************************************
    function getSaleItems(data) {
        return data
            .filter((product) => product.type === "sweet")
            .map(({ item, price }) => {
                return {
                    item,
                    price,
                };
            });
    }

    // ************************ using reduce *********************************************
    function total(arr) {
        const total = arr.reduce((acc, curr) => {
            return acc + curr.price;
        }, 0);

        total.toFixed(2);
    }

    // ******************reducing array with objects**************************************
    function totalSavory(arr) {
        return arr.reduce((acc, curr) => {
            if (curr.type === "savory") return (acc += curr.price);
            return acc;
        }, 0);
    }

    // ******************** Make a flattened array out of several and avoid dupes*****************
    function getUniqueTags(data) {
        const tags = data.map((podcast) => podcast.tags).flat();

        const uniqueTags = [];

        tags.forEach((tag) => {
            if (!uniqueTags.includes(tag)) {
                uniqueTags.push(tag);
            }
        });

        return uniqueTags;
    }

    // or

    function getUniqueTags(data) {
        const tags = data.map((podcast) => podcast.tags).flat();
        const uniqueTags = {};

        return tags.filter((tag) => {
            if (!uniqueTags[tag]) {
                uniqueTags[tag] = true;
                return true;
            }
            return false;
        });
    }

    // ****************** Sort podcat array of objects*****************************************'
    function sortByDuration(data, flightLength) {
        if (flightLength > 60) {
            data.sort((a, b) => b.duration - a.duration);
        } else {
            data.sort((a, b) => a.duration - b.duration);
        }

        data.forEach((podcast) => console.log(podcast.title, podcast.duration));
    }

    // or

    function sortByDuration(data, flightLength) {
        if (flightLength > 60) {
            data.sort((a, b) => b.duration - a.duration);
        } else {
            data.sort((a, b) => a.duration - b.duration);
        }
        data.forEach(({ title, duration }, index) => {
            console.log(`${index + 1}. ${title}, ${duration} minutes`);
        });
    }

    // *******************************Average*******************************************************
    function calcAverageLikes(data) {
        const total = data.reduce((acc, curr) => {
            return (acc += curr.likes);
        }, 0);

        return total / data.length;
    }

    // ********************************Random award***************************************************
    const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

    function getHosts(data) {
        return data.reduce((acc, curr) => {
            return acc.concat(curr.hosts);
        }, []);
    }

    function assignAwards(data) {
        const hosts = getHosts(data);

        return hosts.map((host) => {
            const randIndex = Math.floor(Math.random() * awards.length);
            return `${awards[randIndex]} ${host}`;
        });
    }

    // *************************************Advance anagram************************************************
    function sortPhrase(phrase) {
        return phrase.toLowerCase().split("").sort().join("").trim();
    }

    function isAnagramInArray(anagram, arr) {
        return arr.filter((item) => {
            const word1 = sortPhrase(anagram);
            const word2 = sortPhrase(item);

            return word1 === word2;
        });
    }
}
