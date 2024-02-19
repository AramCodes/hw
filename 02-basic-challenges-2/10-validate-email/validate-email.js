function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return emailRegex.test(email);
}

module.exports = validateEmail;

// function validateEmail(email) {
//     if (email.indexOf('@') === -1) {
//       return false;
//     }

//     const [localPart, domain] = email.split('@');

//     if (localPart.length === 0 || domain.length < 3) {
//       return false;
//     }

//     const domainExtension = domain.split('.');
//     if (
//       domainExtension.length < 2 ||
//       domainExtension[1].length < 2
//     ) {
//       return false;
//     }

//     return true;
// }
