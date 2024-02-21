function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }

    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;

    if (
        lowerCaseRegex.test(password) &&
        upperCaseRegex.test(password) &&
        digitRegex.test(password)
    ) {
        return true;
    }

    return false;
}

module.exports = validatePassword;

// function validatePassword(password) {
//     return /(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*\d){1,}).{8,}/.test(password)
// }

// function validatePassword(password) {
//     const isLengthValid = password.length >= 8;

//     const hasOneUppercase =
//         password
//             .split("")
//             .filter((char) => char === char.toUpperCase() && isNaN(char))
//             .length >= 1;
//     const hasOneLowercase =
//         password
//             .split("")
//             .filter((char) => char === char.toLowerCase() && isNaN(char))
//             .length >= 1;
//     const hasOneDigits =
//         password.split("").filter((char) => !isNaN(char) && char !== " ")
//             .length >= 1;

//     return isLengthValid && hasTwoUppercase && hasTwoLowercase && hasTwoDigits;
// }

// const validatePassword = (password) => {
//     const isLengthValid = password.length >= 8
//     const hasUpperCase = /[A-Z]/.test(password)
//     const hasLowerCase = /[a-z]/.test(password)
//     const hasDigits = /\d/.test(password)
//     return isLengthValid && hasUpperCase && hasLowerCase && hasDigits
// }

// function validatePassword(password) {
//     const isLengthValid = password.length >= 8;
//     const hasUppercase = password
//         .split("")
//         .some(
//             (char) => char === char.toUpperCase() && char !== char.toLowerCase()
//         );
//     const hasLowercase = password
//         .split("")
//         .some(
//             (char) => char === char.toLowerCase() && char !== char.toUpperCase()
//         );
//     const hasDigit = password
//         .split("")
//         .some((char) => !isNaN(parseInt(char, 10)));
//     return isLengthValid && hasUppercase && hasLowercase && hasDigit;
// }
