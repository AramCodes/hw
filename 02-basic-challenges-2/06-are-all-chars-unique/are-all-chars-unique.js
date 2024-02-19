function areAllCharactersUnique(str) {
    const unique = new Set(str);

    if (unique.size === str.length) {
        return true;
    }
    return false;
}

module.exports = areAllCharactersUnique;

// function areAllCharactersUnique(str) {
//     const charSet = new Set();
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (charSet.has(char)) {
//         return false;
//       }
//       charSet.add(char);
//     }
//     return true;
// }

// function areAllCharactersUnique(str) {
//     // Create an object to keep track of the characters in the string
//     const charCount = {};
//     // Loop through the string
//     for (let i = 0; i < str.length; i++) {
//       // Get the current character
//       const char = str[i];
//       // If the character is already in the object, return false
//       if (charCount[char]) {
//         return false;
//       }
//       // Add the current character to the object
//       charCount[char] = true;
//     }
//     // If no characters are repeated, return true
//     return true;
// }
