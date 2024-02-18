function isPalindrome(str) {
    const test = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const end = test.length - 1;

    for (let i = 0; i < test.length / 2; i++) {
        if (test[i] != test[end - i]) return false;
    }
    return true;
}

module.exports = isPalindrome;

// function isPalindrome(str) {
//  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//  const strReversed = cleanedStr.split("").reverse().join("");
//  return cleanedStr === strReversed;
// }
