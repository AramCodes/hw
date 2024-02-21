function validAnagrams(str1, str2) {
    str1Formated = str1.split("");
    str2Formated = str2.split("");

    let count = 0;

    str1Formated.filter((letter) => {
        if (str2Formated.includes(letter)) {
            count++;
        }
    });

    return count === str2.length ? true : false;
}

module.exports = validAnagrams;

// non higher order function versions
// function isAnagram(str1, str2) {
//     let count = 0;

//     for (let i = 0; i < str1.length; i++) {
//         if (str2.includes(str1[i])) {
//             count++;
//         }
//     }

//     if (count === str1.length && count === str2.length) {
//         return true;
//     }
//     return false;
// }
// or
// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     const newStr1 = str1.split("").sort().join("");
//     const newStr2 = str2.split("").sort().join("");
//     return newStr1 === newStr2;
// }
